package com.rabbit.model;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

@Data
public class TTestCaseUiLog implements Serializable {
    /**
     * id
     */
    private Long id;

    /**
     * 计划id
     */
    private Long planId;

    private Long caseId;

    /**
     * 用例名称
     */
    private String caseName;

    /**
     * 业务流id
     */
    private Long businessId;

    /**
     * 测试业务日志id
     */
    private Long businessLogId;

    /**
     * 执行状态 0成功 1失败 2跳过
     */
    private Integer status;

    /**
     * 结束时间
     */
    private Date endTime;

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