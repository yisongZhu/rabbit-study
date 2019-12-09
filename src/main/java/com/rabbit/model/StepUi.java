package com.rabbit.model;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

@Data
public class StepUi implements Serializable {
    private Long id;

    private Long testcaseId;

    /**
     * 描述
     */
    private String name;

    /**
     * 关键字分类
     */
    private String actionType;

    /**
     * 关键字
     */
    private String action;

    /**
     * 关键字描述
     */
    private String actionRemark;

    private Long pageId;

    private Long elementId;

    /**
     * 元素
     */
    private String path;

    private String optionData;

    /**
     * 1: UI 2: APP 3:接口
     */
    private Integer type;

    private String createBy;

    private Date createTime;

    private String updateBy;

    private Date updateTime;

    private Long sort;

    private static final long serialVersionUID = 1L;
}