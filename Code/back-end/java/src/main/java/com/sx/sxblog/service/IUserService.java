package com.sx.sxblog.service;

import com.sx.sxblog.entity.Tag;
import com.sx.sxblog.entity.User;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lgx
 * @since 2020-07-08
 */
public interface IUserService extends IService<User> {
    //增加用户
    int insertUser(User user);

    //删除指定用户
    int deleteUser(int userid);

    //修改用户
    int updateUser(User User);

    //查询用户列表
    List<User> getUserList();

    //查询指定标签
    User getUserById(int userid);

    //查询特定用户名的用户
    User getUserByUsername(String username);

}
