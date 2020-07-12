package com.sx.sxblog.controller;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sx.sxblog.common.ReturnEntity;
import com.sx.sxblog.common.TokenUtil;
import com.sx.sxblog.entity.User;
import com.sx.sxblog.service.impl.BlogServiceImpl;
import com.sx.sxblog.service.impl.UserServiceImpl;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author lgx
 * @since 2020-07-08
 */


@RestController
@RequestMapping("/user")
public class UserController {
    @Resource
    private UserServiceImpl userService;

    @PostMapping("/signIn")
    @ResponseBody
    public ReturnEntity signIn(@RequestBody Map<String,Object> user_info){
        System.out.println("test1");
        String username = (String) user_info.get("username");
        String password = (String) user_info.get("password");
        User user;

        boolean isNum;
        boolean isId = true;
        boolean isusername = false;
        boolean ac = false;
        String msg = "";

        //正则判断是否数字
        Pattern pattern = Pattern.compile("[0-9]*");
        isNum = pattern.matcher(username).matches();

        //数据库操作
        try{
            if(isNum){
                int userId = Integer.valueOf(username);
                user = userService.getUserById(userId);
                if(user!=null && user.getPassword().equals(password)){
                    isId = true;
                    ac = true;
                }
            }else {
                if (isId){
                    isusername = false;
                }
                else {
                    user = userService.getUserByUsername(username);
                    if (user!=null && user.getPassword().equals(password)){
                        isusername = true;
                        ac = true;
                    }
                }
            }
            if(!ac){
                msg = "Wrong username or passwd";

            }
        }catch (Exception ex){
            //日志输出错误
            System.out.println("dberro");
        }

        //token相关
        String token= TokenUtil.creatToken(username);

        JSONObject data = new JSONObject();
        data.put("token",token);
        ReturnEntity returnEntity = new ReturnEntity(true,msg,data);

        return returnEntity;
    }

    @PostMapping("/signUp")
    @ResponseBody
    public ReturnEntity signUp(@RequestBody Map<String,Object> user_info){
        String msg = "Sign Up Success";
        int code = 200;
        boolean status = true;

        User user = new User();
        String username = (String) user_info.get("username");
        String passwd = (String) user_info.get("passwd");
        String birthday = (String) user_info.get("birthday");
        String company = (String) user_info.get("company");
        String description = (String) user_info.get("description");
        String email = (String) user_info.get("email") ;
        String sex = (String) user_info.get("sex");

        user.setUserName(username);
        user.setPassword(passwd);
        user.setBirthday(birthday);
        user.setCompany(company);
        user.setDescription(description);
        user.setEmail(email);
        user.setLevel(0);
        user.setSex(sex);
        try {
            userService.insertUser(user);
        }catch (Exception ex){
            //日志记录错误
            msg = "service worong";
            status = false;
            code = 500;
        }

        int id = userService.getUserByUsername(username).getUserId();
        JSONObject data = new JSONObject();
        data.put("id",id);
        ReturnEntity returnEntity = new ReturnEntity(status,msg,data);
        return returnEntity;
    }

    @PostMapping("/username_verify")
    @ResponseBody
    public ReturnEntity userNameVerify(@RequestBody Map<String,Object> userVer){
        String username = (String) userVer.get("username");
        boolean notExits = true;
        User user;

        //return info
        String msg = "";
        boolean status  = false;

        boolean isNum;
        //正则判断是否数字
        Pattern pattern = Pattern.compile("[0-9]*");
        isNum = pattern.matcher(username).matches();

        try {
            if (isNum) {
                int Id = Integer.valueOf(username);
                user = userService.getUserById(Id);
                if (user == null) {
                    notExits = true;
                } else {
                    notExits = false;
                }
            } else {
                user = userService.getUserByUsername(username);
                if (user == null) {
                    notExits = true;
                } else {
                    notExits = false;
                }
            }
        }catch (Exception exception){
            msg = "Servic worng";
            status = false;
        }
        if(notExits){
            msg = "Check username success";
            status = true;
        }
        else {
            msg = "failed";
            status = true;
        }

        JSONObject data  = new JSONObject();
        data.put("check_not_exits",notExits);

        ReturnEntity returnEntity = new ReturnEntity(status,msg,data);
        return returnEntity;
    }

}


