package com.rabbit.service.Impl;

import com.github.pagehelper.PageHelper;
import com.rabbit.dao.UserTestMapper;
import com.rabbit.model.UserTest;
import com.rabbit.service.UserTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserTestServiceImpl implements UserTestService {
    @Autowired
    private UserTestMapper userMapper;

    /**
     * 删除 * * @param id
     */
    @Override
    public void delete(int id) {
        userMapper.deleteByPrimaryKey(id);
    }

    /**
     * 增加 * * @param user
     */
    @Override
    public void insert(UserTest user) {
        userMapper.insert(user);
    }

    /**
     * 更新 * * @param user
     */
    @Override
    public int update(UserTest user) {
        return userMapper.updateByPrimaryKey(user);
    }

    /**
     * 查询单个 * * @param id
     */
    @Override
    public UserTest selectById(int id) {
        return userMapper.selectByPrimaryKey(id);
    }

    /**
     * 查询全部列表,并做分页 * * @param pageNum 开始页数 * @param pageSize 每页显示的数据条数
     */
    @Override
    public List<UserTest> selectAll(int pageNum, int pageSize){
        //将参数传给这个方法就可以实现物理分页了，非常简单。
        PageHelper.startPage(pageNum,pageSize);
        return userMapper.selectAll();
    }
}
