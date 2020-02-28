package com.rabbit.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.rabbit.dao.TTestcaseApiMapper;
import com.rabbit.dao.TestcaseUiDtoMapper;
import com.rabbit.dto.TestcaseUiDto;
import com.rabbit.model.TTestcaseApi;
import com.rabbit.service.StepUiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import com.rabbit.dao.TestcaseUiMapper;
import com.rabbit.model.TestcaseUi;
import com.rabbit.service.TestcaseUiService;

import java.util.List;

@Service
public class TestcaseUiServiceImpl implements TestcaseUiService {

    @Resource
    private TestcaseUiMapper testcaseUiMapper;

    @Autowired
    private StepUiService stepUiService;
    @Autowired
    private TestcaseUiDtoMapper testcaseUiDtoMapper;
    @Autowired
    private TTestcaseApiMapper tTestcaseApiMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        stepUiService.deleteByTestcaseId(id);
        return testcaseUiMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insertSelective(TestcaseUi record) {
        return testcaseUiMapper.insertSelective(record);
    }

    @Override
    public int updateByPrimaryKeySelective(TestcaseUi record) {
        return testcaseUiMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TestcaseUi record) {
        return testcaseUiMapper.updateByPrimaryKey(record);
    }

    @Override
    public TestcaseUiDto selectDtoByPrimaryKey(Long id) {
        return testcaseUiDtoMapper.selectDtoByPrimaryKey(id);
    }
    @Override
    public List<TestcaseUiDto> findDtoByNameAndProjectId(String name, Long projectId) {
        return testcaseUiDtoMapper.findDtoByNameAndProjectId(name, projectId);
    }
    @Override
    public List<TestcaseUiDto> getDtoListByBusinessId(Long businessId) {
        return testcaseUiDtoMapper.getDtoListByBusinessId(businessId);
    }
    @Override
    public PageInfo<TestcaseUiDto> findDtoByAllwithPage(int page, int pageSize, TestcaseUi testcaseUi) {
        PageHelper.startPage(page, pageSize);
        return new PageInfo<>(testcaseUiDtoMapper.findDtoByAll(testcaseUi));
    }

    @Override
    public PageInfo<TestcaseUiDto> getDtoListByBusinessIdwithPage(int page, int pageSize, Long businessId) {
        PageHelper.startPage(page, pageSize);
        return new PageInfo<>(testcaseUiDtoMapper.getDtoListByBusinessId(businessId));
    }
    @Override
    public List<TestcaseUiDto> findDtoByNameAndProjectIdAndIdNot(String name, Long projectId, Long notId) {
        return testcaseUiDtoMapper.findDtoByNameAndProjectIdAndIdNot(name, projectId, notId);
    }

    @Override
    public Long countByBusinessId(Long businessId) {
        return testcaseUiDtoMapper.countByBusinessId(businessId);
    }

}

