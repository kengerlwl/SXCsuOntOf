package com.sx.sxblog.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.entity.Collect;
import com.sx.sxblog.entity.Tag;
import com.sx.sxblog.mapper.BlogMapper;
import com.sx.sxblog.mapper.TagMapper;
import com.sx.sxblog.service.IBlogService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
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
public class BlogServiceImpl extends ServiceImpl<BlogMapper, Blog> implements IBlogService {
    @Resource
    private BlogMapper blogMapper;

    @Override
    public int insertBlog(Blog blog) {
        return blogMapper.insert(blog);
    }

    @Override
    public int deleteBlog(int blog_id) {
        return blogMapper.deleteById(blog_id);
    }

    @Override
    public int updateBlog(Blog blog) {
        return blogMapper.update(blog, new QueryWrapper<Blog>()
        .eq("blog_Id",blog.getBlogId())
        );
    }

    @Override
    public List<Blog> getBlogList() {
        return blogMapper.selectList(null);
    }

    @Override
    public Blog getBlogById(int blog_id) {
        return blogMapper.selectById(blog_id);
    }

    @Override
    public List<Blog> getBlogListByUserid(int userid){
        QueryWrapper<Blog> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id",userid);
        List<Blog> blogs = blogMapper.selectList(queryWrapper);
        return blogs;
    }




}
