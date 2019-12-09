package com.rabbit.service;

import com.github.pagehelper.PageInfo;
import com.rabbit.model.TTestCaseUiLog;

public interface TTestCaseUiLogService {

    int insert(TTestCaseUiLog record);

    int insertSelective(TTestCaseUiLog record);

    Long insertSelectiveReturnKey(TTestCaseUiLog record);

    TTestCaseUiLog selectByPrimaryKey(Long id, Integer status);

    int updateByPrimaryKeySelective(TTestCaseUiLog record);

    int updateByPrimaryKey(TTestCaseUiLog record);

    int deleteByPrimaryKey(Long id);

    TTestCaseUiLog selectByPrimaryKey(Long id);

    Long countByPlanIdAndBusinessIdAndStatusAndBusinessLogId(Long planId, Long businessId, Integer status, Long businessLogId);

    PageInfo<TTestCaseUiLog> findByAllwithPage(int page, int pageSize, TTestCaseUiLog tTestCaseUiLog);

}



