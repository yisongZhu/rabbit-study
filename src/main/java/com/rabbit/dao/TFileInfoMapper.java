package com.rabbit.dao;

import com.rabbit.model.TFileInfo;

public interface TFileInfoMapper {
    int deleteByPrimaryKey(Long id);

    int insert(TFileInfo record);

    int insertSelective(TFileInfo record);

    TFileInfo selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TFileInfo record);

    int updateByPrimaryKey(TFileInfo record);
}