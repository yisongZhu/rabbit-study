package com.rabbit.service;
import com.rabbit.dto.SysDictDto;
import com.rabbit.model.SysDict;

import java.util.List;

public interface SysDictService {
    int deleteByPrimaryKey(Long id);

    int insertSelective(SysDict record);

    SysDict selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(SysDict record);

    int updateByPrimaryKey(SysDict record);

    List<SysDict> findAll();

    List<SysDict> findByName(String name);

    List<SysDictDto> findUiActions();
}


