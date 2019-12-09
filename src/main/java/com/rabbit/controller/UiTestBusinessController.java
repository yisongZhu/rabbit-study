package com.rabbit.controller;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageInfo;
import com.rabbit.dto.TestbusinessUiDto;
import com.rabbit.dto.TestcaseUiDto;
import com.rabbit.model.*;
import com.rabbit.service.Impl.TestbusinessUiServiceImpl;
import com.rabbit.utils.UserUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * UI业务流相关接口
 */
@Slf4j
@RestController
@RequestMapping("/uiTestBusiness")
public class UiTestBusinessController {

    @Autowired
    private TestbusinessUiServiceImpl testbusinessUiService;

    @GetMapping("/listPage")
    public ResponseInfo getPageList(@RequestParam(value = "pageNum") int pageNum, @RequestParam(value = "pageSize") int pageSize, @RequestParam(value = "serchData") String serchData) {
        JSONObject jsonObject = JSONObject.parseObject(serchData);
        TestbusinessUi testbusinessUi = JSONObject.toJavaObject(jsonObject, TestbusinessUi.class);
        PageInfo pageInfo = testbusinessUiService.findDtoByAllwithPage(pageNum, pageSize, testbusinessUi);
        return new ResponseInfo(true, pageInfo);
    }

    @PostMapping("/add")
    public ResponseInfo savaProject(@RequestBody TestbusinessUi testbusinessUi) {
        List<TestbusinessUiDto> testbusinessUis = testbusinessUiService.findDtoByNameAndProjectId(testbusinessUi.getName(), testbusinessUi.getProjectId());
        if (testbusinessUis.size() > 0) {
            return new ResponseInfo(false, new ErrorInfo(520, "业务流【" + testbusinessUi.getName() + "】已存在"));
        }
        testbusinessUi.setUpdateBy(UserUtil.getLoginUser().getUsername());
        testbusinessUi.setCreateBy(UserUtil.getLoginUser().getUsername());
        testbusinessUiService.insertSelective(testbusinessUi);
        return new ResponseInfo(true, "保存UI业务流成功");
    }

    @PutMapping("/edit")
    public ResponseInfo editProject(@RequestBody TestbusinessUi testbusinessUi) {
        List<TestbusinessUi> testbusinessUis = testbusinessUiService.findByNameAndProjectIdAndIdNot(testbusinessUi.getName(), testbusinessUi.getProjectId(), testbusinessUi.getId());
        if (testbusinessUis.size() > 0) {
            return new ResponseInfo(false, new ErrorInfo(520, "业务流【" + testbusinessUi.getName() + "】已存在"));
        }
        testbusinessUi.setUpdateBy(UserUtil.getLoginUser().getUsername());
        testbusinessUiService.updateByPrimaryKey(testbusinessUi);
        return new ResponseInfo(true, "修改UI业务流成功");
    }

    @PostMapping("/remove")
    public ResponseInfo delProject(@RequestBody TestbusinessUi testbusinessUi) {
        testbusinessUiService.deleteByPrimaryKey(testbusinessUi.getId());
        return new ResponseInfo(true, "删除UI业务流成功");
    }

    @PostMapping("/delBusinessCaseById/{id}")
    public ResponseInfo deleteBusinessCaseById(@PathVariable Long id) {
        testbusinessUiService.deleteBusinessCaseById(id);
        return new ResponseInfo(true, "id删除业务流和用例关系成功");
    }

    @PostMapping("/delBusinessCaseByCaseId/{id}")
    public ResponseInfo deleteBusinessCaseByCaseId(@PathVariable Long id) {
        testbusinessUiService.deleteBusinessCaseByCaseId(id);
        return new ResponseInfo(true, "CaseId删除业务流和用例关系成功");
    }

    @PostMapping("/addCaseToBusiness")
    public ResponseInfo addCaseToBusiness(@RequestBody List<TestbusinessTestcaseUi> testbusinessTestcaseUiList) {
        testbusinessUiService.addCaseToBusiness(testbusinessTestcaseUiList);
        return new ResponseInfo(true, "新增用例成功");
    }

    @PostMapping("/updateCaseSort")
    public ResponseInfo updateCaseSort(@RequestBody List<TestbusinessTestcaseUi> uiTestCases) {
//        testbusinessUiService.updateCaseSort(uiTestCase);
        testbusinessUiService.delAndInsertTestCases(uiTestCases);
        return new ResponseInfo(true, "更新用例排序成功");
    }

//    @PostMapping("/updateCaseSort")
//    public ResponseInfo updateCaseSort(@RequestBody TestbusinessTestcaseUi uiTestCase) {
//        testbusinessUiService.updateCaseSort(uiTestCase);
//        return new ResponseInfo(true, "更新用例排序成功");
//    }
}
