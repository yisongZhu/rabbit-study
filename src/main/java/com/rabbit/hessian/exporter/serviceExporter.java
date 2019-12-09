package com.rabbit.hessian.exporter;

import com.rabbit.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.remoting.caucho.HessianServiceExporter;

@Configuration
public class serviceExporter {
    @Autowired
    private TestbusinessUiService testbusinessUiService;
    @Autowired
    private TestcaseUiService testcaseUiService;

    @Autowired
    private StepUiService stepUiService;

    @Autowired
    private  IdWorkerService idWorkerService;

    @Autowired
    private TTestBusinessUiLogService testBusinessUiLogService;

    @Autowired
    private TTestCaseUiLogService testCaseUiLogService;

    @Autowired TTestStepUiLogService testStepUiLogService;

    @Bean(name = "/hessian/testbusinessUiService")
    public HessianServiceExporter testbusinessUiService() {
        HessianServiceExporter exporter = new HessianServiceExporter();
        exporter.setService(testbusinessUiService);
        exporter.setServiceInterface(TestbusinessUiService.class);
        return exporter;
    }

    @Bean(name = "/hessian/testcaseUiService")
    public HessianServiceExporter testcaseUiService() {
        HessianServiceExporter exporter = new HessianServiceExporter();
        exporter.setService(testcaseUiService);
        exporter.setServiceInterface(TestcaseUiService.class);
        return exporter;
    }

    @Bean(name = "/hessian/stepUiService")
    public HessianServiceExporter stepUiService() {
        HessianServiceExporter exporter = new HessianServiceExporter();
        exporter.setService(stepUiService);
        exporter.setServiceInterface(StepUiService.class);
        return exporter;
    }

    @Bean(name = "/hessian/idWorkerService")
    public HessianServiceExporter idWorkerService() {
        HessianServiceExporter exporter = new HessianServiceExporter();
        exporter.setService(idWorkerService);
        exporter.setServiceInterface(IdWorkerService.class);
        return exporter;
    }

    @Bean(name = "/hessian/testBusinessUiLogService")
    public HessianServiceExporter testBusinessUiLogService() {
        HessianServiceExporter exporter = new HessianServiceExporter();
        exporter.setService(testBusinessUiLogService);
        exporter.setServiceInterface(TTestBusinessUiLogService.class);
        return exporter;
    }

    @Bean(name = "/hessian/testCaseUiLogService")
    public HessianServiceExporter testCaseUiLogService() {
        HessianServiceExporter exporter = new HessianServiceExporter();
        exporter.setService(testCaseUiLogService);
        exporter.setServiceInterface(TTestCaseUiLogService.class);
        return exporter;
    }
    @Bean(name = "/hessian/testStepUiLogService")
    public HessianServiceExporter testStepUiLogService() {
        HessianServiceExporter exporter = new HessianServiceExporter();
        exporter.setService(testStepUiLogService);
        exporter.setServiceInterface(TTestStepUiLogService.class);
        return exporter;
    }


}
