package com.rabbit.service.Impl;

import com.rabbit.dao.JobMapper;
import com.rabbit.dao.TPlanSuiteUiMapper;
import com.rabbit.dao.TTestSuiteUiLogMapper;
import com.rabbit.dto.JobDto;
import com.rabbit.dto.UiTemplateParams;
import com.rabbit.hessian.factory.config.ClientFactory;
import com.rabbit.model.*;
import com.rabbit.service.*;
import com.rabbit.utils.DateUtil;
import com.rabbit.utils.FastJSONHelper;
import com.rabbit.utils.NetUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Slf4j
@Service
public class ExcApiServiceImpl implements ExcApiService {

    @Resource
    private TTestPlanResultApiService planResultApiService;
    @Resource
    private JobMapper jobMapper;

    @Autowired
    private TPlanSuiteUiMapper tPlanSuiteUiMapper;
    @Autowired
    private TTestSuiteUiLogMapper testSuiteUiLogMapper;

    private static String EMAIL_REGEX = "^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$";


    @Override
    public String excJob(Job job) {
        JobParams jobParams = FastJSONHelper.deserialize(job.getMethodParams(), JobParams.class);
        log.info("开始执行接口自动化任务,测试自动化计划日志");
        TTestPlanResultApi planResultApi = new TTestPlanResultApi();
        planResultApi.setName(job.getJobGroup());
        planResultApi.setCreateTime(new Date());
        planResultApi.setJobId(job.getJobId());
        planResultApi.setStatus(1);
        planResultApi.setProjectId(job.getProjectId());
        planResultApiService.insertSelective(planResultApi);
        log.info("调用执行机执行用例");
        try {
            Result result = new Result();
            if (result.getFlag()) {
                planResultApi.setRemark("执行完毕");
                planResultApi.setStatus(2);
            } else {
                planResultApi.setRemark("执行结果失败");
                planResultApi.setStatus(5);
            }
        } catch (Exception e) {
            planResultApi.setStatus(4);
            planResultApi.setRemark("连接客户端【】失败");
        }
        int totalCount = tPlanSuiteUiMapper.countByJobId(job.getJobId()).intValue();
        int succCount = testSuiteUiLogMapper.countByPlanLogIdAndStatus(planResultApi.getId(), 0).intValue();
        int failCount = testSuiteUiLogMapper.countByPlanLogIdAndStatus(planResultApi.getId(), 1).intValue();
        planResultApi.setSuiteTotalCount(totalCount);
        planResultApi.setSuiteSuccCount(succCount);
        planResultApi.setSuiteFailCount(failCount);
        planResultApi.setEndTime(new Date());
        planResultApiService.updateByPrimaryKeySelective(planResultApi);
        if (jobParams.getIsSendEmail().equals(1) & StringUtils.isNotBlank(jobParams.getReceivers())) {
            try {
            } catch (Exception e) {
                log.info("邮件发送失败", e);
                e.printStackTrace();
            }
        }
        return "执行ui自动化任务结束";
    }

    private void buildPlanApiData(Long jobId) {
        JobDto jobDto = jobMapper.selectJobById(jobId);

    }

}


















