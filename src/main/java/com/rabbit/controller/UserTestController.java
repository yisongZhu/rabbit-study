package com.rabbit.controller;

import com.rabbit.model.ResponseInfo;
import com.rabbit.model.UserTest;
import com.rabbit.service.UserTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/userTest")
public class UserTestController {
    @Autowired
    private UserTestService userService;
    @GetMapping(value = "/delete/{id}")
    public void delete(@PathVariable("id") int id) {
        userService.delete(id);
    }

    @PostMapping(value = "/insert")
    @PreAuthorize("hasAuthority('sys:user:password')")
    public String insert(UserTest user) {
        userService.insert(user);
        return "插入成功" + user.getUsername();
    }

    @PostMapping(value = "/update/{id}")
    public void update(@RequestParam UserTest user) {
        userService.update(user);
    }

    @GetMapping(value = "/select/{id}")
    public UserTest select(@PathVariable("id") int id) {
        return userService.selectById(id);
    }

    @GetMapping(value = "/selectAll/{pageNum}/{pageSize}")
    public ResponseInfo selectAll(@PathVariable("pageNum") int pageNum, @PathVariable("pageSize") int pageSize) {
//        new ResponseInfo(true,userService.selectAll(pageNum, pageSize));
        return new ResponseInfo(true, userService.selectAll(pageNum, pageSize));
    }
}
