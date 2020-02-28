package com.rabbit.dao;

import com.rabbit.model.TApiResult;

public interface TApiResultMapper {
    int deleteByPrimaryKey(Long id);

    int insert(TApiResult record);

    int insertSelective(TApiResult record);

    TApiResult selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TApiResult record);

    int updateByPrimaryKey(TApiResult record);
}