package com.rabbit.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import com.rabbit.model.TTestBusinessUiLog;
import com.rabbit.dao.TTestBusinessUiLogMapper;
import com.rabbit.service.TTestBusinessUiLogService;

@Service
public class TTestBusinessUiLogServiceImpl implements TTestBusinessUiLogService {

    @Resource
    private TTestBusinessUiLogMapper tTestBusinessUiLogMapper;

    @Override
    public int insert(TTestBusinessUiLog record) {
        return tTestBusinessUiLogMapper.insert(record);
    }

    @Override
    public int insertSelective(TTestBusinessUiLog record) {
        return tTestBusinessUiLogMapper.insertSelective(record);
    }

    @Override
    public Long insertSelectiveReturnKey(TTestBusinessUiLog record) {
        tTestBusinessUiLogMapper.insertSelective(record);
        return record.getId();
    }

    @Override
    public TTestBusinessUiLog selectByPrimaryKey(Long id, Integer status) {
        return tTestBusinessUiLogMapper.selectByPrimaryKey(id, status);
    }

    @Override
    public int updateByPrimaryKeySelective(TTestBusinessUiLog record) {
        return tTestBusinessUiLogMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TTestBusinessUiLog record) {
        return tTestBusinessUiLogMapper.updateByPrimaryKey(record);
    }

    @Override
    public int deleteByPrimaryKey(Long id) {
        return tTestBusinessUiLogMapper.deleteByPrimaryKey(id);
    }

    @Override
    public TTestBusinessUiLog selectByPrimaryKey(Long id) {
        return tTestBusinessUiLogMapper.selectByPrimaryKey(id);
    }

    @Override
    public Long countByPlanIdAndStatus(Long planId, Integer status) {
        return tTestBusinessUiLogMapper.countByPlanIdAndStatus(planId, status);
    }

    @Override
    public PageInfo<TTestBusinessUiLog> findByAllwithPage(int page, int pageSize, TTestBusinessUiLog tTestBusinessUiLog) {
        PageHelper.startPage(page, pageSize);
        return new PageInfo<>(tTestBusinessUiLogMapper.findByAll(tTestBusinessUiLog));
    }

    @Override
    public TTestBusinessUiLog findByPlanIdCount(Long planId) {
        return tTestBusinessUiLogMapper.findByPlanIdCount(planId);
    }
}

