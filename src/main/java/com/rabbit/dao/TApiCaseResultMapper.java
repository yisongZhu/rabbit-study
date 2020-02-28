package com.rabbit.dao;

import com.rabbit.model.TApiCaseResult;
import java.util.Date;
import org.apache.ibatis.annotations.Param;

public interface TApiCaseResultMapper {
    int deleteByPrimaryKey(@Param("id") Long id, @Param("createTime") Date createTime);

    int insert(TApiCaseResult record);

    int insertSelective(TApiCaseResult record);

    TApiCaseResult selectByPrimaryKey(@Param("id") Long id, @Param("createTime") Date createTime);

    int updateByPrimaryKeySelective(TApiCaseResult record);

    int updateByPrimaryKey(TApiCaseResult record);
}