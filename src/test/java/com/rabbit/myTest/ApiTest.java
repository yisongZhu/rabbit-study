package com.rabbit.myTest;

import com.rabbit.dto.ApiDto;
import com.rabbit.model.ApiResult;
import com.rabbit.model.TJmeterExcDetail;
import com.rabbit.utils.FastJSONHelper;
import com.rabbit.utils.XmlUtils;
import com.rabbit.utils.apitest.RequestExecutor;
import io.restassured.response.Response;
import org.junit.Test;

import java.net.URLDecoder;
import java.util.List;

public class ApiTest {

    @Test
    public void test() throws Exception {
        ApiDto apiDto = new ApiDto();
        apiDto.setPrepend("http://");
        apiDto.setDomain("rabbittest.xyz/public");
        apiDto.setMethod("get");
        apiDto.setReqHeader("[{\"key\":\"token\",\"value\":\"eyJhbGciOiJIUzI1NiJ9.eyJMT0dJTl9VU0VSX0tFWSI6IjJlMWNjY2JmLTBkMjQtNGE4MS05NWQ5LTYyMTlkOGRmNzBiMSJ9.qUcEAha1C_Z0oK1AnRum8XHZ-EO2EFDhhDaZ71p7pJE\"}]");
        apiDto.setReqBodyType("json");
        apiDto.setReqQuery("[{\"key\":\"11111\",\"value\":234123}]");
        apiDto.setPath("/projectPage/listPage?pageNum=1&pageSize=10&pageCount=2&serchData=%7B%22pageName%22:%22%22,%22projectId%22:1%7D");
        RequestExecutor requestExecutor = new RequestExecutor(apiDto);
        ApiResult response = requestExecutor.executeHttpRequest();
        System.out.println(response.getRspBody());
    }

    @Test
    public void test1() throws Exception {
        System.out.println(URLDecoder.decode("%7B%22pageName%22:%22%22,%22projectId%22:1%7D"));
        System.out.println(URLDecoder.decode("{\"pageName\":\"\",\"projectId\":1}"));

        System.out.println("?asdfasdf?".indexOf("?"));
    }
}
