package com.rabbit.service.Impl;

import com.rabbit.dto.JobDto;
import com.rabbit.dto.TestbusinessUiDto;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import com.rabbit.model.PlanBusinessUi;
import com.rabbit.dao.PlanBusinessUiMapper;
import com.rabbit.service.PlanBusinessUiService;

import java.util.List;

@Service
public class PlanBusinessUiServiceImpl implements PlanBusinessUiService {

    @Resource
    private PlanBusinessUiMapper planBusinessUiMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return planBusinessUiMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insertSelective(PlanBusinessUi record) {
        return planBusinessUiMapper.insertSelective(record);
    }

    @Override
    public PlanBusinessUi selectByPrimaryKey(Long id) {
        return planBusinessUiMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKey(PlanBusinessUi record) {
        return planBusinessUiMapper.updateByPrimaryKey(record);
    }

    @Override
    public int deleteByJobId(Long jobId) {
        return planBusinessUiMapper.deleteByJobId(jobId);
    }

    @Override
    public int insertList(List<PlanBusinessUi> list) {
        return planBusinessUiMapper.insertList(list);
    }
}

