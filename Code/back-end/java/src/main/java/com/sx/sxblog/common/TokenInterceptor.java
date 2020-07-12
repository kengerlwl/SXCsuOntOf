package com.sx.sxblog.common;
import com.alibaba.fastjson.JSONObject;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class TokenInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,Object handler)throws Exception{
        if(request.getMethod().equals("OPTIONS")){
            response.setStatus(HttpServletResponse.SC_OK);
            return true;
        }
        response.setCharacterEncoding("utf-8");
        String token = request.getHeader("token");

        //token内有内容
        if(token != null){
            boolean result = TokenUtil.verify(token);
            //验证通过,否则进入下面拒绝流程
            if(result){
                //后面调整为日志
                System.out.println("通过拦截器");
                //通过拦截器
                return true;
            }
        }

        //拒绝流程
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json; charset=utf-8");
        try{
            JSONObject json = new JSONObject();
            //这里要商量用户未登录的code
            json.put("msg","token verify fail");
            json.put("code","500000");
            response.getWriter().append(json.toJSONString());
            //后面调整为日志
            System.out.println("认证失败，未通过拦截器");
        }catch (Exception e){
            e.printStackTrace();
            response.sendError(500);//服务器问题
            return false;
        }
        return false;
    }
}
