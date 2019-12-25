package com.rabbit.model;

import lombok.Data;

import java.io.Serializable;

@Data
public class ApiResponse implements Serializable {
    private int statusCode;
    private String body;
    private String bodyType;
    private int bodySize;
    private String exception;
    private String extracts;
    private String headers;
    private String assertions;
    private Long responseTime;
    private static final long serialVersionUID = 1L;
}