package com.sx.sxblog.service;

import com.sx.sxblog.entity.Blog;
import com.baomidou.mybatisplus.extension.service.IService;
import com.sx.sxblog.entity.Tag;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lgx
 * @since 2020-07-08
 */
public interface IBlogService extends IService<Blog> {
    //对博客进行增加【】
    int insertBlog(Blog blog);

    //对博客进行删除【】
    int deleteBlog(int blog_id);

    //对博客进行修改【】
    int updateBlog(Blog blog);

    //对博客列表进行查询显示【】
    List<Blog> getBlogList();

    List<Blog> getBlogByBlogName(Blog blog);

    //对指定博客进行查询【】
    Blog getBlogById(int blog_id);

    //查询一个用户的所有blog
    public List<Blog> getBlogListByUserid(int userid);

}
