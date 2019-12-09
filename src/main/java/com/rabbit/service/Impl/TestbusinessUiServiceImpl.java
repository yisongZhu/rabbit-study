package com.rabbit.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.rabbit.dao.TestbusinessTestcaseUiMapper;
import com.rabbit.dao.TestbusinessUiDtoMapper;
import com.rabbit.dto.TestbusinessUiDto;
import com.rabbit.dto.TestcaseUiDto;
import com.rabbit.model.TestbusinessTestcaseUi;
import com.rabbit.utils.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import com.rabbit.model.TestbusinessUi;
import com.rabbit.dao.TestbusinessUiMapper;
import com.rabbit.service.TestbusinessUiService;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TestbusinessUiServiceImpl implements TestbusinessUiService {

    @Resource
    private TestbusinessUiMapper testbusinessUiMapper;
    @Autowired
    private TestbusinessUiDtoMapper testbusinessUiDtoMapper;

    @Resource
    private TestbusinessTestcaseUiMapper testbusinessTestcaseUiMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return testbusinessUiMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insertSelective(TestbusinessUi record) {
        return testbusinessUiMapper.insertSelective(record);
    }

    @Override
    public TestbusinessUi selectByPrimaryKey(Long id) {
        return testbusinessUiMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(TestbusinessUi record) {
        return testbusinessUiMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TestbusinessUi record) {
        return testbusinessUiMapper.updateByPrimaryKey(record);
    }

    @Override
    public void deleteBusinessCaseById(Long id) {
        testbusinessUiMapper.deleteBusinessCaseById(id);
    }

    @Override
    public void deleteBusinessCaseByCaseId(Long id) {
        testbusinessUiMapper.deleteBusinessCaseByCaseId(id);
    }

    @Override
    public void addCaseToBusiness(List<TestbusinessTestcaseUi> uiTestCases) {
        for (TestbusinessTestcaseUi uiTestCase : uiTestCases) {
            uiTestCase.setCreateBy(UserUtil.getLoginUser().getUsername());
            testbusinessTestcaseUiMapper.insertSelective(uiTestCase);
        }
    }

    @Override
    public void updateCaseSort(TestbusinessTestcaseUi testbusinessTestcaseUi) {
        testbusinessTestcaseUi.setUpdateBy(UserUtil.getLoginUser().getUsername());
        testbusinessTestcaseUiMapper.updateByPrimaryKeySelective(testbusinessTestcaseUi);
    }

    @Override
    public List<TestbusinessUiDto> findDtoByNameAndProjectId(String name, Long projectId) {
        return testbusinessUiDtoMapper.findDtoByNameAndProjectId(name, projectId);
    }

    @Override
    public List<TestbusinessUiDto> findDtoByJobId(Long jobId) {
        return testbusinessUiDtoMapper.findDtoByJobId(jobId);
    }

    @Override
    public PageInfo<TestbusinessUiDto> findDtoByAllwithPage(int page, int pageSize, TestbusinessUi testbusinessUi) {
        PageHelper.startPage(page, pageSize);
        return new PageInfo<>(testbusinessUiDtoMapper.findDtoByAll(testbusinessUi));
    }

    @Override
    public List<TestbusinessUi> findByNameAndProjectIdAndIdNot(String name, Long projectId, Long notId) {
        return testbusinessUiMapper.findByNameAndProjectIdAndIdNot(name, projectId, notId);
    }

    @Override
    @Transactional
    public void delAndInsertTestCases(List<TestbusinessTestcaseUi> uiTestCases) {
        testbusinessTestcaseUiMapper.deleteByBusinessId(uiTestCases.get(0).getBusinessId());
        for (TestbusinessTestcaseUi testcaseUi : uiTestCases) {
            testbusinessTestcaseUiMapper.insertSelective(testcaseUi);
        }
    }

    @Override
    public Long countByJobId(Long jobId) {
        return testbusinessUiDtoMapper.countByJobId(jobId);
    }
}




