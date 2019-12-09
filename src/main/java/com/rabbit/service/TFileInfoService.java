package com.rabbit.service;

import com.rabbit.model.TFileInfo;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface TFileInfoService {


    int deleteByPrimaryKey(Long id);

    TFileInfo selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TFileInfo record);

    int updateByPrimaryKey(TFileInfo record);

    TFileInfo save(MultipartFile file,TFileInfo tFileInfo) throws IOException;

    int insert(TFileInfo record);
}


