package com.rabbit.controller;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageInfo;
import com.rabbit.dto.TestcaseUiDto;
import com.rabbit.model.ErrorInfo;
import com.rabbit.model.ResponseInfo;
import com.rabbit.model.TestcaseUi;
import com.rabbit.service.TestcaseUiService;
import com.rabbit.utils.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 用例相关接口
 */
@RestController
@RequestMapping("/uiTestCase")
public class UiTestCaseController {

    @Autowired
    private TestcaseUiService testcaseUiService;

    @GetMapping("/listPage")
    public ResponseInfo getPageList(@RequestParam(value = "pageNum") int pageNum, @RequestParam(value = "pageSize") int pageSize, @RequestParam(value = "serchData") String serchData) {
        JSONObject jsonObject = JSONObject.parseObject(serchData);
        TestcaseUi testcaseUi = JSONObject.toJavaObject(jsonObject, TestcaseUi.class);
        PageInfo pageInfo = testcaseUiService.findDtoByAllwithPage(pageNum, pageSize, testcaseUi);
        return new ResponseInfo(true, pageInfo);
    }

    @GetMapping("/listByBusinessId")
    public ResponseInfo getList( @RequestParam(value = "businessId") Long businessId) {
        return new ResponseInfo(true, testcaseUiService.getDtoListByBusinessId(businessId));
    }

    @PostMapping("/add")
    public ResponseInfo savaProject(@RequestBody TestcaseUi testcaseUi) {
        List<TestcaseUiDto> testcaseUis = testcaseUiService.findDtoByNameAndProjectId(testcaseUi.getName(), testcaseUi.getProjectId());
        if (testcaseUis.size() > 0) {
            return new ResponseInfo(false, new ErrorInfo(520, "用例【" + testcaseUi.getName() + "】已存在"));
        }
        testcaseUi.setUpdateBy(UserUtil.getLoginUser().getUsername());
        testcaseUi.setCreateBy(UserUtil.getLoginUser().getUsername());
        testcaseUiService.insertSelective(testcaseUi);
        return new ResponseInfo(true, "保存用例成功");
    }

    @PutMapping("/edit")
    public ResponseInfo editProject(@RequestBody TestcaseUi testcaseUi) {
        List<TestcaseUiDto> testcaseUis = testcaseUiService.findDtoByNameAndProjectIdAndIdNot(testcaseUi.getName(), testcaseUi.getProjectId(), testcaseUi.getId());
        if (testcaseUis.size() > 0) {
            return new ResponseInfo(false, new ErrorInfo(520, "用例【" + testcaseUi.getName() + "】已存在"));
        }
        testcaseUi.setUpdateBy(UserUtil.getLoginUser().getUsername());
        testcaseUiService.updateByPrimaryKey(testcaseUi);
        return new ResponseInfo(true, "修改用例成功");
    }

    @PostMapping("/remove")
    public ResponseInfo delProject(@RequestBody TestcaseUi testcaseUi) {
        testcaseUiService.deleteByPrimaryKey(testcaseUi.getId());
        return new ResponseInfo(true, "删除用例成功");
    }

    @GetMapping("/{id}")
    public ResponseInfo getById(@PathVariable Long id) {
        return new ResponseInfo(true, testcaseUiService.selectDtoByPrimaryKey(id));
    }
}
