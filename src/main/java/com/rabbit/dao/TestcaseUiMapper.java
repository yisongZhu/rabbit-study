package com.rabbit.dao;

import com.rabbit.model.TestcaseUi;

public interface TestcaseUiMapper {
    int deleteByPrimaryKey(Long id);

    int insertSelective(TestcaseUi record);

    int updateByPrimaryKeySelective(TestcaseUi record);

    int updateByPrimaryKey(TestcaseUi record);

}