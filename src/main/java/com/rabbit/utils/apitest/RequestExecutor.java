package com.rabbit.utils.apitest;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.rabbit.dto.ApiDto;
import com.rabbit.model.ApiResult;
import com.rabbit.utils.FastJSONHelper;
import com.rabbit.utils.StringUtilHelper;
import io.restassured.RestAssured;
import io.restassured.http.Header;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;

import java.net.URLDecoder;

import static io.restassured.RestAssured.*;
import static io.restassured.config.JsonConfig.jsonConfig;
import static io.restassured.config.SSLConfig.sslConfig;
import static io.restassured.path.json.config.JsonPathConfig.NumberReturnType.BIG_DECIMAL;

@Slf4j
public class RequestExecutor {
    private ApiDto tApi;
    private ApiResult apiResult;
    private RequestSpecification requestSpecification;


    public RequestExecutor(ApiDto tApi) {
        this.tApi = tApi;
        apiResult = new ApiResult();
        requestSpecification = given();
    }

    //trust all hosts regardless if the SSL certificate is invalid
    private void trustAllHosts() {
        RestAssured.config = RestAssured.config().sslConfig(sslConfig().relaxedHTTPSValidation());
        RestAssured.config = RestAssured.config().jsonConfig(jsonConfig().numberReturnType(BIG_DECIMAL));
        requestSpecification.config(RestAssured.config);

    }

    private void applyHeaders() {
        apiResult.setReqHeaders(tApi.getReqHeader());
        if (StringUtils.isNotBlank(tApi.getReqHeader())) {
            try {
                JSONArray headers = FastJSONHelper.deserialize(tApi.getReqHeader(), JSONArray.class);
                for (Object header : headers) {
                    JSONObject jo = (JSONObject) header;
                    if (jo.getString("key").equalsIgnoreCase("cookie")) {
                        String[] cookies = jo.getString("value").split(";");
                        for (String s : cookies) {
                            String[] c = jo.getString("value").split("=");
                            requestSpecification.cookie(c[0], c[1]);
                        }
                    } else {
                        requestSpecification.header(new Header(jo.getString("key"), jo.getString("value")));
                    }
                }
            } catch (Exception e) {
                apiResult.setException("解析Header失败：" + e.getMessage());
//                throw new IllegalArgumentException("解析Header失败：" + e.getMessage());
            }
        }
    }

    private void applyQueryParameters() {
        apiResult.setReqParams(tApi.getReqQuery());
        if (StringUtils.isNotBlank(tApi.getReqQuery())) {
            try {
                JSONArray reqQuerys = FastJSONHelper.deserialize(tApi.getReqQuery(), JSONArray.class);
                for (Object reqQuery : reqQuerys) {
                    JSONObject jo = (JSONObject) reqQuery;
//                    String value = URLDecoder.decode(jo.getString("value"));
                    requestSpecification.params(jo.getString("key"), URLDecoder.decode(jo.getString("value")));
                }
            } catch (Exception e) {
                apiResult.setException("解析parameters失败：" + e.getMessage());
//                throw new IllegalArgumentException("解析parameters失败：" + e.getMessage());
            }
        }
    }

    private void applyFormParam() {
        apiResult.setReqFormParams(tApi.getReqBodyData());
        if (StringUtils.isNotBlank(tApi.getReqBodyData())) {
            try {
                JSONArray reqBodyDatas = FastJSONHelper.deserialize(tApi.getReqBodyData(), JSONArray.class);
                for (Object reqBodyData : reqBodyDatas) {
                    JSONObject jo = (JSONObject) reqBodyData;
                    requestSpecification.formParam(jo.getString("key"), jo.getString("value"));
                }
            } catch (Exception e) {
                apiResult.setException("解析表单数据失败：" + e.getMessage());
//                throw new IllegalArgumentException("解析表单数据失败：" + e.getMessage());
            }
        }
    }

    private void applyRawParam() {
        apiResult.setReqBody(tApi.getReqBodyJson());
        requestSpecification = requestSpecification.body(tApi.getReqBodyJson());
    }

    public ApiResult executeHttpRequest() {
        trustAllHosts();
        applyHeaders();
        applyQueryParameters();
        apiResult.setReqMethod(tApi.getMethod());
        if (tApi.getMethod().equalsIgnoreCase("post")) {
            if (tApi.getReqBodyType().equals("form")) {
                applyFormParam();
            } else if (tApi.getReqBodyType().equals("raw")) {
                applyRawParam();
            }
        }
        Response response = null;
        String url = tApi.getPrepend() + tApi.getDomain() + tApi.getPath();
        if (url.indexOf("?") != -1) {
            url = url.substring(0, url.indexOf("?"));
        }
        apiResult.setReqUrl(url);
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
                    apiResult.setException(String.format("不支持这个请求 %s.", url));
            }
        } catch (Exception e) {
            apiResult.setException("请求异常：" + e.getMessage());
            return apiResult;
        }
        apiResult.setRspStatusCode(response.getStatusCode());
        apiResult.setRspTime(response.getTime());
        apiResult.setRspBodySize(response.getBody().asByteArray().length);
        apiResult.setRspHeaders(FastJSONHelper.serialize(response.getHeaders()));
        apiResult.setRspBody(response.getBody().prettyPrint());
        apiResult.setRspBodyType(StringUtilHelper.checkStringFormat(apiResult.getRspBody()));
        return apiResult;
    }
}
