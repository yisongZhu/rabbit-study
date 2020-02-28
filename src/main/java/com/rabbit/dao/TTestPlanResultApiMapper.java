package com.rabbit.dao;

import com.rabbit.model.TTestPlanResultApi;
import org.apache.ibatis.annotations.Param;

public interface TTestPlanResultApiMapper {
    int deleteByPrimaryKey(@Param("id") Long id, @Param("suiteSuccCount") Integer suiteSuccCount);

    int insert(TTestPlanResultApi record);

    int insertSelective(TTestPlanResultApi record);

    TTestPlanResultApi selectByPrimaryKey(@Param("id") Long id, @Param("suiteSuccCount") Integer suiteSuccCount);

    int updateByPrimaryKeySelective(TTestPlanResultApi record);

    int updateByPrimaryKey(TTestPlanResultApi record);
}