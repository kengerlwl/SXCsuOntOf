package com.sx.sxblog.Service;

import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.service.impl.BlogServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BlogServiceTest {
    @Resource
    private BlogServiceImpl blogService;

    @Test
    public void getBlogsList(){
        List<Blog> blogList = blogService.getBlogList();
        System.out.println(blogList);
    }

    @Test
    public void getBlogById()
    {
        Blog blog = blogService.getBlogById(1000000);
        System.out.println(blog);
    }

    @Test
    public void insertBlog()
    {
        Blog blog=new Blog();
        blog.setUserId(10000);
        blog.setBlogContent("this is a markdown");
        blog.setBlogViews(2345);
        blog.setBlogName("title");

        Integer result = blogService.insertBlog(blog);
        System.out.println(result);
    }

    @Test
    public void deleteBlog(){
        int result = blogService.deleteBlog(1000002);
        System.out.println(result);
    }

    @Test
    public void updateBlog()
    {
        Blog blog=new Blog();
        blog.setBlogId(1000001);
        blog.setUserId(10002);
        blog.setBlogContent("this is a markdown2333");
        blog.setBlogName("title222");

        Integer result = blogService.updateBlog(blog);
        System.out.println(result);
    }


}
