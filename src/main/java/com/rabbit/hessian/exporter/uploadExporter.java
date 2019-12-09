package com.rabbit.hessian.exporter;

import com.rabbit.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.remoting.caucho.HessianServiceExporter;

@Configuration
public class uploadExporter {
    @Autowired
    private FileUploadService fileUploadService;

    @Bean(name = "/hessian/fileUploadService")
    public HessianServiceExporter testbusinessUiService() {
        HessianServiceExporter exporter = new HessianServiceExporter();
        exporter.setService(fileUploadService);
        exporter.setServiceInterface(FileUploadService.class);
        return exporter;
    }
}
