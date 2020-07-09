package com.sx.sxblog.controller;


import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.*;

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
@RequestMapping("/sxblog/user")
public class UserController {
    @PostMapping("/signIn")
    @ResponseBody
    public JSONObject signIn(@RequestBody Map<String,Object> user){
        String username = (String) user.get("username");
        String password = (String) user.get("password");
        //数据库操作

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("token","test");

        //token

        return jsonObject;
    }

}
