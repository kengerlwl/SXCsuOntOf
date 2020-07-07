package com.sx.sxblog.service.impl;

import com.sx.sxblog.entity.User;
import com.sx.sxblog.mapper.UserMapper;
import com.sx.sxblog.service.IUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

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

}
