package com.rabbit.model;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

@Data
public class TApiEnv implements Serializable {
    /**
     * id
     */
    private Long id;

    /**
     * 环境名称
     */
    private String name;

    /**
     * 项目id
     */
    private Long projectId;

    private String prepend;

    private String domain;

    private String cookie;

    private String header;

    /**
     * 公共变量
     */
    private String global;

    /**
     * 类型 0接口自动化
     */
    private Integer type;

    /**
     * 缺省
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