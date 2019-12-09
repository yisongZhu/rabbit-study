package com.rabbit.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.rabbit.dao.TTestBusinessUiLogMapper;
import com.rabbit.dao.TTestCaseUiLogMapper;
import com.rabbit.dao.TTestStepUiLogMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import com.rabbit.model.TTestPlanUiLog;
import com.rabbit.dao.TTestPlanUiLogMapper;
import com.rabbit.service.TTestPlanUiLogService;

import java.beans.Transient;
import java.util.List;

@Service
public class TTestPlanUiLogServiceImpl implements TTestPlanUiLogService {

    @Resource
    private TTestPlanUiLogMapper tTestPlanUiLogMapper;

    @Autowired
    private TTestBusinessUiLogMapper testBusinessUiLogMapper;

    @Autowired
    private TTestCaseUiLogMapper testCaseUiLogMapper;

    @Autowired
    private TTestStepUiLogMapper testStepUiLogMapper;

    @Override
    @Transient
    public int deleteByPrimaryKey(Long id) {
        testStepUiLogMapper.deleteByPlanId(id);
        testCaseUiLogMapper.deleteByPlanId(id);
        testBusinessUiLogMapper.deleteByPlanId(id);
        return tTestPlanUiLogMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TTestPlanUiLog record) {
        return tTestPlanUiLogMapper.insert(record);
    }

    @Override
    public int insertSelective(TTestPlanUiLog record) {
        return tTestPlanUiLogMapper.insertSelective(record);
    }

    @Override
    public TTestPlanUiLog selectByPrimaryKey(Long id) {
        return tTestPlanUiLogMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(TTestPlanUiLog record) {
        return tTestPlanUiLogMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TTestPlanUiLog record) {
        return tTestPlanUiLogMapper.updateByPrimaryKey(record);
    }

    public PageInfo<TTestPlanUiLog> findByAllwithPage(int page, int pageSize, TTestPlanUiLog tTestPlanUiLog) {
        PageHelper.startPage(page, pageSize);
        return new PageInfo<>(tTestPlanUiLogMapper.findByAll(tTestPlanUiLog));
    }
}


