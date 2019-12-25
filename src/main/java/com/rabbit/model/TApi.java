package com.rabbit.model;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

@Data
public class TApi implements Serializable {
    /**
     * id
     */
    private Long id;

    /**
     * 接口名称
     */
    private String name;

    /**
     * 标签
     */
    private String labels;

    /**
     * 项目id
     */
    private Long projectId;

    /**
     * 接口分类id
     */
    private Long apiSuiteId;

    /**
     * 请求类型
     */
    private String method;

    /**
     * 环境id
     */
    private Long envId;

    /**
     * 请求ip或者域名
     */
    private String host;

    /**
     * 请求路径
     */
    private String path;

    /**
     * 类型 0公共接口  业务流接口
     */
    private Integer type;

    /**
     * 备注
     */
    private String remark;

    /**
     * 状态 0未完成 1已完成
     */
    private Integer status;

    /**
     * 请求头
     */
    private String reqHeader;

    /**
     * 请求query
     */
    private String reqQuery;

    /**
     * 请求body from-data格式
     */
    private String reqBodyData;

    /**
     * 请求body json格式
     */
    private String reqBodyJson;

    /**
     * 请求body的类型
     */
    private String reqBodyType;

    /**
     * 请求提取参数
     */
    private String reqExtract;

    /**
     * 请求断言
     */
    private String reqAssert;

    /**
     * 调试响应对象
     */
    private String debugRsp;

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