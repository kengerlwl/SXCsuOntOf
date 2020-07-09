package com.sx.sxblog.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.entity.Comment;
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
public class CommentControllerTest {
    // MockMVC 的固定写法，用于测试控制器
    @Autowired
    private WebApplicationContext wac;
    private MockMvc mvc;
    private MockHttpSession session;

    @Before
    public void setupMock()
    {
        mvc = MockMvcBuilders.webAppContextSetup(wac).addFilter(((request, response, chain) -> {
            response.setCharacterEncoding("UTF-8");
            chain.doFilter(request, response);
        })).build();
    }

    @Test
    public void getCommentList() throws Exception
    {
        mvc.perform(MockMvcRequestBuilders.get("/getCommentList")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }


    @Test
    public void insertComment() throws Exception
    {
        Comment comment = new Comment();
        comment.setBlogId(1000005);
        comment.setUserId(10001);
        comment.setCommentWord("对，这就是一篇博客");

        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(comment);
        System.out.println(json);

        mvc.perform(MockMvcRequestBuilders.post("/insertComment")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }


    @Test
    public void deleteComment() throws Exception {
        Comment comment = new Comment();

        comment.setCommentId(10004);

        //将类对象中的值转换为json
        ObjectMapper mapper = new ObjectMapper();
        String json =mapper.writeValueAsString(comment);
        System.out.println(json);
        //修改url测试
        mvc.perform(MockMvcRequestBuilders.post("/deleteComment")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }





}
