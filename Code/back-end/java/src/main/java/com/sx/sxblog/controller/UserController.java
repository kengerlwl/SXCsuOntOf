package com.sx.sxblog.controller;

import com.alibaba.fastjson.JSONObject;
import com.sx.sxblog.common.ReturnEntity;
import com.sx.sxblog.entity.User;
import com.sx.sxblog.service.impl.UserServiceImpl;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author lgx
 * @since 2020-07-08
 */


@RestController
public class UserController {
    @Resource
    private UserServiceImpl userService;
    @Resource
    private HttpServletRequest request;

    @RequestMapping(value = "/signIn",method = RequestMethod.POST)
    @ResponseBody
    public ReturnEntity signIn(String user_name, String password)
    {
        JSONObject data = new JSONObject();
        Map<String, String> map =  new HashMap<String, String>();

        map.put("user_name", user_name);
        map.put("password", password);
        System.out.println(user_name);
        User result = userService.getUserByUserIdAndPassword(map.get("user_name"),map.get("password"));

        if (result != null)
        {
            HttpSession session = request.getSession();
            session.setAttribute("user",result);
            data.put("user",result);
            return ReturnEntity.successResult(data);
        }
        else {
            return ReturnEntity.failedResult("用户名或密码错误");
        }
    }

    @RequestMapping(value = "/signOut",method = RequestMethod.POST)
    @ResponseBody
    public ReturnEntity signOut()
    {
        JSONObject data = new JSONObject();
        HttpSession session = request.getSession();
        session.removeAttribute("user");
        data.put("user",null);
        return ReturnEntity.successResult(data);
    }

    //用户注册
    @RequestMapping(value = "/signUp",method = RequestMethod.POST)
    @ResponseBody
    public ReturnEntity signUp(@RequestBody User user)
    {
        JSONObject data = new JSONObject();
        User signon = userService.getUserByUserIdAndPassword(user.getUserName(),user.getPassword());

        if(signon != null)
        {
            return ReturnEntity.failedResult("用户名已存在");
        }
        else {
            userService.insertUserInfo(user);
            data.put("user",user.getUserName());
            return ReturnEntity.successResult(data);
        }
    }


    @RequestMapping(value = "/getUserByName",method = RequestMethod.POST)
    @ResponseBody
    public ReturnEntity getUserByName(String user_name){
        System.out.println(user_name);
        User result = userService.getUserByUserId(user_name);
        JSONObject data = new JSONObject();

        if (result != null)
        {
            HttpSession session = request.getSession();
            session.setAttribute("user",result);
            data.put("user",result);
            return ReturnEntity.successResult(data);
        }
        else {
            return ReturnEntity.failedResult("用户名或密码错误");
        }
    }

    @RequestMapping(value = "updateUserInfo",method = RequestMethod.POST)
    @ResponseBody
    public ReturnEntity updateUserInfo(@RequestBody User user)
    {
        JSONObject data = new JSONObject();
        HttpSession session = request.getSession();
        User userSession=(User) session.getAttribute("user");
        //是否登录判断
        if (userSession==null ){
            return ReturnEntity.failedResult("请登录后访问");
        }
        userService.updateUserInfo(user);
        session.setAttribute("user",user);
        data.put("user",user);

        return ReturnEntity.successResult(data);
    }


    @RequestMapping(value = "getUserInfo",method = RequestMethod.GET)
    @ResponseBody
    public ReturnEntity getUserInfo(@RequestBody User user)
    {
        JSONObject data = new JSONObject();

        HttpSession session = request.getSession();
        User userSession=(User) session.getAttribute("user");
        //是否登录判断
        if (userSession ==null ){
            return ReturnEntity.failedResult("请登录后访问");
        }
        User result = userService.getUserByUserId(user.getUserName());

        data.put("user",result);
        return ReturnEntity.successResult(data);
    }
}
