package com.rabbit.service.Impl;

import com.rabbit.dao.*;
import com.rabbit.dto.TApiCaseResultDto;
import com.rabbit.dto.TPlanSuiteApiDto;
import com.rabbit.dto.TestcaseApiDto;
import com.rabbit.model.*;
import com.rabbit.service.*;
import com.rabbit.utils.FastJSONHelper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

@Slf4j
@Service
public class ExcApiServiceImpl implements ExcApiService {

    @Resource
    private TTestPlanResultApiService planResultApiService;
    @Resource
    private TPlanSuiteApiMapper planSuiteApiMapper;
    @Resource
    private TTestcaseApiService testcaseApiService;
    @Resource
    private TTestsuiteApiResultMapper testsuiteApiResultMapper;
    @Resource
    private TApiCaseResultMapper apiCaseResultMapper;
    @Resource
    private TApiResultMapper apiResultMapper;

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
        excApiPlan(job.getJobId(), planResultApi, jobParams.getEnvId());
        if (planResultApi.getStatus().equals(0)) {
            planResultApi.setRemark("执行完毕");
            planResultApi.setStatus(2);
        } else {
            planResultApi.setRemark("执行结果失败");
            planResultApi.setStatus(5);
        }
        planResultApi.setEndTime(new Date());
        planResultApiService.updateByPrimaryKeySelective(planResultApi);
        if (jobParams.getIsSendEmail().equals(1) & StringUtils.isNotBlank(jobParams.getReceivers())) {
            try {
            } catch (Exception e) {
                log.info("邮件发送失败", e);
                e.printStackTrace();
            }
        }
        return "执行接口自动化任务结束";
    }

    private void excApiPlan(Long jobId, TTestPlanResultApi planResultApi, Long envId) {
        planResultApi.setStatus(0);
        List<TPlanSuiteApiDto> byJobId = planSuiteApiMapper.findDtoByJobId(jobId);
        if (byJobId == null) {
            return;
        }
        int succCount = 0;
        int failCount = 0;
        for (TPlanSuiteApiDto planSuiteApi : byJobId) {
            TTestsuiteApiResult testsuiteApiResult = new TTestsuiteApiResult();
            testsuiteApiResult.setPlanLogId(planResultApi.getId());
            testsuiteApiResult.setSuiteId(planSuiteApi.getSuiteId());
            testsuiteApiResult.setSuiteName(planSuiteApi.getSuiteName());
            testsuiteApiResult.setCreateTime(new Date());
            testsuiteApiResultMapper.insertSelective(testsuiteApiResult);
            excApiSuite(planSuiteApi.getSuiteId(), testsuiteApiResult, envId);
            if (testsuiteApiResult.getStatus().equals(0)) {
                succCount = succCount + 1;
            } else {
                failCount = failCount + 1;
                planResultApi.setStatus(1);
            }
            testsuiteApiResult.setEndTime(new Date());
            testsuiteApiResultMapper.updateByPrimaryKeySelective(testsuiteApiResult);
        }
        planResultApi.setSuiteTotalCount(byJobId.size());
        planResultApi.setSuiteSuccCount(succCount);
        planResultApi.setSuiteFailCount(failCount);
    }

    private void excApiSuite(Long suiteId, TTestsuiteApiResult testsuiteApiResult, Long envId) {
        testsuiteApiResult.setStatus(0);
        List<TestcaseApiDto> bySuiteId = testcaseApiService.selectDtoBySuiteId(suiteId);
        if (bySuiteId == null) {
            return;
        }
        int succCount = 0;
        int failCount = 0;
        for (TestcaseApiDto testcaseApi : bySuiteId) {
            Date starDate = new Date();
            testcaseApi.setEnvId(envId);
            TApiCaseResultDto caseResultDto = testcaseApiService.excCase(testcaseApi);
            caseResultDto.setSuiteResultId(testsuiteApiResult.getId());
            caseResultDto.setCreateTime(starDate);
            if (caseResultDto.getStatus().equals(0)) {
                succCount = succCount + 1;
            } else {
                failCount = failCount + 1;
                testsuiteApiResult.setStatus(1);
            }
            caseResultDto.setPlanLogId(testsuiteApiResult.getPlanLogId());
            caseResultDto.setSuiteId(testsuiteApiResult.getSuiteId());
            caseResultDto.setSuiteName(testsuiteApiResult.getSuiteName());
            apiCaseResultMapper.insertSelective(caseResultDto);
            List<TApiResult> steps = caseResultDto.getSteps();
            for (TApiResult tApiResult : steps) {
                tApiResult.setCaseResultId(caseResultDto.getId());
                tApiResult.setPlanLogId(testsuiteApiResult.getPlanLogId());
                apiResultMapper.insertSelective(tApiResult);
            }
        }
        testsuiteApiResult.setCaseTotalCount(bySuiteId.size());
        testsuiteApiResult.setCaseSuccCount(succCount);
        testsuiteApiResult.setCaseFailCount(failCount);
    }

}
