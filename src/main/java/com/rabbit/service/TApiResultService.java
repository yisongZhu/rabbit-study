package com.rabbit.service;

import com.rabbit.model.TApiResult;

public interface TApiResultService {


    int deleteByPrimaryKey(Long id);

    int insert(TApiResult record);

    int insertSelective(TApiResult record);

    TApiResult selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TApiResult record);

    int updateByPrimaryKey(TApiResult record);

}



