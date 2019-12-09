package com.rabbit.controller;

import com.rabbit.model.ResponseInfo;
import com.rabbit.model.StepUi;
import com.rabbit.service.StepUiService;
import com.rabbit.utils.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 用例步骤相关接口
 */
@RestController
@RequestMapping("/uiStep")
public class UiTestStepController {

    @Autowired
    private StepUiService stepUiService;

    @GetMapping("/list/{caseid}")
    public ResponseInfo getList(@PathVariable Long caseid) {
        return new ResponseInfo(true, stepUiService.findDtoByTestcaseId(caseid));
    }

    @PostMapping("/add")
    @Transactional
    public ResponseInfo savaStep(@RequestBody List<StepUi> uiTestStepList) {
        if (uiTestStepList.size() > 0) {
            List<StepUi> byTestcaseId = stepUiService.findByTestcaseId(uiTestStepList.get(0).getTestcaseId());
            for (StepUi stepUi : byTestcaseId) {
                boolean flag = false;
                for (StepUi uiTestStep : uiTestStepList) {
                    if (uiTestStep.getId() != null && stepUi.getId().equals(uiTestStep.getId())) {
                        //如果存在步骤id不为空且在数据库存在，就不需要删除
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    stepUiService.deleteByPrimaryKey(stepUi.getId());
                }
            }
            Long sort = 0L;
            for (StepUi uiTestStep : uiTestStepList) {
                uiTestStep.setSort(sort);
                sort = sort + 1;
                if (uiTestStep.getId() == null) {
                    uiTestStep.setUpdateBy(UserUtil.getLoginUser().getUsername());
                    uiTestStep.setCreateBy(UserUtil.getLoginUser().getUsername());
                    stepUiService.insertSelective(uiTestStep);
                } else {
                    uiTestStep.setUpdateBy(UserUtil.getLoginUser().getUsername());
                    stepUiService.updateByPrimaryKey(uiTestStep);
                }
            }
        }
        return new ResponseInfo(true, "保存用例步骤成功");
    }

}
