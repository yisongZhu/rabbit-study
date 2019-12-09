package com.rabbit.dao;
import java.util.List;
import java.util.Date;

import com.rabbit.model.TTestStepUiLog;import org.apache.ibatis.annotations.Param;

public interface TTestStepUiLogMapper {
    int deleteByPrimaryKey(Long id);

    int insert(TTestStepUiLog record);

    int insertSelective(TTestStepUiLog record);

    TTestStepUiLog selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TTestStepUiLog record);

    int updateByPrimaryKey(TTestStepUiLog record);

    int deleteByPlanId(@Param("planId") Long planId);

    List<TTestStepUiLog> findByAll(TTestStepUiLog tTestStepUiLog);
}