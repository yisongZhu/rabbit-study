package com.rabbit.dao;
import java.util.Date;
import java.util.List;

import com.rabbit.model.TTestBusinessUiLog;import org.apache.ibatis.annotations.Param;

public interface TTestBusinessUiLogMapper {
    int deleteByPrimaryKey(Long id);

    int insert(TTestBusinessUiLog record);

    int insertSelective(TTestBusinessUiLog record);

    TTestBusinessUiLog selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TTestBusinessUiLog record);

    int updateByPrimaryKey(TTestBusinessUiLog record);

    TTestBusinessUiLog selectByPrimaryKey(@Param("id") Long id, @Param("status") Integer status);

    Long countByPlanIdAndStatus(@Param("planId")Long planId,@Param("status")Integer status);

    int deleteByPlanId(@Param("planId")Long planId);

    List<TTestBusinessUiLog> findByAll(TTestBusinessUiLog tTestBusinessUiLog);

    TTestBusinessUiLog findByPlanIdCount(@Param("planId")Long planId);

}