package com.rabbit.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.rabbit.dao.TStepApiMapper;
import com.rabbit.dao.TTestcaseApiDtoMapper;
import com.rabbit.dto.StepApiDto;
import com.rabbit.dto.TApiCaseResultDto;
import com.rabbit.dto.TestcaseApiDto;
import com.rabbit.model.*;
import com.rabbit.model.po.CaseVar;
import com.rabbit.service.TApiService;
import com.rabbit.service.TFileInfoService;
import com.rabbit.service.TStepApiService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import com.rabbit.dao.TTestcaseApiMapper;
import com.rabbit.service.TTestcaseApiService;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class TTestcaseApiServiceImpl implements TTestcaseApiService {

    @Resource
    private TTestcaseApiMapper tTestcaseApiMapper;
    @Autowired
    private TTestcaseApiDtoMapper tTestcaseApiDtoMapper;

    @Resource
    private TStepApiService stepApiService;
    @Autowired
    private TFileInfoService fileInfoService;

    @Resource
    private TStepApiMapper stepApiMapper;

    @Resource
    private TApiService apiService;

    @Override
    @Transactional
    public int deleteByPrimaryKey(Long id) {
        fileInfoService.deleteBySourceTypeAndSourceId(3, id);
        List<TStepApi> byTestcaseId = stepApiService.findByTestcaseId(id);
        if (byTestcaseId.size() > 0) {
            for (TStepApi stepApi : byTestcaseId) {
                fileInfoService.deleteBySourceTypeAndSourceId(4, stepApi.getId());
            }
        }
        stepApiMapper.deleteByTestcaseId(id);
        return tTestcaseApiMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TTestcaseApi record) {
        return tTestcaseApiMapper.insert(record);
    }

    @Override
    public int insertSelective(TTestcaseApi record) {
        return tTestcaseApiMapper.insertSelective(record);
    }

    @Override
    public TTestcaseApi selectByPrimaryKey(Long id) {
        return tTestcaseApiMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(TTestcaseApi record) {
        return tTestcaseApiMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TTestcaseApi record) {
        return tTestcaseApiMapper.updateByPrimaryKey(record);
    }

    @Override
    public PageInfo<TTestcaseApi> findByAllwithPage(int page, int pageSize, TTestcaseApi tTestcaseApi) {
        PageHelper.startPage(page, pageSize);
        return new PageInfo<>(tTestcaseApiMapper.findByAll(tTestcaseApi));
    }

    @Override
    public List<TTestcaseApi> findByCaseTypeAndProjectId(Integer caseType, Long projectId) {
        return tTestcaseApiMapper.findByCaseTypeAndProjectId(caseType, projectId);
    }

    @Override
    @Transactional
    public void add(TestcaseApiDto testcaseApi) {
        List<TTestcaseApi> byProjectIdAndName = tTestcaseApiMapper.findByProjectIdAndName(testcaseApi.getProjectId(), testcaseApi.getName());
        if (byProjectIdAndName.size() > 0) {
            throw new IllegalArgumentException("用例【" + testcaseApi.getName() + "】已存在");
        }
        tTestcaseApiMapper.insertSelective(testcaseApi);
        List<StepApiDto> testSteps = testcaseApi.getTestSteps();
        for (StepApiDto stepApiDto : testSteps) {
            stepApiDto.setId(null);
            stepApiDto.setTestcaseId(testcaseApi.getId());
        }
        stepApiService.saveSteps(testSteps);
    }

    @Override
    @Transactional
    public void edit(TestcaseApiDto testcaseApi) {
        List<TTestcaseApi> byProjectIdAndName = tTestcaseApiMapper.findByProjectIdAndNameAndIdNot(testcaseApi.getProjectId(), testcaseApi.getName(), testcaseApi.getId());
        if (byProjectIdAndName.size() > 0) {
            throw new IllegalArgumentException("用例【" + testcaseApi.getName() + "】已存在");
        }
        tTestcaseApiMapper.updateByPrimaryKey(testcaseApi);
        List<StepApiDto> testSteps = testcaseApi.getTestSteps();
        stepApiService.saveSteps(testSteps);
    }

    @Override
    public TestcaseApiDto selectDtoByPrimaryKey(Long id) {
        return tTestcaseApiDtoMapper.selectDtoByPrimaryKey(id);
    }

    @Override
    public TestcaseApiDto selectDtoByIdAndCaseType(Long id, Integer caseType) {
        return tTestcaseApiDtoMapper.selectDtoByIdAndCaseType(id, caseType);
    }

    @Override
    public TApiCaseResultDto debug(TestcaseApiDto testcaseApi, Map<String, Object> gVars, Map<String, Object> caseVars) {
        TApiCaseResultDto tApiCaseResult = new TApiCaseResultDto();
        tApiCaseResult.setCreateTime(new Date());
        tApiCaseResult.setCaseId(testcaseApi.getId());
        tApiCaseResult.setCaseName(testcaseApi.getName());
        List<CaseVar> caseVarList = testcaseApi.getCaseVars();
        if (caseVarList != null) {
            for (CaseVar caseVar : caseVarList) {
                caseVars.put(caseVar.getName(), caseVar.getValue());
            }
        }
        List<StepApiDto> testSteps = testcaseApi.getTestSteps();
        List<TApiResult> stepResults = new ArrayList();
        int total = 0;
        int success = 0;
        int failed = 0;
        int skipped = 0;
        if (testSteps != null) {
            total = testSteps.size();
            for (StepApiDto stepApiDto : testSteps) {
                if (stepApiDto.getStatus() == 0) {
                    continue;
                }
                TApi tApi = new TApi();
                BeanUtils.copyProperties(stepApiDto, tApi);
                tApi.setEnvId(testcaseApi.getEnvId());
                TApiResult tApiResult = apiService.excApi(tApi, gVars, caseVars);
                if (tApiResult.getResultType().equals(1)) {
                    success = success + 1;
                } else {
                    failed = failed + 1;
                }
                tApiResult.setStepId(stepApiDto.getId());
                tApiResult.setStepName(stepApiDto.getName());
                stepResults.add(tApiResult);
            }
        }
        tApiCaseResult.setTotal(total);
        tApiCaseResult.setSuccess(success);
        tApiCaseResult.setFailed(failed);
        tApiCaseResult.setSkipped(skipped);
        tApiCaseResult.setSteps(stepResults);
        tApiCaseResult.setEndTime(new Date());
        return tApiCaseResult;
    }
    @Override
    public List<TTestcaseApi> findBySuiteId(Long id) {
        return tTestcaseApiMapper.findBySuiteId(id);
    }
    @Override
    public List<TestcaseApiDto> selectDtoBySuiteId(Long id) {
        return tTestcaseApiDtoMapper.selectDtoBySuiteId(id);
    }
}



