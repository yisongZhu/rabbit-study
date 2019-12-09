package com.rabbit.service.Impl;

import com.rabbit.config.RabbitConfig;
import com.rabbit.utils.UserUtil;
import com.rabbit.utils.file.FileUploadUtils;
import com.rabbit.utils.file.FileUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import com.rabbit.dao.TFileInfoMapper;
import com.rabbit.model.TFileInfo;
import com.rabbit.service.TFileInfoService;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;

@Service
public class TFileInfoServiceImpl implements TFileInfoService {

    @Resource
    private TFileInfoMapper tFileInfoMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return tFileInfoMapper.deleteByPrimaryKey(id);
    }


    @Override
    public TFileInfo selectByPrimaryKey(Long id) {
        return tFileInfoMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(TFileInfo record) {
        return tFileInfoMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TFileInfo record) {
        return tFileInfoMapper.updateByPrimaryKey(record);
    }

    @Override
    public TFileInfo save(MultipartFile file,TFileInfo tFileInfo) throws IOException {
        String fileOrigName = file.getOriginalFilename();
        if (!fileOrigName.contains(".")) {
            throw new IllegalArgumentException("缺少后缀名");
        }

        String md5 = FileUtils.fileMd5(file.getInputStream());
        TFileInfo fileInfo = tFileInfoMapper.selectByPrimaryKey(tFileInfo.getId());
        fileInfo.setUpdateBy(UserUtil.getLoginUser().getUsername());
        if (fileInfo != null) {
            fileInfo.setUpdateTime(new Date());
            tFileInfoMapper.updateByPrimaryKeySelective(fileInfo);
            return fileInfo;
        }

        fileOrigName = fileOrigName.substring(fileOrigName.lastIndexOf("."));
        String pathname = FileUtils.getPath() + md5 + fileOrigName;
        String fullPath = RabbitConfig.profile + pathname;
        FileUploadUtils.upload(fullPath, file);

        long size = file.getSize();
        String contentType = file.getContentType();

        fileInfo = new TFileInfo();
        fileInfo.setMd5(md5);
        fileInfo.setContentType(contentType);
        fileInfo.setSize(size);
        fileInfo.setPath(fullPath);
        fileInfo.setUrl(pathname);
        fileInfo.setType(contentType.startsWith("image/") ? 1 : 0);

        tFileInfoMapper.insert(fileInfo);

        return fileInfo;

    }

    @Override
    public int insert(TFileInfo record) {
        return tFileInfoMapper.insert(record);
    }
}


