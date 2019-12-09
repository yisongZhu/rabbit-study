package com.rabbit.service;

import com.github.pagehelper.PageInfo;
import com.rabbit.model.TTestBusinessUiLog;

public interface TTestBusinessUiLogService {

    int insert(TTestBusinessUiLog record);

    int insertSelective(TTestBusinessUiLog record);

    Long insertSelectiveReturnKey(TTestBusinessUiLog record);

    TTestBusinessUiLog selectByPrimaryKey(Long id, Integer status);

    int updateByPrimaryKeySelective(TTestBusinessUiLog record);

    int updateByPrimaryKey(TTestBusinessUiLog record);

    int deleteByPrimaryKey(Long id);

    TTestBusinessUiLog selectByPrimaryKey(Long id);

    Long countByPlanIdAndStatus(Long planId, Integer status);

    PageInfo<TTestBusinessUiLog> findByAllwithPage(int page, int pageSize, TTestBusinessUiLog tTestBusinessUiLog) ;

    TTestBusinessUiLog findByPlanIdCount(Long planId);
}

