package com.rabbit.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.rabbit.dto.TestcaseUiDto;
import com.rabbit.model.TestcaseUi;

import java.util.List;

public interface TestcaseUiService {


    int deleteByPrimaryKey(Long id);

    int insertSelective(TestcaseUi record);

    int updateByPrimaryKeySelective(TestcaseUi record);

    int updateByPrimaryKey(TestcaseUi record);

    TestcaseUiDto selectDtoByPrimaryKey(Long id);

    List<TestcaseUiDto> findDtoByNameAndProjectId(String name, Long projectId);

    List<TestcaseUiDto> getDtoListByBusinessId(Long businessId);

    PageInfo<TestcaseUiDto> findDtoByAllwithPage(int page, int pageSize, TestcaseUi testcaseUi);

    PageInfo<TestcaseUiDto> getDtoListByBusinessIdwithPage(int page, int pageSize, Long businessId);

    List<TestcaseUiDto> findDtoByNameAndProjectIdAndIdNot(String name, Long projectId, Long notId);

    Long countByBusinessId(Long businessId);
}

