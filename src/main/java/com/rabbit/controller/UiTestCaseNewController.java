package com.rabbit.controller;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageInfo;
import com.rabbit.dto.TestcaseUiDto;
import com.rabbit.dto.TestcaseUiNewDto;
import com.rabbit.model.ErrorInfo;
import com.rabbit.model.ResponseInfo;
import com.rabbit.model.TTestcaseUiNew;
import com.rabbit.model.TestcaseUi;
import com.rabbit.service.TTestcaseUiNewService;
import com.rabbit.service.TestcaseUiService;
import com.rabbit.utils.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 用例相关接口
 */
@RestController
@RequestMapping("/uiTestCaseNew")
public class UiTestCaseNewController {

    @Autowired
    private TTestcaseUiNewService testcaseUiService;

    @GetMapping("/listPage")
    public ResponseInfo getPageList(@RequestParam(value = "pageNum") int pageNum, @RequestParam(value = "pageSize") int pageSize, @RequestParam(value = "serchData") String serchData) {
        JSONObject jsonObject = JSONObject.parseObject(serchData);
        TTestcaseUiNew testcaseUi = JSONObject.toJavaObject(jsonObject, TTestcaseUiNew.class);
        PageInfo pageInfo = testcaseUiService.findByAllwithPage(pageNum, pageSize, testcaseUi);
        return new ResponseInfo(true, pageInfo);
    }

    @GetMapping("/allBusiness/{id}")
    public ResponseInfo getList(@PathVariable Long id) {
        return new ResponseInfo(true, testcaseUiService.findByCaseTypeAndProjectId(2L,id));
    }

    @PostMapping("/add")
    public ResponseInfo savaProject(@RequestBody TestcaseUiNewDto testcaseUi) {
        TTestcaseUiNew add = testcaseUiService.add(testcaseUi);
        return new ResponseInfo(true, add);
    }

    @PutMapping("/edit")
    public ResponseInfo editProject(@RequestBody TestcaseUiNewDto testcaseUi) {
        if (testcaseUi.getTestSteps().size() ==0){
            return new ResponseInfo(false, new ErrorInfo(20,"用例步骤不能为空"));
        }
        testcaseUiService.edit(testcaseUi);
        return new ResponseInfo(true, "修改用例成功");
    }

    @PostMapping("/remove")
    public ResponseInfo delProject(@RequestBody TTestcaseUiNew testcaseUi) {
        testcaseUiService.deleteByPrimaryKey(testcaseUi.getId());
        return new ResponseInfo(true, "删除用例成功");
    }

    @GetMapping("/{id}")
    public ResponseInfo getById(@PathVariable Long id) {
        return new ResponseInfo(true, testcaseUiService.selectByDtoByPrimaryKeyAndCaseType(id,1));
    }

    @GetMapping("/business/{id}")
    public ResponseInfo getBusinessById(@PathVariable Long id) {
        return new ResponseInfo(true, testcaseUiService.selectByDtoByPrimaryKeyAndCaseType(id,2));
    }
}
