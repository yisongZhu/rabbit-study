package com.rabbit.service;

import com.github.pagehelper.PageInfo;
import com.rabbit.model.TTestPlanUiLog;

import java.util.List;

public interface TTestPlanUiLogService {


    int deleteByPrimaryKey(Long id);

    int insert(TTestPlanUiLog record);

    int insertSelective(TTestPlanUiLog record);

    TTestPlanUiLog selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TTestPlanUiLog record);

    int updateByPrimaryKey(TTestPlanUiLog record);

    PageInfo<TTestPlanUiLog> findByAllwithPage(int page, int pageSize, TTestPlanUiLog tTestPlanUiLog);

}


