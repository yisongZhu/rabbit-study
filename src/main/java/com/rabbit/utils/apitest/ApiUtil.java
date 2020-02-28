package com.rabbit.utils.apitest;

import com.rabbit.model.po.Assert;

public class ApiUtil {
    public static String getObjRealType(Object object) {
        if (object == null) {
            return "null";
        } else {
            if (object instanceof Boolean) {
                return "boolean";
            } else if (object instanceof Byte || object instanceof Short || object instanceof Integer
                    || object instanceof Long || object instanceof Float || object instanceof Double) {
                return "number";
            } else {
                return "string";
            }
        }
    }

    public static boolean getAssertionResult(Assert assertion, String realType, String realValue) {
        if (!assertion.getExtractType().equals(realType)) {
            return false;
        }
        switch (assertion.getExpectRelation()) {
            case "等于":
                if (assertion.getExpectValue().equals(realValue)) {
                    return true;
                }
                break;
            case "大于":
                if (realType.equals("number")) {
                    Double aDouble = Double.valueOf(assertion.getExpectValue());
                    Double aDouble1 = Double.valueOf(realValue);
                    if (aDouble > aDouble1) {
                        return true;
                    }
                }
                break;
            case "大于等于":
                if (realType.equals("number")) {
                    Double aDouble = Double.valueOf(assertion.getExpectValue());
                    Double aDouble1 = Double.valueOf(realValue);
                    if (aDouble >= aDouble1) {
                        return true;
                    }
                }
                break;
            case "小于":
                if (realType.equals("number")) {
                    Double aDouble = Double.valueOf(assertion.getExpectValue());
                    Double aDouble1 = Double.valueOf(realValue);
                    if (aDouble < aDouble1) {
                        return true;
                    }
                }
                break;
            case "小于等于":
                if (realType.equals("number")) {
                    Double aDouble = Double.valueOf(assertion.getExpectValue());
                    Double aDouble1 = Double.valueOf(realValue);
                    if (aDouble <= aDouble1) {
                        return true;
                    }
                }
                break;
            case "包含":
                if (assertion.getExpectValue().contains(realValue)) {
                    return true;
                }
                break;
            case "不包含":
                if (!assertion.getExpectValue().contains(realValue)) {
                    return true;
                }
                break;
            case "长度等于":
                if (assertion.getExpectValue().length() == realValue.length()) {
                    return true;
                }
                break;
            case "长度大于":
                if (assertion.getExpectValue().length() > realValue.length()) {
                    return true;
                }
                break;
            case "长度大于等于":
                if (assertion.getExpectValue().length() >= realValue.length()) {
                    return true;
                }
                break;
            case "长度小于":
                if (assertion.getExpectValue().length() < realValue.length()) {
                    return true;
                }
                break;
            case "长度小等于":
                if (assertion.getExpectValue().length() <= realValue.length()) {
                    return true;
                }
                break;
            case "开始于":
                if (assertion.getExpectValue().startsWith(realValue)) {
                    return true;
                }
                break;
            case "结束于":
                if (assertion.getExpectValue().endsWith(realValue)) {
                    return true;
                }
                break;
            default:
        }
        return false;
    }

}