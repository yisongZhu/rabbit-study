package com.rabbit.service;

import com.github.pagehelper.PageInfo;
import com.rabbit.model.GlobalParam;

import java.util.List;

public interface GlobalParamService {


    int deleteByPrimaryKey(Long id);

    int insertSelective(GlobalParam record);

    GlobalParam selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(GlobalParam record);

    int updateByPrimaryKey(GlobalParam record);

    PageInfo<GlobalParam> findByAllwithPage(int page, int pageSize, GlobalParam globalParam);

    List<GlobalParam> findByParamNameAndProjectId(String paramName, Long projectId);

    List<GlobalParam> findByParamNameAndProjectIdAndIdNot(String paramName, Long projectId, Long notId);

    int insert(GlobalParam record);
}


