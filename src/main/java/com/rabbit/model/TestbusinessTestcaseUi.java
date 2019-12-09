package com.rabbit.model;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

@Data
public class TestbusinessTestcaseUi implements Serializable {
    private Long id;

    private Long businessId;

    private Long caseId;

    private Integer sort;

    private String createBy;

    private String updateBy;

    private Date createTime;

    private Date updateTime;

    private static final long serialVersionUID = 1L;
}