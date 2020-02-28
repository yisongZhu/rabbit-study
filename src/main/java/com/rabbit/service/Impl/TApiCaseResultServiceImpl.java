package com.rabbit.service.Impl;

import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.Date;
import com.rabbit.dao.TApiCaseResultMapper;
import com.rabbit.model.TApiCaseResult;
import com.rabbit.service.TApiCaseResultService;
@Service
public class TApiCaseResultServiceImpl implements TApiCaseResultService{

    @Resource
    private TApiCaseResultMapper tApiCaseResultMapper;

    @Override
    public int deleteByPrimaryKey(Long id,Date createTime) {
        return tApiCaseResultMapper.deleteByPrimaryKey(id,createTime);
    }

    @Override
    public int insert(TApiCaseResult record) {
        return tApiCaseResultMapper.insert(record);
    }

    @Override
    public int insertSelective(TApiCaseResult record) {
        return tApiCaseResultMapper.insertSelective(record);
    }

    @Override
    public TApiCaseResult selectByPrimaryKey(Long id,Date createTime) {
        return tApiCaseResultMapper.selectByPrimaryKey(id,createTime);
    }

    @Override
    public int updateByPrimaryKeySelective(TApiCaseResult record) {
        return tApiCaseResultMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TApiCaseResult record) {
        return tApiCaseResultMapper.updateByPrimaryKey(record);
    }

}
