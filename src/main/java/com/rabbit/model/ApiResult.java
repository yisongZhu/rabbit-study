package com.rabbit.model;

import lombok.Data;

import java.io.Serializable;

@Data
public class ApiResult implements Serializable {
    private String reqMethod;
    private String reqUrl;
    private String reqHeaders;
    private String reqParams;
    private String reqFormParams;
    private String reqBodyType;
    private String reqBody;

    private int rspStatusCode;
    private String rspBody;
    private String rspBodyType;
    private int rspBodySize;
    private String rspExtracts;
    private String rspHeaders;
    private String rspAsserts;
    private Long rspTime;
    private String exception;
    private static final long serialVersionUID = 1L;
}