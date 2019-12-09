package com.rabbit.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import com.rabbit.dao.GlobalParamMapper;
import com.rabbit.model.GlobalParam;
import com.rabbit.service.GlobalParamService;

import java.util.List;

@Service
public class GlobalParamServiceImpl implements GlobalParamService {

    @Resource
    private GlobalParamMapper globalParamMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return globalParamMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insertSelective(GlobalParam record) {
        return globalParamMapper.insertSelective(record);
    }

    @Override
    public GlobalParam selectByPrimaryKey(Long id) {
        return globalParamMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(GlobalParam record) {
        return globalParamMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(GlobalParam record) {
        return globalParamMapper.updateByPrimaryKey(record);
    }

    @Override
    public PageInfo<GlobalParam> findByAllwithPage(int page, int pageSize, GlobalParam globalParam) {
        PageHelper.startPage(page, pageSize);
        return new PageInfo<>(globalParamMapper.findByAll(globalParam));
    }
    @Override
    public List<GlobalParam> findByParamNameAndProjectId(String paramName, Long projectId) {
        return globalParamMapper.findByParamNameAndProjectId(paramName, projectId);
    }
    @Override
    public List<GlobalParam> findByParamNameAndProjectIdAndIdNot(String paramName, Long projectId, Long notId) {
        return globalParamMapper.findByParamNameAndProjectIdAndIdNot(paramName, projectId, notId);
    }
}

