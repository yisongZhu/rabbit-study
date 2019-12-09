package com.rabbit.dao;
import java.util.List;
import java.util.Date;

import com.rabbit.model.TTestCaseUiLog;import org.apache.ibatis.annotations.Param;

public interface TTestCaseUiLogMapper {
    int deleteByPrimaryKey(Long id);

    int insert(TTestCaseUiLog record);

    int insertSelective(TTestCaseUiLog record);

    TTestCaseUiLog selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TTestCaseUiLog record);

    int updateByPrimaryKey(TTestCaseUiLog record);

    TTestCaseUiLog selectByPrimaryKey(@Param("id") Long id, @Param("status") Integer status);

    Long countByPlanIdAndBusinessIdAndStatusAndBusinessLogId(@Param("planId")Long planId,@Param("businessId")Long businessId,@Param("status")Integer status,@Param("businessLogId")Long businessLogId);

    int deleteByPlanId(@Param("planId") Long planId);

    List<TTestCaseUiLog> findByAll(TTestCaseUiLog tTestCaseUiLog);

}