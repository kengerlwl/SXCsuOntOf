package com.sx.sxblog.common;

import com.alibaba.fastjson.JSONObject;
import com.sx.sxblog.entity.User;
import com.sx.sxblog.service.impl.UserServiceImpl;

import java.util.regex.Pattern;

public class UserUtil {
    public static int switchToint(String string){
        int id = Integer.valueOf(string);
        return id;
    }
    public static JSONObject putUserInJson(User user){
        JSONObject data = new JSONObject();
        data.put("username",user.getUserName());
        data.put("birthday",user.getBirthday());
        data.put("company",user.getCompany());
        data.put("description",user.getDescription());
        data.put("email",user.getEmail());
        data.put("sex",user.getEmail());

        return data;
    }

    public static boolean isId(String username){
        boolean isNum = false;
        Pattern pattern = Pattern.compile("[0-9]*");
        isNum = pattern.matcher(username).matches();
        return isNum;
    }

    public static int getUserIdFormName(String username){
        int userid;
        UserServiceImpl userService = new UserServiceImpl();
        User user = userService.getUserByUsername(username);
        userid = user.getUserId();
        return userid;
    }

    public static String getUserNameFromUserID(int userid){
        String username;
        UserServiceImpl userService = new UserServiceImpl();
        username = userService.getUserById(userid).getUserName();
        return username;
    }
}
