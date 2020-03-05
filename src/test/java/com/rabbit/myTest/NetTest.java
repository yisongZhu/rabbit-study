package com.rabbit.myTest;

import com.rabbit.utils.NetUtil;
import io.restassured.path.json.JsonPath;
import org.junit.Test;

public class NetTest {

    @Test
    public void test1() throws Exception {

        JsonPath json = new JsonPath("{\"code\":{\"code\":\"0\",\"msg\":\"操作成功\",\"ok\":true,\"fallback\":false},\"result\":{\"id\":\"f7e2d11ead724e05a77f81d911870e71\",\"project_code\":\"KDSX\",\"project_name\":\"KDSX经销售生意系统\",\"name\":\"性能测试22966\",\"code\":\"KDSX20200303006144\",\"memo\":null,\"creator\":\"1\",\"create_at\":\"2020-03-03 13:43\",\"mender\":\"系统管理员\",\"update_at\":\"2020-03-03 13:43\",\"status\":\"1\",\"content\":\"\",\"update_startat\":null,\"update_endat\":null,\"case_type\":\"0\",\"verify_status\":\"0\",\"module\":\"性能测试\",\"labels\":null,\"parent_id\":\"\",\"expected_results\":\"\",\"testCaseSdResultBeanList\":null,\"testCaseParamList\":[],\"stepList\":null,\"apiBean\":null,\"apiId\":null,\"case_biz_memo\":\"step1111\",\"flag\":\"1\",\"startDate\":null,\"endDate\":null,\"parent_name\":\"\",\"selfCode\":null,\"reversed_steps_memo\":null}}");
        Object o = json.get();
        System.out.println(0);
    }


}
