package com.rabbit.service;

import com.github.pagehelper.PageInfo;
import com.rabbit.dto.TestbusinessUiDto;
import com.rabbit.dto.TestcaseUiDto;
import com.rabbit.model.TestbusinessTestcaseUi;
import com.rabbit.model.TestbusinessUi;

import java.util.List;

public interface TestbusinessUiService {


    int deleteByPrimaryKey(Long id);

    int insertSelective(TestbusinessUi record);

    TestbusinessUi selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TestbusinessUi record);

    int updateByPrimaryKey(TestbusinessUi record);

    void deleteBusinessCaseById(Long id);

    void deleteBusinessCaseByCaseId(Long id);

    void addCaseToBusiness(List<TestbusinessTestcaseUi> uiTestCases);

    void updateCaseSort(TestbusinessTestcaseUi testbusinessTestcaseUi);

    List<TestbusinessUiDto> findDtoByNameAndProjectId(String name, Long projectId);

    List<TestbusinessUiDto> findDtoByJobId(Long jobId);

    PageInfo<TestbusinessUiDto> findDtoByAllwithPage(int page, int pageSize, TestbusinessUi testbusinessUi);

    List<TestbusinessUi> findByNameAndProjectIdAndIdNot(String name, Long projectId, Long notId);

    void delAndInsertTestCases(List<TestbusinessTestcaseUi> uiTestCases);

    Long countByJobId(Long jobId);
}




