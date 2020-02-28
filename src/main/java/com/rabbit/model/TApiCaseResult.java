package com.rabbit.model;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

@Data
public class TApiCaseResult implements Serializable {
    private Long id;

    /**
    * createTime
    */
    private Date createTime;

    /**
    * 用例集id
    */
    private Long suiteResultId;

    /**
    * 用例id
    */
    private Long caseId;

    /**
    * 用例名称
    */
    private String caseName;

    /**
    * 执行状态 0成功 1失败 2跳过
    */
    private Integer status;

    private Integer total;

    private Integer success;

    private Integer failed;

    private Integer skipped;

    /**
    * 结束时间
    */
    private Date endTime;

    /**
    * 备注
    */
    private String remark;

    private static final long serialVersionUID = 1L;
}