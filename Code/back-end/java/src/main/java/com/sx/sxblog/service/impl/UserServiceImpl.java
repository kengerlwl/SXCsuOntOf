package com.sx.sxblog.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

import com.sx.sxblog.entity.Tag;

import com.sx.sxblog.entity.User;
import com.sx.sxblog.mapper.TagMapper;
import com.sx.sxblog.mapper.UserMapper;
import com.sx.sxblog.service.IUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
//import org.graalvm.compiler.lir.LIRInstruction;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;


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
    public int insertUser(User user) {
        return userMapper.insert(user);
    }

    @Override
    public int deleteUser(int user_id) {
        return userMapper.deleteById(user_id);
    }

    @Override
    public int updateUser(User user) {
        return userMapper.update(user, new QueryWrapper<User>()
                .eq("user_Id",user.getUserId()));
    }

    @Override
    public List<User> getUserList() {
        return userMapper.selectList(null);
    }

    @Override
    public User getUserById(int user_id) {
        return userMapper.selectById(user_id);
    }

    @Override
    public User getUserByUsername(String username){

        User user;
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_name",username);
        user = userMapper.selectOne(queryWrapper);

        return user;

    }
}
