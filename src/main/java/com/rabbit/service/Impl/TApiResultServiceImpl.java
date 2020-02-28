package com.rabbit.service.Impl;

import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import com.rabbit.model.TApiResult;
import com.rabbit.dao.TApiResultMapper;
import com.rabbit.service.TApiResultService;

@Service
public class TApiResultServiceImpl implements TApiResultService {

    @Resource
    private TApiResultMapper tApiResultMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return tApiResultMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TApiResult record) {
        return tApiResultMapper.insert(record);
    }

    @Override
    public int insertSelective(TApiResult record) {
        return tApiResultMapper.insertSelective(record);
    }

    @Override
    public TApiResult selectByPrimaryKey(Long id) {
        return tApiResultMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(TApiResult record) {
        return tApiResultMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TApiResult record) {
        return tApiResultMapper.updateByPrimaryKey(record);
    }

}



