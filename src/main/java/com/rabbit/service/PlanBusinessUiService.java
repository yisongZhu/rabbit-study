package com.rabbit.service;

import com.rabbit.dto.JobDto;
import com.rabbit.model.PlanBusinessUi;

import java.util.List;

public interface PlanBusinessUiService {


    int deleteByPrimaryKey(Long id);

    int insertSelective(PlanBusinessUi record);

    PlanBusinessUi selectByPrimaryKey(Long id);

    int updateByPrimaryKey(PlanBusinessUi record);

    int deleteByJobId(Long jobId);

    int insertList(List<PlanBusinessUi> list);

}

