package com.rabbit.model;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

@Data
public class GlobalParam implements Serializable {
    /**
     * id
     */
    private Long id;

    /**
     * 参数名称
     */
    private String paramName;

    private Long projectId;

    /**
     * 参数类型：1、字符串 2、数值 3、数据库 4、布尔 5、函数
     */
    private Integer paramType;

    /**
     * 参数值
     */
    private String paramValue;

    /**
     * 备注
     */
    private String remark;

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