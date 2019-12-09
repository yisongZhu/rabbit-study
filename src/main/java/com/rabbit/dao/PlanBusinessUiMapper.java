package com.rabbit.dao;
import org.apache.ibatis.annotations.Param;
import java.util.List;

import com.rabbit.model.PlanBusinessUi;

public interface PlanBusinessUiMapper {
    int deleteByPrimaryKey(Long id);

    int insertSelective(PlanBusinessUi record);

    PlanBusinessUi selectByPrimaryKey(Long id);

    int updateByPrimaryKey(PlanBusinessUi record);

    int insertList(@Param("list")List<PlanBusinessUi> list);

    int deleteByJobId(@Param("jobId")Long jobId);
}