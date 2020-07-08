package com.sx.sxblog.service.impl;

import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.mapper.BlogMapper;
import com.sx.sxblog.service.IBlogService;
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
public class BlogServiceImpl extends ServiceImpl<BlogMapper, Blog> implements IBlogService {

}
