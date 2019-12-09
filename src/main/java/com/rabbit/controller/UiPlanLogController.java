package com.rabbit.controller;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageInfo;
import com.rabbit.model.*;
import com.rabbit.service.TTestBusinessUiLogService;
import com.rabbit.service.TTestCaseUiLogService;
import com.rabbit.service.TTestPlanUiLogService;
import com.rabbit.service.TTestStepUiLogService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * ui自动化日志相关接口
 */
@Slf4j
@RestController
@RequestMapping("/uiLog")
@Api(tags = "ui自动化日志相关接口")
public class UiPlanLogController {

    @Autowired
    private TTestPlanUiLogService testPlanUiLogService;

    @Autowired
    private TTestBusinessUiLogService testBusinessUiLogService;

    @Autowired
    private TTestCaseUiLogService testCaseUiLogService;

    @Autowired
    private TTestStepUiLogService testStepUiLogService;

    @GetMapping("/planListPage")
    @ApiOperation(value = "获取分页带参列表")
    public ResponseInfo getPlanListPage(@RequestParam(value = "pageNum") int pageNum, @RequestParam(value = "pageSize") int pageSize, @RequestParam(value = "serchData") String serchData) {
        JSONObject jsonObject = JSONObject.parseObject(serchData);
        TTestPlanUiLog tTestPlanUiLog = JSONObject.toJavaObject(jsonObject, TTestPlanUiLog.class);
        PageInfo pageInfo = testPlanUiLogService.findByAllwithPage(pageNum, pageSize, tTestPlanUiLog);
        return new ResponseInfo(true, pageInfo);
    }

    @GetMapping("/planById/{id}")
    @ApiOperation(value = "获取单条ui任务日志")
    public ResponseInfo getPlanById(@PathVariable("id") Long planId) {
        return new ResponseInfo(true, testPlanUiLogService.selectByPrimaryKey(planId));
    }

    @GetMapping("/businessById/{id}")
    @ApiOperation(value = "获取单条ui业务流日志")
    public ResponseInfo getBusinessById(@PathVariable("id") Long businessId) {
        return new ResponseInfo(true, testBusinessUiLogService.selectByPrimaryKey(businessId));
    }

    @GetMapping("/caseById/{id}")
    @ApiOperation(value = "获取单条ui用例日志")
    public ResponseInfo getCaseById(@PathVariable("id") Long businessId) {
        return new ResponseInfo(true, testCaseUiLogService.selectByPrimaryKey(businessId));
    }

    @DeleteMapping("/removePlan/{planId}")
    @ApiOperation(value = "删除测试计划日志")
    public ResponseInfo delPlanLog(@PathVariable("planId") Long planId) {
        testPlanUiLogService.deleteByPrimaryKey(planId);
        return new ResponseInfo(true, "删除测试计划日志成功");
    }

    @GetMapping("/businessListPage")
    @ApiOperation(value = "获取分页带参业务流日志列表")
    public ResponseInfo getBusinessListPageByPlanId(@RequestParam(value = "pageNum") int pageNum, @RequestParam(value = "pageSize") int pageSize, @RequestParam(value = "serchData") String serchData) {
        JSONObject jsonObject = JSONObject.parseObject(serchData);
        TTestBusinessUiLog testBusinessUiLog = JSONObject.toJavaObject(jsonObject, TTestBusinessUiLog.class);
        PageInfo pageInfo = testBusinessUiLogService.findByAllwithPage(pageNum, pageSize, testBusinessUiLog);
        return new ResponseInfo(true, pageInfo);
    }

    @GetMapping("/businessInfo/{planId}")
    @ApiOperation(value = "获取测试计划用例汇总信息信息")
    public ResponseInfo getBusinessInfoByPlanId(@PathVariable("planId") Long planId) {
        return new ResponseInfo(true, testBusinessUiLogService.findByPlanIdCount(planId));
    }

    @GetMapping("/caseListPage")
    @ApiOperation(value = "获取分页带参用例日志列表")
    public ResponseInfo getCaseListPageByPlanId(@RequestParam(value = "pageNum") int pageNum, @RequestParam(value = "pageSize") int pageSize, @RequestParam(value = "serchData") String serchData) {
        JSONObject jsonObject = JSONObject.parseObject(serchData);
        TTestCaseUiLog testCaseUiLog = JSONObject.toJavaObject(jsonObject, TTestCaseUiLog.class);
        PageInfo pageInfo = testCaseUiLogService.findByAllwithPage(pageNum, pageSize, testCaseUiLog);
        return new ResponseInfo(true, pageInfo);
    }

    @GetMapping("/stepListPage")
    @ApiOperation(value = "获取分页带参步骤日志列表")
    public ResponseInfo getStepListPage(@RequestParam(value = "pageNum") int pageNum, @RequestParam(value = "pageSize") int pageSize, @RequestParam(value = "serchData") String serchData) {
        JSONObject jsonObject = JSONObject.parseObject(serchData);
        TTestStepUiLog testStepUiLog = JSONObject.toJavaObject(jsonObject, TTestStepUiLog.class);
        PageInfo pageInfo = testStepUiLogService.findByAllwithPage(pageNum, pageSize, testStepUiLog);
        return new ResponseInfo(true, pageInfo);
    }

}
