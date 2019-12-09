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
import java.util.concurrent.*;


/**
 * 自动化定时任务
 */
@Slf4j
@Component("autoTestTask")
public class AutoTestTask {
    @Autowired
    private ClientService clientService;
    @Autowired
    private ClientFactory clientFactory;

    @Autowired
    private TTestPlanUiLogService tTestPlanUiLogService;

    @Autowired
    private TTestBusinessUiLogService testBusinessUiLogService;

    @Autowired
    private TestbusinessUiService testbusinessUiService;


    @Autowired
    private SendMailSevice sendMailSevice;

    @Value("${server.servlet.context-path}")
    private String contextPath;

    @Value("${server.port}")
    private String webPort;

    private static String EMAIL_REGEX = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";


    public void uiTest(Job job) throws Exception {
        final ExecutorService exec = Executors.newFixedThreadPool(1);
        Callable<String> call = new Callable<String>() {
            @Override
            public String call() throws Exception {
                //开始执行耗时操作
                JSONObject jsonObject = JSONObject.parseObject(job.getMethodParams());
                JobParams jobParams = JSONObject.toJavaObject(jsonObject, JobParams.class);
                Client client = clientService.findById(jobParams.getClientId());
                String taskName = job.getJobGroup() + "_" + DateUtil.format("yyMMddHHmmss");

                TTestPlanUiLog tTestPlanUiLog = new TTestPlanUiLog();
                tTestPlanUiLog.setName(taskName);
                tTestPlanUiLog.setJobId(job.getJobId());
                tTestPlanUiLog.setProjectId(job.getProjectId());
                tTestPlanUiLog.setStatus(1);

                tTestPlanUiLogService.insertSelective(tTestPlanUiLog);

                TTestPlanUiLog endPlanLog = new TTestPlanUiLog();
                endPlanLog.setId(tTestPlanUiLog.getId());
                try {
                    Result result = clientFactory.clientUiTestService(client.getClientIp(), client.getClientPort()).runPlan(job, tTestPlanUiLog.getId());
                    log.info("结果为{}，信息为{}", result.getFlag(), result.getMsg());
                    if (result.getFlag()){
                        endPlanLog.setRemark("执行完毕");
                        endPlanLog.setStatus(2);
                    }else {
                        endPlanLog.setRemark("执行结果失败");
                        endPlanLog.setStatus(5);
                    }
                } catch (HessianRuntimeException e) {
                    endPlanLog.setStatus(4);
                    endPlanLog.setRemark("连接客户端【" + client.getClientIp() + ":" + client.getClientPort() + "】失败");
                    log.error("连接客户端【" + client.getClientIp() + ":" + client.getClientPort() + "】失败", e);
                }
                int succCount = testBusinessUiLogService.countByPlanIdAndStatus(tTestPlanUiLog.getId(), 0).intValue();
                int failCount = testBusinessUiLogService.countByPlanIdAndStatus(tTestPlanUiLog.getId(), 1).intValue();
                int totalCount = testbusinessUiService.countByJobId(tTestPlanUiLog.getJobId()).intValue();

                endPlanLog.setBusinessTotalCount(totalCount);
                endPlanLog.setBusinessSuccCount(succCount);
                endPlanLog.setBusinessFailCount(failCount);
                endPlanLog.setBusinessSkipCount(totalCount - succCount - failCount);
                endPlanLog.setEndTime(new Date());
                tTestPlanUiLogService.updateByPrimaryKeySelective(endPlanLog);
                if (jobParams.getIsSendEmail().equals(1) & StringUtils.isNotBlank(jobParams.getReceivers())) {
                    sendUiReportMail(jobParams.getReceivers(), tTestPlanUiLog.getId(), tTestPlanUiLog.getName(), totalCount);
                }
                return "线程执行完成.";
            }
        };
        exec.submit(call).get();
    }

    private void sendUiReportMail(String sendTo, Long planLogId, String planLogName, int businesscount) throws Exception {
        String[] split = sendTo.replace("；", ";").split(";");
        List list = new ArrayList();
        for (String to : split) {
            String trim = to.trim();
            if (trim.matches(EMAIL_REGEX)) {
                list.add(trim);
            }
        }
        if (list.size() > 0) {
            TTestBusinessUiLog byPlanIdCount = testBusinessUiLogService.findByPlanIdCount(planLogId);
            Long businesstime = (byPlanIdCount.getEndTime().getTime() - byPlanIdCount.getCreateTime().getTime()) / 1000;

            UiTemplateParams uiTemplateParams = new UiTemplateParams();
            uiTemplateParams.setPlanLogId(planLogId);
            uiTemplateParams.setJobname(planLogName);
            uiTemplateParams.setWebip(InetAddress.getLocalHost().getHostAddress());
            uiTemplateParams.setWebport(webPort);
            uiTemplateParams.setContextpath(contextPath);
            uiTemplateParams.setBusinesscount(businesscount);
            uiTemplateParams.setBusinesstime(businesstime.intValue());
            uiTemplateParams.setCasecount(byPlanIdCount.getCaseTotalCount());
            uiTemplateParams.setCasesuc(byPlanIdCount.getCaseSuccCount());
            uiTemplateParams.setCasefail(byPlanIdCount.getCaseFailCount());
            uiTemplateParams.setCaseskip(byPlanIdCount.getCaseSkipCount());
            sendMailSevice.sendMailTemplate(list, "任务：【" + planLogName + "】自动化测试结果邮件通知！", "ui-test.ftl", uiTemplateParams);
        }
    }
}
