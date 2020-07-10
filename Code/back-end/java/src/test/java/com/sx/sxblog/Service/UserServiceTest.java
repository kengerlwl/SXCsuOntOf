package com.sx.sxblog.Service;

import com.sx.sxblog.entity.User;
import com.sx.sxblog.service.impl.UserServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTest {
    @Resource
    private UserServiceImpl userService;

    @Test
    public void getUserByUserId(){
        System.out.println(userService.getUserByUserId("lgx"));
    }

    @Test
    public void getUserByUserIdAndPassword(){
        User user = userService.getUserByUserIdAndPassword("lgx","123");
        System.out.println(user);
    }

    @Test
    public void insertUser(){
        User user = new User();
        user.setUserName("lzh");
        user.setPassword("123456");
        user.setEmail("135@qq.com");
        user.setSex(null);
        user.setBirthday(null);
        user.setDescription(null);
        user.setCompany(null);

        Integer result = userService.insertUserInfo(user);
        System.out.println(result);
    }

    @Test
    public void updateUser(){
        User user = new User();
        user.setUserId(10003);
        user.setUserName("lzh");
        user.setPassword("123456");
        user.setEmail("135777@qq.com");
        user.setSex("男");
        user.setBirthday(null);
        user.setDescription(null);
        user.setCompany("中南大学");

        Integer result = userService.updateUserInfo(user);
        System.out.println(result);
    }



}
