package com.rabbit.service;

import com.github.pagehelper.PageInfo;
import com.rabbit.model.Device;

import java.util.List;

public interface DeviceService {


    int deleteByPrimaryKey(String id);

    int insert(Device record);

    int insertSelective(Device record);

    Device selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Device record);

    int updateByPrimaryKey(Device record);

    PageInfo<Device> findByAllwithPage(int page, int pageSize, Device device);

    List<Device> getOnlineDevices(Integer platform);

    List<Device> findByAll(Device device);

    int deleteByPrimaryKey(String id, Integer status);

    Device selectByPrimaryKey(String id, Integer status);
}



