package com.sx.demo.sxblogTest;

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
public class BlogServiceTests {
    @Resource
    private BlogServiceImpl blogService;

    @Test
    public void getBlogList(){
        List<Blog> blogList = blogService.getBlogList();
        System.out.println(blogList);
    }





}
