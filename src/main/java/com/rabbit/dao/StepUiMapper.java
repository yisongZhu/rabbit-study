package com.rabbit.dao;

import com.rabbit.dto.StepUiDto;
import com.rabbit.model.StepUi;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface StepUiMapper {
    int deleteByPrimaryKey(@Param("id") Long id, @Param("testcaseId") Long testcaseId);

    int insertSelective(StepUi record);

    StepUi selectByPrimaryKey(@Param("id") Long id, @Param("testcaseId") Long testcaseId);

    int updateByPrimaryKey(StepUi record);

    int deleteByPrimaryKey(Long id);

    StepUi selectByPrimaryKey(Long id);

    @Select("SELECT t1.by_type,t1.by_value,t.* FROM t_step_ui t LEFT JOIN t_page_element t1 ON t.element_id = t1.id WHERE  t.testcase_id = #{testcaseId} order by t.sort")
    List<StepUiDto> findDtoByTestcaseId(@Param("testcaseId") Long testcaseId);

    List<StepUi> findByTestcaseId(@Param("testcaseId")Long testcaseId);

    int deleteByTestcaseId(@Param("testcaseId") Long testcaseId);
}