package com.rabbit.service;

import com.rabbit.model.TApiResult;
import com.rabbit.model.TApi;

import java.util.Map;

public interface RequestExecutorServer {
    TApiResult executeHttpRequest(TApi tApi, Map<String, Object> gVars, Map<String, Object> caseVars ,Map<String, Object> apiParams);
}






