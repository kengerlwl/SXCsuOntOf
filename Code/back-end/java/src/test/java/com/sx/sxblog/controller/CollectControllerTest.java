package com.sx.sxblog.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.entity.Collect;
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
public class CollectControllerTest {
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
    public void getCollectList() throws Exception
    {
        mvc.perform(MockMvcRequestBuilders.get("/getCollectList")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }


    @Test
    public void getCollectById() throws Exception
    {
        mvc.perform(MockMvcRequestBuilders.get("/getCollectById?collect_id=10001")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void insertCollect() throws Exception
    {
        Collect collect = new Collect();
        collect.setUserId(10000);
        collect.setBlogId(1000005);

        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(collect);
        System.out.println(json);

        mvc.perform(MockMvcRequestBuilders.post("/insertCollect")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void deleteCollect() throws Exception {
        Collect collect = new Collect();
        collect.setCollectId(10004);

        //将类对象中的值转换为json
        ObjectMapper mapper = new ObjectMapper();
        String json =mapper.writeValueAsString(collect);
        System.out.println(json);
        //修改url测试
        mvc.perform(MockMvcRequestBuilders.post("/deleteCollect")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }
}
