package com.rabbit.model;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

@Data
public class TTestPlanUiLog implements Serializable {
    /**
     * id
     */
    private Long id;

    /**
     * 任务名称
     */
    private String name;

    /**
     * jobid
     */
    private Long jobId;

    /**
     * 项目id
     */
    private Long projectId;

    /**
     * 状态 0未执行 1执行中 2执行完成 3任务超时中断 4连接客户端失败, 5执行失败
     */
    private Integer status;

    /**
     * 业务流总数
     */
    private Integer businessTotalCount;

    /**
     * 成功数
     */
    private Integer businessSuccCount;

    /**
     * 失败数
     */
    private Integer businessFailCount;

    /**
     * 未执行用例
     */
    private Integer businessSkipCount;

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