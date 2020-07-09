package com.sx.sxblog.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sx.sxblog.entity.Blog;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BlogControllerTest {
    // MockMVC 的固定写法，用于测试控制器
    @Autowired
    private WebApplicationContext wac;
    private MockMvc mvc;
    private MockHttpSession session;

    //起到一个初始化 MockMVC 的作用
    @Before
    public void setupMock()
    {
        mvc = MockMvcBuilders.webAppContextSetup(wac).addFilter(((request, response, chain) -> {
            response.setCharacterEncoding("UTF-8");
            chain.doFilter(request, response);
        })).build();
    }

    @Test
    public void insertBlog() throws Exception
    {
        Blog blog = new Blog();
        blog.setUserId(10000);
        blog.setBlogContent("this is a markdown");
        blog.setBlogViews(2345);
        blog.setBlogName("title3333333");

        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(blog);
        System.out.println(json);

        mvc.perform(MockMvcRequestBuilders.post("/insertBlog")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void getBlogList() throws Exception
    {
        mvc.perform(MockMvcRequestBuilders.get("/getBlogList")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void getBlogById() throws Exception
    {
//        Blog blog = new Blog();
        mvc.perform(MockMvcRequestBuilders.get("/getBlogById?blog_id=1000000")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void updateBlog() throws Exception {
        Blog blog=new Blog();
        blog.setBlogId(1000001);
        blog.setUserId(10002);
        blog.setBlogContent("this is a markdown2346");
        blog.setBlogName("title222");
        //将类对象中的值转换为json
        ObjectMapper mapper = new ObjectMapper();
        String json =mapper.writeValueAsString(blog);
        System.out.println(json);
        //修改url测试
        mvc.perform(MockMvcRequestBuilders.post("/updateBlog")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }


    @Test
    public void deleteBlog() throws Exception {
        Blog blog=new Blog();
        blog.setBlogId(1000007);

        //将类对象中的值转换为json
        ObjectMapper mapper = new ObjectMapper();
        String json =mapper.writeValueAsString(blog);
        System.out.println(json);
        //修改url测试
        mvc.perform(MockMvcRequestBuilders.post("/deleteBlog")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }
}
