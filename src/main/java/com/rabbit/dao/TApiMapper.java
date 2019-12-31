package com.rabbit.dao;

import com.rabbit.dto.ApiDto;
import com.rabbit.model.TApi;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface TApiMapper {
    int deleteByPrimaryKey(Long id);

    int insert(TApi record);

    int insertSelective(TApi record);

    TApi selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TApi record);

    int updateByPrimaryKey(TApi record);

    List<TApi> findByAll(TApi tApi);

    List<TApi> findByProjectId(@Param("projectId") Long projectId);

    List<TApi> findByNameAndProjectId(@Param("name") String name, @Param("projectId") Long projectId);

    List<TApi> findByNameAndProjectIdAndIdNot(@Param("name") String name, @Param("projectId") Long projectId, @Param("notId") Long notId);

    List<TApi> findByApiSuiteId(@Param("apiSuiteId") Long apiSuiteId);

    int deleteByApiSuiteId(@Param("apiSuiteId") Long apiSuiteId);

    @Select("SELECT t.*,te.prepend,te.domain,te.global FROM t_api t LEFT JOIN t_api_env te ON t.env_id = te.id AND t.id =  #{id}")
    ApiDto getDtoById(Long id);
}