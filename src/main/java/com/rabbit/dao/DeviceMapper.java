package com.rabbit.dao;


import com.rabbit.model.Device;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface DeviceMapper {
    int deleteByPrimaryKey(@Param("id") String id, @Param("status") Integer status);

    int insert(Device record);

    int insertSelective(Device record);

    Device selectByPrimaryKey(@Param("id") String id, @Param("status") Integer status);

    int updateByPrimaryKeySelective(Device record);

    int updateByPrimaryKey(Device record);

    int deleteByPrimaryKey(String id);

    Device selectByPrimaryKey(String id);

    List<Device> findByAll(Device device);

    List<Device> findByPlatformAndStatusNot(@Param("platform") Integer platform, @Param("notStatus") Integer notStatus);


}