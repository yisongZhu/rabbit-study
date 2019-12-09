package com.rabbit.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.rabbit.dao.TTestCaseUiNewLogMapper;
import com.rabbit.dao.TTestStepUiNewLogMapper;
import com.rabbit.dao.TTestSuiteUiLogMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import com.rabbit.model.TTestPlanUiNewLog;
import com.rabbit.dao.TTestPlanUiNewLogMapper;
import com.rabbit.service.TTestPlanUiNewLogService;

@Service
public class TTestPlanUiNewLogServiceImpl implements TTestPlanUiNewLogService {

    @Resource
    private TTestPlanUiNewLogMapper tTestPlanUiNewLogMapper;
    @Autowired
    private TTestSuiteUiLogMapper testSuiteUiLogMapper;
    @Autowired
    private TTestCaseUiNewLogMapper tTestCaseUiNewLogMapper;
    @Autowired
    private TTestStepUiNewLogMapper tTestStepUiNewLogMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        tTestStepUiNewLogMapper.deleteByPlanJobId(id);
        tTestCaseUiNewLogMapper.deleteByPlanLogId(id);
        testSuiteUiLogMapper.deleteByPlanLogId(id);
        return tTestPlanUiNewLogMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TTestPlanUiNewLog record) {
        return tTestPlanUiNewLogMapper.insert(record);
    }

    @Override
    public int insertSelective(TTestPlanUiNewLog record) {
        return tTestPlanUiNewLogMapper.insertSelective(record);
    }

    @Override
    public TTestPlanUiNewLog selectByPrimaryKey(Long id) {
        return tTestPlanUiNewLogMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(TTestPlanUiNewLog record) {
        return tTestPlanUiNewLogMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TTestPlanUiNewLog record) {
        return tTestPlanUiNewLogMapper.updateByPrimaryKey(record);
    }
    @Override
    public PageInfo<TTestPlanUiNewLog> findByAllwithPage(int page, int pageSize, TTestPlanUiNewLog tTestPlanUiNewLog) {
        PageHelper.startPage(page, pageSize);
        return new PageInfo<>(tTestPlanUiNewLogMapper.findByAll(tTestPlanUiNewLog));
    }
}

