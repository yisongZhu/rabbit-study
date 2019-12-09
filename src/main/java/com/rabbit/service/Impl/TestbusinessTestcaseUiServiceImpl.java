package com.rabbit.service.Impl;

import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import com.rabbit.model.TestbusinessTestcaseUi;
import com.rabbit.dao.TestbusinessTestcaseUiMapper;
import com.rabbit.service.TestbusinessTestcaseUiService;
@Service
public class TestbusinessTestcaseUiServiceImpl implements TestbusinessTestcaseUiService{

    @Resource
    private TestbusinessTestcaseUiMapper testbusinessTestcaseUiMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return testbusinessTestcaseUiMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insertSelective(TestbusinessTestcaseUi record) {
        return testbusinessTestcaseUiMapper.insertSelective(record);
    }

    @Override
    public TestbusinessTestcaseUi selectByPrimaryKey(Long id) {
        return testbusinessTestcaseUiMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(TestbusinessTestcaseUi record) {
        return testbusinessTestcaseUiMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TestbusinessTestcaseUi record) {
        return testbusinessTestcaseUiMapper.updateByPrimaryKey(record);
    }

}
