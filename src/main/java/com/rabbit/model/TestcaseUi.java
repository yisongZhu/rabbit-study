package com.rabbit.model;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

@Data
public class TestcaseUi implements Serializable {
    private Long id;

    private String name;

    private Long projectId;

    /**
     * 1: UI 2: APP 3:接口
     */
    private Long caseType;

    /**
     * 备注
     */
    private String remark;

    private String createBy;

    private String updateBy;

    private Date createTime;

    private Date updateTime;

    private static final long serialVersionUID = 1L;
}