package com.rabbit.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import com.rabbit.dao.TTestCaseUiLogMapper;
import com.rabbit.model.TTestCaseUiLog;
import com.rabbit.service.TTestCaseUiLogService;

@Service
public class TTestCaseUiLogServiceImpl implements TTestCaseUiLogService {

    @Resource
    private TTestCaseUiLogMapper tTestCaseUiLogMapper;

    @Override
    public int insert(TTestCaseUiLog record) {
        return tTestCaseUiLogMapper.insert(record);
    }

    @Override
    public int insertSelective(TTestCaseUiLog record) {
        return tTestCaseUiLogMapper.insertSelective(record);
    }

    public Long insertSelectiveReturnKey(TTestCaseUiLog record) {
        tTestCaseUiLogMapper.insertSelective(record);
        return record.getId();
    }

    @Override
    public TTestCaseUiLog selectByPrimaryKey(Long id, Integer status) {
        return tTestCaseUiLogMapper.selectByPrimaryKey(id, status);
    }

    @Override
    public int updateByPrimaryKeySelective(TTestCaseUiLog record) {
        return tTestCaseUiLogMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TTestCaseUiLog record) {
        return tTestCaseUiLogMapper.updateByPrimaryKey(record);
    }

    @Override
    public int deleteByPrimaryKey(Long id) {
        return tTestCaseUiLogMapper.deleteByPrimaryKey(id);
    }

    @Override
    public TTestCaseUiLog selectByPrimaryKey(Long id) {
        return tTestCaseUiLogMapper.selectByPrimaryKey(id);
    }

    @Override
    public Long countByPlanIdAndBusinessIdAndStatusAndBusinessLogId(Long planId, Long businessId, Integer status, Long businessLogId) {
        return tTestCaseUiLogMapper.countByPlanIdAndBusinessIdAndStatusAndBusinessLogId(planId, businessId, status, businessLogId);
    }

    @Override
    public PageInfo<TTestCaseUiLog> findByAllwithPage(int page, int pageSize, TTestCaseUiLog tTestCaseUiLog) {
        PageHelper.startPage(page, pageSize);
        return new PageInfo<>(tTestCaseUiLogMapper.findByAll(tTestCaseUiLog));
    }
}



