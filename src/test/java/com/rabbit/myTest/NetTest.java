package com.rabbit.myTest;

import com.rabbit.utils.NetUtil;
import org.junit.Test;

public class NetTest {

    @Test
    public void test1() throws Exception {

        System.out.println(NetUtil.getLocalIpv4Address());
    }


}
