package com.rabbit.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import com.rabbit.dao.PageElementMapper;
import com.rabbit.model.PageElement;
import com.rabbit.service.PageElementService;

import java.util.List;

@Service
public class PageElementServiceImpl implements PageElementService {

    @Resource
    private PageElementMapper pageElementMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return pageElementMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insertSelective(PageElement record) {
        return pageElementMapper.insertSelective(record);
    }

    @Override
    public PageElement selectByPrimaryKey(Long id) {
        return pageElementMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(PageElement record) {
        return pageElementMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(PageElement record) {
        return pageElementMapper.updateByPrimaryKey(record);
    }

    @Override
    public PageInfo<PageElement> findByAllwithPage(int page, int pageSize, PageElement pageElement) {
        PageHelper.startPage(page, pageSize);
        return new PageInfo<>(pageElementMapper.findByAll(pageElement));
    }

    @Override
    public List<PageElement> findByPageIdAndElementName(Long pageId, String elementName) {
        return pageElementMapper.findByPageIdAndElementName(pageId, elementName);
    }

    @Override
    public List<PageElement> findByPageIdAndElementNameAndIdNot(Long pageId, String elementName, Long notId) {
        return pageElementMapper.findByPageIdAndElementNameAndIdNot(pageId, elementName, notId);
    }

    @Override
    public List<PageElement> findByProjectId(Long projectId) {
        return pageElementMapper.findByProjectId(projectId);
    }
}




