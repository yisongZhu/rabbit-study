package com.rabbit.model;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

@Data
public class TTestBusinessUiLog implements Serializable {
    /**
     * id
     */
    private Long id;

    private Long businessId;

    /**
     * 业务名称
     */
    private String businessName;

    /**
     * 计划id
     */
    private Long planId;

    /**
     * 项目id
     */
    private Long projectId;

    /**
     * 执行状态 0成功 1失败 2跳过
     */
    private Integer status;

    /**
     * 用例总数
     */
    private Integer caseTotalCount;

    /**
     * 成功数
     */
    private Integer caseSuccCount;

    /**
     * 失败数
     */
    private Integer caseFailCount;

    /**
     * 未执行用例
     */
    private Integer caseSkipCount;

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