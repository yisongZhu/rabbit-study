package com.rabbit.service.Impl;

import com.rabbit.dto.StepUiDto;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import com.rabbit.model.StepUi;
import com.rabbit.dao.StepUiMapper;
import com.rabbit.service.StepUiService;

import java.util.List;

@Service
public class StepUiServiceImpl implements StepUiService {

    @Resource
    private StepUiMapper stepUiMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return stepUiMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insertSelective(StepUi record) {
        return stepUiMapper.insertSelective(record);
    }

    @Override
    public StepUi selectByPrimaryKey(Long id) {
        return stepUiMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKey(StepUi record) {
        return stepUiMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<StepUiDto> findDtoByTestcaseId(Long testcaseId) {
        return stepUiMapper.findDtoByTestcaseId(testcaseId);
    }

    @Override
    public int deleteByTestcaseId(Long testcaseId) {
        return stepUiMapper.deleteByTestcaseId(testcaseId);
    }

    @Override
    public int deleteByPrimaryKey(Long id, Long testcaseId) {
        return stepUiMapper.deleteByPrimaryKey(id, testcaseId);
    }

    @Override
    public StepUi selectByPrimaryKey(Long id, Long testcaseId) {
        return stepUiMapper.selectByPrimaryKey(id, testcaseId);
    }

    @Override
    public List<StepUi> findByTestcaseId(Long testcaseId) {
        return stepUiMapper.findByTestcaseId(testcaseId);
    }
}








