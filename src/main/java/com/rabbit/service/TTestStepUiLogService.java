package com.rabbit.service;

import com.github.pagehelper.PageInfo;
import com.rabbit.model.TTestStepUiLog;

public interface TTestStepUiLogService {


    int deleteByPrimaryKey(Long id);

    int insert(TTestStepUiLog record);

    int insertSelective(TTestStepUiLog record);

    Long insertSelectiveReturnKey(TTestStepUiLog record);

    TTestStepUiLog selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TTestStepUiLog record);

    int updateByPrimaryKey(TTestStepUiLog record);

    PageInfo<TTestStepUiLog> findByAllwithPage(int page, int pageSize, TTestStepUiLog tTestStepUiLog);

}




