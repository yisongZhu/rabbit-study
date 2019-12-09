package com.rabbit.task;

import com.alibaba.fastjson.JSONObject;
import com.caucho.hessian.client.HessianRuntimeException;
import com.rabbit.dto.UiTemplateParams;
import com.rabbit.hessian.factory.config.ClientFactory;
import com.rabbit.model.*;
import com.rabbit.service.*;
import com.rabbit.utils.DateUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.net.InetAddress;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;


/**
 * 自动化定时任务
 */
@Slf4j
@Component("autoTestNewTask")
public class AutoTestNewTask {

    @Autowired
    private  ExcUiService excUiService;

    public void uiTest(Job job) throws Exception {
        final ExecutorService exec = Executors.newFixedThreadPool(1);
        Callable<String> call = new Callable<String>() {
            @Override
            public String call() throws Exception {
                excUiService.excJob(job);
                return "线程执行完成.";
            }
        };
        exec.submit(call).get();
    }
}
