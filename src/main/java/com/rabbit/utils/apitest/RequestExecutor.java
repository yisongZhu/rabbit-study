package com.rabbit.utils.apitest;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.rabbit.dto.ApiDto;
import com.rabbit.utils.FastJSONHelper;
import io.restassured.RestAssured;
import io.restassured.http.Header;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.apache.commons.lang3.StringUtils;

import static io.restassured.RestAssured.*;
import static io.restassured.config.JsonConfig.jsonConfig;
import static io.restassured.config.SSLConfig.sslConfig;
import static io.restassured.path.json.config.JsonPathConfig.NumberReturnType.BIG_DECIMAL;

public class RequestExecutor {
    private ApiDto tApi;

    private RequestSpecification requestSpecification;


    public RequestExecutor(ApiDto tApi) {
        this.tApi = tApi;
        requestSpecification = given();
        trustAllHosts();
        applyHeaders();
        applyQueryParameters();
        if (tApi.getMethod().equalsIgnoreCase("post")) {
            if (tApi.getReqBodyType().equals("form")) {
                applyFormParam();
            } else if (tApi.getReqBodyType().equals("raw")) {
                applyRawParam();
            }
        }
    }

    //trust all hosts regardless if the SSL certificate is invalid
    private void trustAllHosts() {
        RestAssured.config = RestAssured.config().sslConfig(sslConfig().relaxedHTTPSValidation());
        RestAssured.config = RestAssured.config().jsonConfig(jsonConfig().numberReturnType(BIG_DECIMAL));
        requestSpecification.config(RestAssured.config);

    }

    private void applyHeaders() {
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
                throw new IllegalArgumentException("解析Header失败：" + e.getMessage());
            }
        }
    }

    private void applyQueryParameters() {
        if (StringUtils.isNotBlank(tApi.getReqQuery())) {
            try {
                JSONArray reqQuerys = FastJSONHelper.deserialize(tApi.getReqQuery(), JSONArray.class);
                for (Object reqQuery : reqQuerys) {
                    JSONObject jo = (JSONObject) reqQuery;
                    requestSpecification.params(jo.getString("key"), jo.getString("value"));
                }
            } catch (Exception e) {
                throw new IllegalArgumentException("解析parameters失败：" + e.getMessage());
            }
        }
    }

    private void applyFormParam() {
        if (StringUtils.isNotBlank(tApi.getReqBodyData())) {
            try {
                JSONArray reqBodyDatas = FastJSONHelper.deserialize(tApi.getReqBodyData(), JSONArray.class);
                for (Object reqBodyData : reqBodyDatas) {
                    JSONObject jo = (JSONObject) reqBodyData;
                    requestSpecification.formParam(jo.getString("key"), jo.getString("value"));
                }
            } catch (Exception e) {
                throw new IllegalArgumentException("解析表单数据失败：" + e.getMessage());
            }
        }
    }

    private void applyRawParam() {
        requestSpecification = requestSpecification.body(tApi.getReqBodyJson());
    }

    public Response executeHttpRequest() {
        Response response = null;
        String url = tApi.getPrepend() + tApi.getDomain() + tApi.getPath();
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
                throw new UnsupportedOperationException(String.format("不支持这个请求 %s.", url));
        }
        return response;
    }
}
