package com.rabbit.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import com.rabbit.dao.TTestStepUiLogMapper;
import com.rabbit.model.TTestStepUiLog;
import com.rabbit.service.TTestStepUiLogService;

@Service
public class TTestStepUiLogServiceImpl implements TTestStepUiLogService {

    @Resource
    private TTestStepUiLogMapper tTestStepUiLogMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return tTestStepUiLogMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TTestStepUiLog record) {
        return tTestStepUiLogMapper.insert(record);
    }

    @Override
    public int insertSelective(TTestStepUiLog record) {
        return tTestStepUiLogMapper.insertSelective(record);
    }

    @Override
    public Long insertSelectiveReturnKey(TTestStepUiLog record) {
        tTestStepUiLogMapper.insertSelective(record);
        return record.getId();
    }

    @Override
    public TTestStepUiLog selectByPrimaryKey(Long id) {
        return tTestStepUiLogMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(TTestStepUiLog record) {
        return tTestStepUiLogMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TTestStepUiLog record) {
        return tTestStepUiLogMapper.updateByPrimaryKey(record);
    }

    @Override
    public PageInfo<TTestStepUiLog> findByAllwithPage(int page, int pageSize, TTestStepUiLog tTestStepUiLog) {
        PageHelper.startPage(page, pageSize);
        return new PageInfo<>(tTestStepUiLogMapper.findByAll(tTestStepUiLog));
    }
}




