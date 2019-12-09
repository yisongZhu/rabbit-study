package com.rabbit.service;

import com.rabbit.model.TestbusinessTestcaseUi;
public interface TestbusinessTestcaseUiService{


    int deleteByPrimaryKey(Long id);

    int insertSelective(TestbusinessTestcaseUi record);

    TestbusinessTestcaseUi selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TestbusinessTestcaseUi record);

    int updateByPrimaryKey(TestbusinessTestcaseUi record);

}
