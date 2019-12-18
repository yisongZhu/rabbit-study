package com.rabbit.model;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class TApi implements Serializable {
    /**
     * id
     */
    private Long id;

    /**
     * 接口名称
     */
    private String name;

    /**
     * 标签
     */
    private String labels;

    /**
     * 项目id
     */
    private Long projectId;

    /**
     * 接口分类id
     */
    private Long apiSuiteId;

    /**
     * 请求类型
     */
    private String method;

    /**
     * 请求ip或者域名
     */
    private String host;

    /**
     * 请求路径
     */
    private String path;

    /**
     * 类型 0公共接口  业务流接口
     */
    private Integer type;

    /**
     * 状态 0未完成 1已完成
     */
    private Integer status;

    /**
     * createBy
     */
    private String createBy;

    /**
     * createTime
     */
    private Date createTime;

    /**
     * updateBy
     */
    private String updateBy;

    /**
     * updateTime
     */
    private Date updateTime;

    private static final long serialVersionUID = 1L;
}