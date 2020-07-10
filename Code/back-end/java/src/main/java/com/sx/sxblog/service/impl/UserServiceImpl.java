package com.sx.sxblog.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.sx.sxblog.entity.User;
import com.sx.sxblog.mapper.UserMapper;
import com.sx.sxblog.service.IUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lgx
 * @since 2020-07-08
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {
    @Resource
    private UserMapper userMapper;

    @Override
    public User getUserByUserId(String user_name) {
        return userMapper.selectById(user_name);
    }

    @Override
    public User getUserByUserIdAndPassword(String user_name, String password) {
        return userMapper.selectOne(new QueryWrapper<User>()
                .eq("user_name",user_name)
                .eq("password",password)
        );
    }

    @Override
    public int insertUserInfo(User user) {
        return userMapper.insert(user);
    }

    @Override
    public int updateUserInfo(User user) {
        return userMapper.update(user, new QueryWrapper<User>()
                .eq("user_name",user.getUserName())
                .eq("password",user.getPassword())
        );
    }
}
