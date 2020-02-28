package com.rabbit.service;

import com.rabbit.model.TTestPlanResultApi;
public interface TTestPlanResultApiService{


    int deleteByPrimaryKey(Long id,Integer suiteSuccCount);

    int insert(TTestPlanResultApi record);

    int insertSelective(TTestPlanResultApi record);

    TTestPlanResultApi selectByPrimaryKey(Long id,Integer suiteSuccCount);

    int updateByPrimaryKeySelective(TTestPlanResultApi record);

    int updateByPrimaryKey(TTestPlanResultApi record);

}
