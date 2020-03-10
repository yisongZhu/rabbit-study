package com.rabbit.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import com.rabbit.model.Device;
import com.rabbit.dao.DeviceMapper;
import com.rabbit.service.DeviceService;
import org.springframework.util.StringUtils;

import java.util.List;

@Service
public class DeviceServiceImpl implements DeviceService {

    @Resource
    private DeviceMapper deviceMapper;

    @Override
    public int deleteByPrimaryKey(String id) {
        return deviceMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(Device record) {
        return deviceMapper.insert(record);
    }

    @Override
    public int insertSelective(Device record) {
        return deviceMapper.insertSelective(record);
    }

    @Override
    public Device selectByPrimaryKey(String id) {
        return deviceMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(Device record) {
        return deviceMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(Device record) {
        return deviceMapper.updateByPrimaryKey(record);
    }

    @Override
    public PageInfo<Device> findByAllwithPage(int page, int pageSize, Device device) {
        PageHelper.startPage(page, pageSize);
        return new PageInfo<>(deviceMapper.findByAll(device));
    }

    @Override
    public List<Device> getOnlineDevices(Integer platform) {
        return deviceMapper.findByPlatformAndStatusNot(platform, Device.OFFLINE_STATUS);
    }

    @Override
    public List<Device> findByAll(Device device) {
        return deviceMapper.findByAll(device);
    }

    @Override
    public int deleteByPrimaryKey(String id, Integer status) {
        return deviceMapper.deleteByPrimaryKey(id, status);
    }

    @Override
    public Device selectByPrimaryKey(String id, Integer status) {
        return deviceMapper.selectByPrimaryKey(id, status);
    }
}



