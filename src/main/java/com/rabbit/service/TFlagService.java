package com.rabbit.service;

import com.github.pagehelper.PageInfo;
import com.rabbit.model.TFlag;

import java.util.List;

public interface TFlagService {


    int deleteByPrimaryKey(Long id);

    int insert(TFlag record);

    int insertSelective(TFlag record);

    TFlag selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TFlag record);

    int updateByPrimaryKey(TFlag record);

    PageInfo<TFlag> findByAllwithPage(int page, int pageSize, TFlag tFlag);

    List<TFlag> findByProjectId(Long projectId);

    List<TFlag> findByNameAndProjectId(String name, Long projectId);

    List<TFlag> findByNameAndProjectIdAndIdNot(String name, Long projectId, Long notId);

    List<TFlag> findByProjectIdAndType(Long projectId, Integer type);
}



