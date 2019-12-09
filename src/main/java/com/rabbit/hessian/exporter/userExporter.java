package com.rabbit.hessian.exporter;

import com.rabbit.service.UserTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.remoting.caucho.HessianServiceExporter;

@Configuration
public class userExporter {
    @Autowired
    private UserTestService userTestService;
    @Bean(name = "/hessian/userTestService")
    public HessianServiceExporter accountService() {
        HessianServiceExporter exporter = new HessianServiceExporter();
        exporter.setService(userTestService);
        exporter.setServiceInterface(UserTestService.class);
        return exporter;
    }
}
