package com.sx.sxblog.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sx.sxblog.common.SendMailUtil;
import com.sx.sxblog.common.UUIDUtil;
import com.sx.sxblog.entity.User;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.HashMap;
import java.util.Map;
import java.util.SimpleTimeZone;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserControllerTest {
    @Autowired
    private WebApplicationContext wac;
    private MockMvc mvc;
    private MockHttpSession session;

//    @Before
//    public void setupMock()
//    {
//        //mvc = MockMvcBuilders.webAppContextSetup(wac).build();
//        mvc = MockMvcBuilders.webAppContextSetup(wac).addFilter(((request, response, chain) -> {
//            response.setCharacterEncoding("UTF-8");
//            chain.doFilter(request, response);
//        })).build();
//        session = new MockHttpSession();
//        User user=new User();
//        user.setUserId(10005);
////        user.setUserName("lwl");
////        user.setPassword("123");
//        session.setAttribute("user",user); //拦截器那边会判断用户是否登录，所以这里注入一个用户
//    }

//    @Test
//    public void signIn() throws Exception
//    {
//        Map<String,String> map=new HashMap<>();
//
//        map.put("user_name","lwl");
//        map.put("password","123");
//
//        ObjectMapper mapper = new ObjectMapper();
//        String json = mapper.writeValueAsString(map);
//        System.out.println(json);
//        mvc.perform(MockMvcRequestBuilders.post("/signIn")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(json)
//                .session(session))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andDo(MockMvcResultHandlers.print());
//    }
//
//
//    @Test
//    public void signUp() throws Exception{
//        User user = new User();
//        user.setUserName("rl");
//        user.setPassword("13579");
//        user.setEmail("8888@");
//        user.setLevel(0);
//        user.setSex("男");
//        user.setBirthday(null);
//        user.setDescription("软件1803");
//        user.setCompany("csu");
//        ObjectMapper mapper = new ObjectMapper();
//        String json = mapper.writeValueAsString(user);
//        System.out.println(json);
//        mvc.perform(MockMvcRequestBuilders.post("/signUp")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(json)
//                .session(session))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andDo(MockMvcResultHandlers.print());
//    }
//
//    @Test
//    public void updateUserInfo() throws Exception{
//        User user = new User();
//        user.setUserId(10005);
//        user.setUserName("rl1");
//        user.setPassword("13579");
//        user.setEmail("88887777@.com");
//        user.setLevel(0);
//        user.setSex("男");
//        user.setBirthday(null);
//        user.setDescription("1803");
//        user.setCompany("csu");
//
//
//        ObjectMapper mapper = new ObjectMapper();
//        String json = mapper.writeValueAsString(user);
//        System.out.println(json);
//        mvc.perform(MockMvcRequestBuilders.post("/updateUserInfo")
//                .contentType(MediaType.APPLICATION_JSON)
//
//                .content(json)
//                .session(session))
//
//
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andDo(MockMvcResultHandlers.print());
//    }
//
//    @Test
//    public void getUserInfo() throws Exception
//    {
//        User user = new User();
//        user.setUserId(10005);
//        ObjectMapper mapper = new ObjectMapper();
//        String json = mapper.writeValueAsString(user);
//        mvc.perform(MockMvcRequestBuilders.get("/getUserInfo")
//                .contentType(MediaType.APPLICATION_JSON)
//                .accept(MediaType.APPLICATION_JSON)
//                .content(json)
//                .session(session))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andDo(MockMvcResultHandlers.print());
//    }



//    @Test
//    public void test()throws Exception{
//        SendMailUtil.sendEmail("1370865669@qq.com", "test", "test");
//    }
//    @Autowired
//    JavaMailSenderImpl mailSender;
//    private String emailServiceCode;
//
//    @Test
//    public void test(){
//        emailServiceCode = "1234";
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setSubject("注册验证码");
//        message.setText("注册验证码是：" + emailServiceCode);
//        message.setTo("203839501@qq.com");
//        message.setFrom("437205418@qq.com");
//        mailSender.send(message);
//    }


}
