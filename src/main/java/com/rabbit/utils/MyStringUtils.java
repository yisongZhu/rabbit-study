package com.rabbit.utils;

import org.apache.commons.lang3.StringUtils;

import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MyStringUtils {
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
                string = string.replaceAll("\\$\\{" + escapeExprSpecialWord(varKey) + "\\}", varValue.toString());
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
                string = string.replaceAll("\\@\\{" + escapeExprSpecialWord(varKey) + "\\}", varValue.toString());
            } catch (Exception e) {
                continue;
            }
        }
        return string;
    }

    public static String replaceKeyFromMap(String string, Map gVars, Map cVars) {
        return replaceGvFromMap(replaceFromMap(string, cVars), gVars);
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

}
