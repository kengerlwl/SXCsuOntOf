package com.sx.sxblog.service;

import com.sx.sxblog.entity.User;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lgx
 * @since 2020-07-08
 */
public interface IUserService extends IService<User> {
    //通过账号用户名返回个人的全部信息
    User getUserByUserId(String user_name);
    //通过用户帐号名和密码获取个人的全部信息
    User getUserByUserIdAndPassword(String user_name, String password);

    //用户注册的时候对个人信息对填写
    int insertUserInfo(User user);

    //用户登录后对个人信息进行修改
    int updateUserInfo(User user);



}
