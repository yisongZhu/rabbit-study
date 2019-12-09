package com.rabbit.dao;

import com.rabbit.dto.TestbusinessUiDto;
import com.rabbit.dto.TestcaseUiDto;
import com.rabbit.model.TestbusinessUi;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface TestbusinessUiDtoMapper {
    TestbusinessUiDto selectDtoByPrimaryKey(Long id);

    List<TestbusinessUiDto> findDtoByAll(TestbusinessUi testbusinessUi);

    List<TestbusinessUiDto> findDtoByNameAndProjectId(@Param("name") String name, @Param("projectId") Long projectId);

    @Select("SELECT t1.job_id,t1.sort,t1.is_valid,t.* FROM t_testbusiness_ui t ,t_plan_business_ui t1 WHERE t.id = t1.business_id AND t1.job_id = #{jobId}")
    List<TestbusinessUiDto> findDtoByJobId(Long jobId);


    @Select("SELECT count(1)FROM t_testbusiness_ui t ,t_plan_business_ui t1 WHERE t.id = t1.business_id AND t1.job_id = #{jobId}")
    Long countByJobId(Long jobId);
}