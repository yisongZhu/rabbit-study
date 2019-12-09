package com.rabbit.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import com.rabbit.dao.TTestStepUiNewLogMapper;
import com.rabbit.model.TTestStepUiNewLog;
import com.rabbit.service.TTestStepUiNewLogService;
@Service
public class TTestStepUiNewLogServiceImpl implements TTestStepUiNewLogService{

    @Resource
    private TTestStepUiNewLogMapper tTestStepUiNewLogMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return tTestStepUiNewLogMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TTestStepUiNewLog record) {
        return tTestStepUiNewLogMapper.insert(record);
    }

    @Override
    public int insertSelective(TTestStepUiNewLog record) {
        return tTestStepUiNewLogMapper.insertSelective(record);
    }

    @Override
    public TTestStepUiNewLog selectByPrimaryKey(Long id) {
        return tTestStepUiNewLogMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(TTestStepUiNewLog record) {
        return tTestStepUiNewLogMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TTestStepUiNewLog record) {
        return tTestStepUiNewLogMapper.updateByPrimaryKey(record);
    }
    @Override
    public PageInfo<TTestStepUiNewLog> findByAllwithPage(int page, int pageSize, TTestStepUiNewLog tTestStepUiNewLog) {
        PageHelper.startPage(page, pageSize);
        return new PageInfo<>(tTestStepUiNewLogMapper.findByAll(tTestStepUiNewLog));
    }
}
