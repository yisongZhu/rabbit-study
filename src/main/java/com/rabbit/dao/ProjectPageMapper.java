package com.rabbit.dao;

import com.rabbit.model.ProjectPage;

public interface ProjectPageMapper {
    int deleteByPrimaryKey(Long id);

    int insertSelective(ProjectPage record);

    int updateByPrimaryKeySelective(ProjectPage record);

    int updateByPrimaryKey(ProjectPage record);
}