package com.rabbit.dao;
import org.apache.ibatis.annotations.Param;

import com.rabbit.model.TestbusinessTestcaseUi;

public interface TestbusinessTestcaseUiMapper {
    int deleteByPrimaryKey(Long id);

    int insertSelective(TestbusinessTestcaseUi record);

    TestbusinessTestcaseUi selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TestbusinessTestcaseUi record);

    int updateByPrimaryKey(TestbusinessTestcaseUi record);

    int deleteByBusinessId(@Param("businessId")Long businessId);
}