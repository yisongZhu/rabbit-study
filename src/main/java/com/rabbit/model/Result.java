package com.rabbit.model;

import lombok.Data;

import java.io.Serializable;

@Data
public class Result implements Serializable {
    private static final long serialVersionUID = 1L;
    private Boolean flag;
    private String msg;
    private String logMsg;

    public Result(Boolean flag, String msg) {
        this.flag = flag;
        this.msg = msg;
    }

    public Result(Boolean flag, String msg, String logMsg) {
        this.flag = flag;
        this.msg = msg;
        this.logMsg = logMsg;
    }
}
