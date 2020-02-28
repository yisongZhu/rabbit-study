package com.rabbit.service.Impl;

import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import com.rabbit.model.TTestPlanResultApi;
import com.rabbit.dao.TTestPlanResultApiMapper;
import com.rabbit.service.TTestPlanResultApiService;
@Service
public class TTestPlanResultApiServiceImpl implements TTestPlanResultApiService{

    @Resource
    private TTestPlanResultApiMapper tTestPlanResultApiMapper;

    @Override
    public int deleteByPrimaryKey(Long id,Integer suiteSuccCount) {
        return tTestPlanResultApiMapper.deleteByPrimaryKey(id,suiteSuccCount);
    }

    @Override
    public int insert(TTestPlanResultApi record) {
        return tTestPlanResultApiMapper.insert(record);
    }

    @Override
    public int insertSelective(TTestPlanResultApi record) {
        return tTestPlanResultApiMapper.insertSelective(record);
    }

    @Override
    public TTestPlanResultApi selectByPrimaryKey(Long id,Integer suiteSuccCount) {
        return tTestPlanResultApiMapper.selectByPrimaryKey(id,suiteSuccCount);
    }

    @Override
    public int updateByPrimaryKeySelective(TTestPlanResultApi record) {
        return tTestPlanResultApiMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TTestPlanResultApi record) {
        return tTestPlanResultApiMapper.updateByPrimaryKey(record);
    }

}
