package com.rabbit.controller;

import com.rabbit.model.ErrorInfo;
import com.rabbit.model.ResponseInfo;
import com.rabbit.utils.file.FileUploadUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

/**
 * 上传相关接口
 */
@Slf4j
@RestController
@RequestMapping("/file")
@Api(tags = "上传相关接口")
public class UploadControl {


    @PostMapping(value = "/uploadQusImages", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ApiOperation(value = "上传图片")
    public ResponseInfo uploadQusImages(@RequestParam("questionImages") MultipartFile[] questionImages) {
        if (questionImages != null && questionImages.length > 0) {
            try {
                MultipartFile multipartFile = questionImages[0];
                File file = FileUploadUtils.multipartFileToFile(multipartFile);
//                new ZipFile(file).extractAll("E:\\java_space\\vue\\rabbit-platform-server-new\\profile\\2019\\09\\19");
                file.delete();
//                FileUploadUtils.upload(multipartFile);
            } catch (Exception e) {
                e.printStackTrace();
                return new ResponseInfo(false, new ErrorInfo(650, e.getMessage()));
            }
            return new ResponseInfo(true, "上传了");
        } else {
            return new ResponseInfo(true, "不能传空");
        }
    }

}
