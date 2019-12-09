package com.rabbit.service.Impl;

import com.alibaba.fastjson.JSONObject;
import com.rabbit.dao.TPlanSuiteUiMapper;
import com.rabbit.dao.TTestSuiteUiLogMapper;
import com.rabbit.hessian.factory.config.ClientFactory;
import com.rabbit.model.*;
import com.rabbit.service.ClientService;
import com.rabbit.service.ExcUiService;
import com.rabbit.service.TTestPlanUiNewLogService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Slf4j
@Service
public class excJobServiceImpl implements ExcUiService {

    @Autowired
    private ClientFactory clientFactory;

    @Autowired
    private ClientService clientService;

    @Autowired
    private TTestPlanUiNewLogService testPlanUiNewLogService;

    @Autowired
    private TPlanSuiteUiMapper tPlanSuiteUiMapper;

    @Autowired
    private TTestSuiteUiLogMapper testSuiteUiLogMapper;

    @Override
    public String excJob(Job job) {
        JSONObject jsonObject = JSONObject.parseObject(job.getMethodParams());
        JobParams jobParams = JSONObject.toJavaObject(jsonObject, JobParams.class);
        Client client = clientService.findById(jobParams.getClientId());
        log.info("开始执行ui自动化任务,测试自动化计划日志");
        TTestPlanUiNewLog tTestPlanUiLog = new TTestPlanUiNewLog();
        tTestPlanUiLog.setName(job.getJobGroup());
        tTestPlanUiLog.setJobId(job.getJobId());
        tTestPlanUiLog.setProjectId(job.getProjectId());
        tTestPlanUiLog.setStatus(1);
        testPlanUiNewLogService.insertSelective(tTestPlanUiLog);
        log.info("调用执行机执行用例");
        TTestPlanUiNewLog endPlanLog = new TTestPlanUiNewLog();
        endPlanLog.setId(tTestPlanUiLog.getId());
        try {
            Result result = clientFactory.clientUiTestNewService(client.getClientIp(), client.getClientPort()).runPlan(job, tTestPlanUiLog.getId());
            if (result.getFlag()) {
                endPlanLog.setRemark("执行完毕");
                endPlanLog.setStatus(2);
            } else {
                endPlanLog.setRemark("执行结果失败");
                endPlanLog.setStatus(5);
            }
        } catch (Exception e) {
            endPlanLog.setStatus(4);
            endPlanLog.setRemark("连接客户端【" + client.getClientIp() + ":" + client.getClientPort() + "】失败");
            log.error("连接客户端【" + client.getClientIp() + ":" + client.getClientPort() + "】失败", e);
        }
        int totalCount = tPlanSuiteUiMapper.countByJobId(job.getJobId()).intValue();
        int succCount = testSuiteUiLogMapper.countByPlanLogIdAndStatus(tTestPlanUiLog.getId(), 0).intValue();
        int failCount = testSuiteUiLogMapper.countByPlanLogIdAndStatus(tTestPlanUiLog.getId(), 1).intValue();
        endPlanLog.setSuiteTotalCount(totalCount);
        endPlanLog.setSuiteSuccCount(succCount);
        endPlanLog.setSuiteFailCount(failCount);
        endPlanLog.setEndTime(new Date());
        testPlanUiNewLogService.updateByPrimaryKeySelective(endPlanLog);

        return "执行ui自动化任务结束";
    }

    @Override
    public String debugCase(Long caseId) {
        log.info("开始debug ui自动化用例");
        return "debug用例结束";
    }
}


















