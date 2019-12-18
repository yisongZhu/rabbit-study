package com.rabbit.service;

import com.github.pagehelper.PageInfo;
import com.rabbit.model.TApi;

import java.util.List;

public interface TApiService {


    int deleteByPrimaryKey(Long id);

    int insert(TApi record);

    int insertSelective(TApi record);

    TApi selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TApi record);

    int updateByPrimaryKey(TApi record);

    PageInfo<TApi> findByAllwithPage(int page, int pageSize, TApi tApi);

    List<TApi> findByProjectId(Long projectId);

    List<TApi> findByNameAndProjectId(String name, Long projectId);

    List<TApi> findByNameAndProjectIdAndIdNot(String name, Long projectId, Long notId);
}

