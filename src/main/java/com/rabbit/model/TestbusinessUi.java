package com.rabbit.model;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

@Data
public class TestbusinessUi implements Serializable {
    private Long id;

    private String name;

    private Long projectId;

    /**
     * 执行完毕后是否关闭浏览器:1、关闭 0、不关闭
     */
    private Long closeBrowser;

    /**
     * 超时时间，单位秒
     */
    private Long timoutTime;

    /**
     * 失败了是否继续0：不继续，1：继续
     */
    private Integer failContinue;

    private String remark;

    private String createBy;

    private String updateBy;

    private Date createTime;

    private Date updateTime;

    private static final long serialVersionUID = 1L;
}