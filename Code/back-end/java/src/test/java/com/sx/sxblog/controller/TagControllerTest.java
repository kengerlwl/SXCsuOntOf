package com.sx.sxblog.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.entity.Tag;
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
public class TagControllerTest {
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
    public void getTagList() throws Exception
    {
        mvc.perform(MockMvcRequestBuilders.get("/getTagList")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void getTagById() throws Exception
    {
        mvc.perform(MockMvcRequestBuilders.get("/getTagById?tag_id=10000")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void insertTag() throws Exception
    {
        Tag tag = new Tag();
        tag.setBlogId(1000005);
        tag.setTagName("c#");

        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(tag);
        System.out.println(json);

        mvc.perform(MockMvcRequestBuilders.post("/insertTag")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void updateTag() throws Exception {
        Tag tag = new Tag();
        tag.setTagId(10004);
        tag.setBlogId(1000004);
        tag.setTagName("swift");
        //将类对象中的值转换为json
        ObjectMapper mapper = new ObjectMapper();
        String json =mapper.writeValueAsString(tag);
        System.out.println(json);
        //修改url测试
        mvc.perform(MockMvcRequestBuilders.post("/updateTag")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }


    @Test
    public void deleteTag() throws Exception {
        Tag tag = new Tag();
        tag.setTagId(10004);

        //将类对象中的值转换为json
        ObjectMapper mapper = new ObjectMapper();
        String json =mapper.writeValueAsString(tag);
        System.out.println(json);
        //修改url测试
        mvc.perform(MockMvcRequestBuilders.post("/deleteTag")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }



}
