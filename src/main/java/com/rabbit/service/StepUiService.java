package com.rabbit.service;

import com.rabbit.dto.StepUiDto;
import com.rabbit.model.StepUi;

import java.util.List;

public interface StepUiService {


    int deleteByPrimaryKey(Long id);

    int insertSelective(StepUi record);

    StepUi selectByPrimaryKey(Long id);

    int updateByPrimaryKey(StepUi record);

    List<StepUiDto> findDtoByTestcaseId(Long testcaseId);

    int deleteByTestcaseId(Long testcaseId);

    int deleteByPrimaryKey(Long id, Long testcaseId);

    StepUi selectByPrimaryKey(Long id, Long testcaseId);

    List<StepUi> findByTestcaseId(Long testcaseId);
}








