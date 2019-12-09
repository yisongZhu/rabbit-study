package com.rabbit.dao;
import org.apache.ibatis.annotations.Param;
import java.util.List;
import java.util.Date;

import com.rabbit.model.TTestPlanUiLog;

public interface TTestPlanUiLogMapper {
    int deleteByPrimaryKey(Long id);

    int insert(TTestPlanUiLog record);

    int insertSelective(TTestPlanUiLog record);

    TTestPlanUiLog selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TTestPlanUiLog record);

    int updateByPrimaryKey(TTestPlanUiLog record);

    List<TTestPlanUiLog> findByAll(TTestPlanUiLog tTestPlanUiLog);

}