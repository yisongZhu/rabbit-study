package com.rabbit.config;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.io.File;

@Component
@ConfigurationProperties(prefix = "rabbit")
public class RabbitConfig {

    /**
     * 系统文件根路径
     */
    public static String projectPath = System.getProperty("user.dir");
    /**
     * 文件映射路径
     */
    public static String profile;
    public static String jmeterfile;
    public static String appfile;


    public static String getAppfile() {
        return appfile;
    }

    public static void setAppfile(String appfile) {
        RabbitConfig.appfile =  projectPath + appfile + File.separator;
    }

    public String getJmeterfile() {
        return jmeterfile;
    }

    public void setJmeterfile(String jmeterfile) {
        this.jmeterfile =  projectPath + jmeterfile + File.separator;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = projectPath + profile + File.separator;
    }

}
