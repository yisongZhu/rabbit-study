package com.rabbit.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.rabbit.service.TFileInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import com.rabbit.model.TApi;
import com.rabbit.dao.TApiMapper;
import com.rabbit.service.TApiService;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TApiServiceImpl implements TApiService {

    @Resource
    private TApiMapper tApiMapper;
    @Autowired
    private TFileInfoService fileInfoService;

    @Override
    @Transactional
    public int deleteByPrimaryKey(Long id) {
        fileInfoService.deleteBySourceTypeAndSourceId(2, id);
        return tApiMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TApi record) {
        return tApiMapper.insert(record);
    }

    @Override
    public int insertSelective(TApi record) {
        return tApiMapper.insertSelective(record);
    }

    @Override
    public TApi selectByPrimaryKey(Long id) {
        return tApiMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(TApi record) {
        return tApiMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TApi record) {
        return tApiMapper.updateByPrimaryKey(record);
    }

    @Override
    public PageInfo<TApi> findByAllwithPage(int page, int pageSize, TApi tApi) {
        PageHelper.startPage(page, pageSize);
        return new PageInfo<>(tApiMapper.findByAll(tApi));
    }

    @Override
    public List<TApi> findByProjectId(Long projectId) {
        return tApiMapper.findByProjectId(projectId);
    }

    @Override
    public List<TApi> findByNameAndProjectId(String name, Long projectId) {
        return tApiMapper.findByNameAndProjectId(name, projectId);
    }

    @Override
    public List<TApi> findByNameAndProjectIdAndIdNot(String name, Long projectId, Long notId) {
        return tApiMapper.findByNameAndProjectIdAndIdNot(name, projectId, notId);
    }
}



