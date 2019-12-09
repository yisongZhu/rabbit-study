package com.rabbit.dao;

import com.rabbit.dto.TestcaseUiDto;
import com.rabbit.model.TestcaseUi;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface TestcaseUiDtoMapper {
    TestcaseUiDto selectDtoByPrimaryKey(Long id);

    List<TestcaseUiDto> findDtoByAll(TestcaseUi testcaseUi);

    List<TestcaseUiDto> findDtoByNameAndProjectId(@Param("name") String name, @Param("projectId") Long projectId);

    List<TestcaseUiDto> findDtoByNameAndProjectIdAndIdNot(@Param("name") String name, @Param("projectId") Long projectId, @Param("id") Long notId);

    @Select("SELECT t1.sort,sp.project_name,t1.id AS businessCaseId,t2.* FROM t_testbusiness_testcase_ui t1, t_testcase_ui t2,sys_project sp  WHERE t1.case_id = t2.id AND t2.project_id = sp.id AND t1.business_id  = #{businessId} order by t1.id")
    List<TestcaseUiDto> getDtoListByBusinessId(Long businessId);

    Long countByBusinessId(Long businessId);
}
