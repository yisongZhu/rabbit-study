package com.rabbit.dao;

import org.apache.ibatis.annotations.Param;

import com.rabbit.model.TestbusinessUi;
import com.rabbit.dto.TestcaseUiDto;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface TestbusinessUiMapper {
    int deleteByPrimaryKey(Long id);

    int insertSelective(TestbusinessUi record);

    TestbusinessUi selectByPrimaryKey(Long id);

    List<TestbusinessUi> findByNameAndProjectId(@Param("name") String name, @Param("projectId") Long projectId);

    int updateByPrimaryKeySelective(TestbusinessUi record);

    int updateByPrimaryKey(TestbusinessUi record);

    List<TestbusinessUi> findByAll(TestbusinessUi testbusinessUi);

    @Delete("DELETE FROM t_testbusiness_testcase_ui  WHERE id = #{id}")
    int deleteBusinessCaseById(Long id);

    @Delete("DELETE FROM t_testbusiness_testcase_ui  WHERE case_id = #{id}")
    int deleteBusinessCaseByCaseId(Long id);

    List<TestbusinessUi> findByNameAndProjectIdAndIdNot(@Param("name")String name,@Param("projectId")Long projectId,@Param("notId")Long notId);

}