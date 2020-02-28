package com.rabbit.service;

import java.util.Date;
import com.rabbit.model.TApiCaseResult;
public interface TApiCaseResultService{


    int deleteByPrimaryKey(Long id,Date createTime);

    int insert(TApiCaseResult record);

    int insertSelective(TApiCaseResult record);

    TApiCaseResult selectByPrimaryKey(Long id,Date createTime);

    int updateByPrimaryKeySelective(TApiCaseResult record);

    int updateByPrimaryKey(TApiCaseResult record);

}
