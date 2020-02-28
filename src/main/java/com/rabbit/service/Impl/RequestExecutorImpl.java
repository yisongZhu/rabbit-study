package com.rabbit.service.Impl;

import com.rabbit.model.TApiResult;
import com.rabbit.model.TApi;
import com.rabbit.model.po.*;
import com.rabbit.service.RequestExecutorServer;
import com.rabbit.service.TApiService;
import com.rabbit.service.TFileInfoService;
import com.rabbit.utils.BeanUtils;
import com.rabbit.utils.MyStringUtils;
import com.rabbit.utils.StringUtilHelper;
import com.rabbit.utils.apitest.ApiUtil;
import io.restassured.RestAssured;
import io.restassured.config.EncoderConfig;
import io.restassured.config.HttpClientConfig;
import io.restassured.http.Header;
import io.restassured.path.json.JsonPath;
import io.restassured.path.xml.XmlPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.io.File;
import java.net.ConnectException;
import java.net.URLDecoder;
import java.net.UnknownHostException;
import java.util.*;

import static io.restassured.RestAssured.given;
import static io.restassured.config.JsonConfig.jsonConfig;
import static io.restassured.config.SSLConfig.sslConfig;
import static io.restassured.path.json.config.JsonPathConfig.NumberReturnType.BIG_DECIMAL;

@Slf4j
@Service
public class RequestExecutorImpl implements RequestExecutorServer {
    @Resource
    private TFileInfoService fileInfoService;

    @Resource
    private TApiService apiService;

    @Override
    public TApiResult executeHttpRequest(TApi tApi, Map<String, Object> gVars, Map<String, Object> caseVars) {
        beforeHandle(tApi, gVars, caseVars);
        TApiResult TApiResult = new TApiResult();
        TApiResult.setCreateTime(new Date());
        RequestSpecification requestSpecification = given();
        trustAllHosts(requestSpecification);
        applyHeaders(requestSpecification, tApi, gVars, caseVars, TApiResult);
        applyQueryParameters(requestSpecification, tApi, gVars, caseVars, TApiResult);
        tApi.setDomain(MyStringUtils.replaceKeyFromMap(tApi.getDomain(), gVars, caseVars));
        TApiResult.setReqMethod(tApi.getMethod());
        if (tApi.getMethod().equalsIgnoreCase("post")) {
            TApiResult.setReqBodyType(tApi.getReqBodyType());
            if (tApi.getReqBodyType().equals("form")) {
                applyFormParam(requestSpecification, tApi, gVars, caseVars, TApiResult);
            } else if (tApi.getReqBodyType().equals("raw")) {
                applyRawParam(requestSpecification, tApi, gVars, caseVars, TApiResult);
            }
        }
        Response response = null;
        String url = tApi.getDomain() + tApi.getPath();
        if (url.indexOf("?") != -1) {
            url = url.substring(0, url.indexOf("?"));
        }
        TApiResult.setReqUrl(url);
        try {
            switch (tApi.getMethod().toUpperCase()) {
                case "GET":
                    response = requestSpecification.when().get(url);
                    break;
                case "POST":
                    response = requestSpecification.when().post(url);
                    break;
                case "PATCH":
                    response = requestSpecification.when().patch(url);
                    break;
                case "DELETE":
                    response = requestSpecification.when().delete(url);
                    break;
                case "PUT":
                    response = requestSpecification.when().put(url);
                    break;
                case "OPTIONS":
                    response = requestSpecification.when().options(url);
                    break;
                case "HEAD":
                    response = requestSpecification.when().head(url);
                    break;
                default:
                    TApiResult.setException(String.format("不支持这个请求 %s.", url));
            }
        } catch (Exception e) {
            TApiResult.setResultType(-1);
            if (e instanceof UnknownHostException) {
                TApiResult.setException("请求异常,URL[" + e.getMessage() + "]无法连接");
            } else if (e instanceof ConnectException) {
                TApiResult.setException("请求异常,URL[" + tApi.getDomain() + "]无法连接");
            } else {
                TApiResult.setException("请求异常：" + e.getMessage());
            }
            log.info("请求异常:{}",e.getMessage());
            return TApiResult;
        }
        TApiResult.setRspStatusCode(response.getStatusCode());
        TApiResult.setRspTime(response.getTime());
        TApiResult.setRspBodySize(response.getBody().asByteArray().length);
        List<com.rabbit.model.po.Header> listHeader = new ArrayList<>();
        response.getHeaders().asList().forEach(x -> {
            com.rabbit.model.po.Header header = new com.rabbit.model.po.Header();
            header.setKey(x.getName());
            header.setValue(x.getValue());
            listHeader.add(header);
        });
        TApiResult.setRspHeaders(listHeader);
        TApiResult.setRspBody(response.getBody().prettyPrint());
        TApiResult.setRspBodyType(StringUtilHelper.checkStringFormat(TApiResult.getRspBody()));
        Boolean handResult = handleAssert(tApi, caseVars, TApiResult); //断言
        handleExtract(tApi, caseVars, TApiResult); //提取参数
        if (handResult) {
            //响应断言成功
            TApiResult.setResultType(1);
        } else {
            //断言失败
            TApiResult.setResultType(0);
        }
        return TApiResult;
    }

    private void beforeHandle(TApi tApi, Map<String, Object> gVars, Map<String, Object> caseVars) {
        //前置处理器
        List<Action> beforeExcs = tApi.getBeforeExcs();
        if (beforeExcs != null) {
            for (Action action : beforeExcs) {
                apiService.runAction(action, gVars, caseVars);
            }
        }
    }

    //trust all hosts regardless if the SSL certificate is invalid
    private void trustAllHosts(RequestSpecification requestSpecification) {
        RestAssured.config = RestAssured.config().sslConfig(sslConfig().relaxedHTTPSValidation());
        RestAssured.config = RestAssured.config().jsonConfig(jsonConfig().numberReturnType(BIG_DECIMAL));
        Map<String, Object> httpClientParams = new HashMap<String, Object>();
        httpClientParams.put("http.connection.timeout", 60000);
        httpClientParams.put("http.socket.timeout", 60000);
        httpClientParams.put("http.connection.manager.timeout", 60000);
        RestAssured.config = RestAssured.config().httpClient(HttpClientConfig.httpClientConfig().addParams(httpClientParams));
        RestAssured.config = RestAssured.config().encoderConfig(EncoderConfig.encoderConfig().defaultContentCharset("UTF-8"));
        requestSpecification.config(RestAssured.config);
    }

    private void applyHeaders(RequestSpecification requestSpecification, TApi tApi, Map<String, Object> gVars, Map<String, Object> caseVars, TApiResult TApiResult) {
        List<com.rabbit.model.po.Header> headers = tApi.getReqHeader();
        for (com.rabbit.model.po.Header header : headers) {
            header.setValue(MyStringUtils.replaceKeyFromMap(header.getValue(), gVars, caseVars));
            if (header.getKey().equalsIgnoreCase("cookie")) {
                String[] cookies = header.getValue().split(";");
                for (String s : cookies) {
                    String[] c = header.getValue().split("=");
                    requestSpecification.cookie(c[0], c[1]);
                }
            } else {
                requestSpecification.header(new Header(header.getKey(), header.getValue()));
            }
        }
        TApiResult.setReqHeaders(headers);
    }

    private void applyQueryParameters(RequestSpecification requestSpecification, TApi tApi, Map<String, Object> gVars, Map<String, Object> caseVars, TApiResult TApiResult) {
        List<Query> reqQuerys = tApi.getReqQuery();
        try {
            for (Query reqQuery : reqQuerys) {
                reqQuery.setValue(MyStringUtils.replaceKeyFromMap(reqQuery.getValue(), gVars, caseVars));
                requestSpecification.queryParam(reqQuery.getKey(), URLDecoder.decode(reqQuery.getValue()));
            }
            TApiResult.setReqQuery(tApi.getReqQuery());
        } catch (Exception e) {
            TApiResult.setException("解析parameters失败：" + e.getMessage());
        }
    }

    private void applyFormParam(RequestSpecification requestSpecification, TApi tApi, Map<String, Object> gVars, Map<String, Object> caseVars, TApiResult TApiResult) {
        try {
            List<BodyData> reqBodyDatas = tApi.getReqBodyData();
            for (BodyData reqBodyData : reqBodyDatas) {
                reqBodyData.setValue(MyStringUtils.replaceKeyFromMap(reqBodyData.getValue(), gVars, caseVars));
                if (reqBodyData.getType().equals("file")) {
                    String absolutePath = fileInfoService.getAbsolutePath(2, tApi.getId(), reqBodyData.getValue());
                    log.info("导入的文件名称为：{}", absolutePath);
                    if (absolutePath == null) {
                        reqBodyData.setValue("没有找到对应的文件，请检查！！！");
                        requestSpecification.multiPart(reqBodyData.getKey(), "");
                    } else {
                        requestSpecification.multiPart(reqBodyData.getKey(), new File(absolutePath));
                    }
                } else {
                    requestSpecification.formParam(reqBodyData.getKey(), reqBodyData.getValue());
                }
            }
            TApiResult.setReqBodyData(tApi.getReqBodyData());
        } catch (Exception e) {
            TApiResult.setException("解析表单数据失败：" + e.getMessage());
        }
    }

    private void applyRawParam(RequestSpecification requestSpecification, TApi tApi, Map<String, Object> gVars, Map<String, Object> caseVars, TApiResult TApiResult) {
        tApi.setReqBodyJson(MyStringUtils.replaceKeyFromMap(tApi.getReqBodyJson(), gVars, caseVars));
        TApiResult.setReqBodyJson(tApi.getReqBodyJson());
        requestSpecification.body(tApi.getReqBodyJson());
    }


    //提取参数
    private void handleExtract(TApi tApi, Map<String, Object> caseVars, TApiResult TApiResult) {
        List<ExtractResult> extracts = new ArrayList();
        List<Extract> reqExtract = tApi.getReqExtract();
        for (Extract extract : reqExtract) {
            String extractExpress = extract.getExtractExpress() == null ? "" : extract.getExtractExpress();
            ExtractResult extractResult = new ExtractResult();
            BeanUtils.copyBeanProp(extractResult, extract);
            switch (extract.getDataSource()) {
                case "bodyJson":
                    if (TApiResult.getRspBodyType().equals("json")) {
                        JsonPath json = new JsonPath(TApiResult.getRspBody());
                        Object value = json.get(extractExpress);
                        String realType = ApiUtil.getObjRealType(value);
                        if (realType.equals("null")) {
                            extractResult.setRealType(realType);
                            extractResult.setRealValue("");
                        } else {
                            extractResult.setRealType(realType);
                            extractResult.setRealValue(value.toString());
                        }
                    } else {
                        extractResult.setRealType("null");
                        extractResult.setRealValue("");
                    }
                    break;
                case "bodyXml":
                    if (TApiResult.getRspBodyType().equals("bodyXml")) {
                        XmlPath xmlPath = new XmlPath(TApiResult.getRspBody());
                        Object value = xmlPath.get(extractExpress);
                        String realType = ApiUtil.getObjRealType(value);
                        if (realType.equals("null")) {
                            extractResult.setRealType("null");
                            extractResult.setRealValue("");
                        } else {
                            extractResult.setRealType(realType);
                            extractResult.setRealValue(value.toString());
                        }
                    } else {
                        extractResult.setRealType("null");
                        extractResult.setRealValue("");
                    }
                    break;
                case "bodyReg":
                    String value = MyStringUtils.extractValue(TApiResult.getRspBody(), extractExpress, 1);
                    if (value == null) {
                        extractResult.setRealType("null");
                        extractResult.setRealValue("");
                    } else {
                        extractResult.setRealType("string");
                        extractResult.setRealValue(value);
                    }
                    break;
                case "code":
                    String realType = ApiUtil.getObjRealType(TApiResult.getRspStatusCode());
                    if (realType.equals("null")) {
                        extractResult.setRealType("null");
                        extractResult.setRealValue("");
                    } else {
                        extractResult.setRealType(realType);
                        extractResult.setRealValue(String.valueOf(TApiResult.getRspStatusCode()));
                    }
                    break;
                case "header":
                    com.rabbit.model.po.Header header = TApiResult.getRspHeaders().stream().filter(x -> x.getKey().equals(extractExpress)).findFirst().orElse(null);
                    if (header == null) {
                        extractResult.setRealType("null");
                    } else {
                        extractResult.setRealType("string");
                    }
                    extractResult.setRealValue(header.getValue());
                    break;
                default:
            }
            caseVars.put(extractResult.getVarName(), extractResult.getRealValue());
            extracts.add(extractResult);
        }
        TApiResult.setRspExtracts(extracts);
    }

    //批量断言
    private Boolean handleAssert(TApi tApi, Map<String, Object> caseVars, TApiResult TApiResult) {
        boolean flag = true;
        List<AssertResult> assertResults = new ArrayList();
        List<Assert> reqAssert = tApi.getReqAssert();
        for (Assert iassert : reqAssert) {
            AssertResult assertResult = assertion(iassert, caseVars, TApiResult);
            if (!assertResult.getResult()) {
                flag = false;
            }
            assertResults.add(assertResult);
        }
        TApiResult.setRspAsserts(assertResults);
        return flag;
    }


    //单个断言
    private AssertResult assertion(Assert assertion, Map<String, Object> caseVars, TApiResult TApiResult) {
        //处理接口变量类型的参数
        if (assertion.getExtractType().equals("apiVar")) {
            String expectValue = assertion.getExpectValue();
            if (expectValue == null) {
                assertion.setExtractType("null");
                assertion.setExpectValue("");
            } else {
                Object o = caseVars.get(expectValue);
                String objRealType = ApiUtil.getObjRealType(o);
                assertion.setExtractType(objRealType);
                assertion.setExpectValue(o.toString());
            }
        }
        AssertResult assertResult = new AssertResult();
        BeanUtils.copyBeanProp(assertResult, assertion);
        String extractExpress = assertion.getExtractExpress() == null ? "" : assertion.getExtractExpress();
        switch (assertion.getDataSource()) {
            case "bodyJson":
                if (TApiResult.getRspBodyType().equals("json")) {
                    JsonPath json = new JsonPath(TApiResult.getRspBody());
                    Object value = json.get(extractExpress);
                    String realType = ApiUtil.getObjRealType(value);
                    if (realType.equals("null")) {
                        assertResult.setRealType(realType);
                        assertResult.setRealValue("");
                    } else {
                        assertResult.setRealType(realType);
                        assertResult.setRealValue(value.toString());
                    }
                } else {
                    assertResult.setRealType("null");
                    assertResult.setRealValue("");
                }
                break;
            case "bodyXml":
                if (TApiResult.getRspBodyType().equals("bodyXml")) {
                    XmlPath xmlPath = new XmlPath(TApiResult.getRspBody());
                    Object value = xmlPath.get(extractExpress);
                    String realType = ApiUtil.getObjRealType(value);
                    if (realType.equals("null")) {
                        assertResult.setRealType(realType);
                        assertResult.setRealValue("");
                    } else {
                        assertResult.setRealType(realType);
                        assertResult.setRealValue(value.toString());
                    }
                } else {
                    assertResult.setRealType("null");
                    assertResult.setRealValue("");
                }
                break;
            case "bodyReg":
                String value = MyStringUtils.extractValue(TApiResult.getRspBody(), assertion.getExtractExpress(), 1);
                if (value == null) {
                    assertResult.setRealType("null");
                    assertResult.setRealValue("");
                } else {
                    assertResult.setRealType("string");
                    assertResult.setRealValue(value);
                }
                break;
            case "code":
                String realType = ApiUtil.getObjRealType(TApiResult.getRspStatusCode());
                if (realType.equals("null")) {
                    assertResult.setRealType("null");
                    assertResult.setRealValue("");
                } else {
                    assertResult.setRealType(realType);
                    assertResult.setRealValue(String.valueOf(TApiResult.getRspStatusCode()));
                }
                break;
            case "header":
                com.rabbit.model.po.Header header = TApiResult.getRspHeaders().stream().filter(x -> x.getKey().equals(extractExpress)).findFirst().orElse(null);
                if (header == null) {
                    assertResult.setRealType("null");
                } else {
                    assertResult.setRealType("string");
                }
                assertResult.setRealValue(header.getValue());
                break;
            default:
        }
        boolean assertionResult = ApiUtil.getAssertionResult(assertion, assertResult.getRealType(), assertResult.getRealValue());
        assertResult.setResult(assertionResult);
        return assertResult;
    }
}
