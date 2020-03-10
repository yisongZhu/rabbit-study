package com.rabbit.utils;

import org.apache.commons.lang3.StringUtils;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MyStringUtils {
    /**
     * 根据正则提取参数
     *
     * @param target
     * @param regex
     * @param extractNo
     * @return
     */
    public static String extractValue(String target, String regex, Integer extractNo) {
        if (target == null || regex == "") {
            return null;
        }
        if (extractNo == null || extractNo < 1) {
            extractNo = 1;
        }
        String value = null;
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(target);
        int index = 0;
        while (matcher.find()) {
            if (index == extractNo - 1) {
                value = matcher.group(1);
            }
            index++;
        }
        return value;
    }

    public static String replaceKeyFromMap(String string, Map gVars, Map cVars) {
        return replaceGvFromMap(replaceFromMap(string, cVars), gVars);
    }

    public static String replaceKeyFromMap(String string, Map gVars, Map cVars, Map params) {
        return replaceGvFromMap(replaceFromMap(replaceParamsMap(string, params), cVars), gVars);
    }


    public static String replaceFromMap(String string, Map map) {
        if (string == null) {
            return "";
        }
        if (map == null) {
            return string;
        }
        string.replace("；；", ";;");
        Pattern regex = Pattern.compile("\\$\\{([^}]*)\\}");
        Matcher matcher = regex.matcher(string);
        while (matcher.find()) {
            String varKey = matcher.group(1);
            Object varValue = map.get(varKey) == null ? varKey : map.get(varKey).toString();
//            System.out.println(escapeExprSpecialWord(varKey));
            try {
                string = string.replaceAll("\\$\\{" + escapeExprSpecialWord(varKey) + "\\}", escapeExprSpecialWord(varValue.toString()));
            } catch (Exception e) {
                continue;
            }
        }
        return string;
    }

    public static String replaceGvFromMap(String string, Map map) {
        if (string == null) {
            return "";
        }
        if (map == null) {
            return string;
        }
        string.replace("；；", ";;");
        Pattern regex = Pattern.compile("\\@\\{([^}]*)\\}");
        Matcher matcher = regex.matcher(string);
        while (matcher.find()) {
            String varKey = matcher.group(1);
            Object varValue = map.get(varKey) == null ? varKey : map.get(varKey).toString();
//            System.out.println(escapeExprSpecialWord(varKey));
            try {
                string = string.replaceAll("\\@\\{" + escapeExprSpecialWord(varKey) + "\\}", escapeExprSpecialWord(varValue.toString()));
            } catch (Exception e) {
                continue;
            }
        }
        return string;
    }


    public static String escapeExprSpecialWord(String keyword) {
        if (StringUtils.isNotBlank(keyword)) {
            String[] fbsArr = {"\\", "$", "(", ")", "*", "+", ".", "[", "]", "?", "^", "{", "}", "|"};
            for (String key : fbsArr) {
                if (keyword.contains(key)) {
                    keyword = keyword.replace(key, "\\" + key);
                }
            }
        }
        return keyword;
    }

    /**
     * 将字符串中的#{key|default}替换成实际值
     *
     * @param string
     * @param map
     * @return
     */
    public static String replaceParamsMap(String string, Map map) {
        if (string == null) {
            return "";
        }
        if (map == null) {
            return string;
        }
        string.replace("；；", ";;");
        Pattern regex = Pattern.compile("#\\{([^}]*)\\}");
        Matcher matcher = regex.matcher(string);
        while (matcher.find()) {
            String varKey = matcher.group(1);
            int index = varKey.indexOf("|");
            String keyKey = "";
            String keyValue = "";
            if (index != -1) {
                keyKey = varKey.substring(0, index);
                keyValue = varKey.substring(index + 1);
            } else {
                keyKey = varKey;
                keyValue = "";
            }
            try {
                if (map.get(keyKey) == null) {
                    string = string.replaceAll("#\\{" + escapeExprSpecialWord(varKey) + "\\}", keyValue);
                } else {
                    string = string.replaceAll("#\\{" + escapeExprSpecialWord(varKey) + "\\}", escapeExprSpecialWord(map.get(keyKey).toString()));
                }
            } catch (Exception e) {
                continue;
            }
        }
        return string;
    }
}
