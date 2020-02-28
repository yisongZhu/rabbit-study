package com.rabbit.model;

import com.rabbit.model.po.AssertResult;
import com.rabbit.model.po.BodyData;
import com.rabbit.model.po.ExtractResult;
import com.rabbit.model.po.Header;
import com.rabbit.model.po.Query;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import lombok.Data;

@Data
public class TApiResult implements Serializable {
    private Long id;

    /**
     * 用例结果id
     */
    private Integer caseResultId;

    /**
     * 步骤id
     */
    private Long stepId;

    /**
     * 步骤名称
     */
    private String stepName;

    /**
     * -1：异常失败，0：断言失败，1：成功,2:跳过
     */
    private Integer resultType;

    /**
     * 请求方式
     */
    private String reqMethod;

    /**
     * 请求类型
     */
    private String reqUrl;

    /**
     * 请求头
     */
    private List<Header> reqHeaders;

    /**
     * 请求query
     */
    private List<Query> reqQuery;

    /**
     * 请求body的类型
     */
    private String reqBodyType;

    /**
     * 请求body from-data格式
     */
    private List<BodyData> reqBodyData;

    /**
     * 请求body json格式
     */
    private String reqBodyJson;

    /**
     * 响应码
     */
    private Integer rspStatusCode;

    /**
     * 响应body类型
     */
    private String rspBodyType;

    /**
     * 响应体
     */
    private String rspBody;

    /**
     * 响应体长度
     */
    private Integer rspBodySize;

    /**
     * 响应的header
     */
    private List<Header> rspHeaders;

    /**
     * 响应的提取参数
     */
    private List<ExtractResult> rspExtracts;

    /**
     * 响应断言
     */
    private List<AssertResult> rspAsserts;

    /**
     * 响应时间（毫秒）
     */
    private Long rspTime;

    private String exception;

    private Date createTime;

    private static final long serialVersionUID = 1L;
}