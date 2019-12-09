package com.rabbit.service;

import com.rabbit.model.UserTest;

import java.util.List;

public interface UserTestService {
    /**
     * 删除
     */
    public void delete(int id);

    /**
     * 增加
     */
    public void insert(UserTest user);

    /**
     * 更新
     */
    public int update(UserTest user);

    /**
     * 查询单个
     */
    public UserTest selectById(int id);

    /**
     * 查询全部列表
     */
    public List<UserTest> selectAll(int pageNum, int pageSize);
}
