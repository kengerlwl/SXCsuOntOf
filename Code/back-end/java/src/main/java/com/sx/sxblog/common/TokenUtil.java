package com.sx.sxblog.common;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.sx.sxblog.entity.User;
//import com.focuxin.model.User;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;


public class TokenUtil {
    private static final long EXPIRE_TIME = 7*24*60*60*1000;//设置过期时间（这里单位是毫秒）
    private static final String User_SECRET = "testtoken";//私钥token_secret


    public static String getUser(User User){
        //过期时间和加密算法设置
        Date date = new Date(System.currentTimeMillis()+EXPIRE_TIME);
        Algorithm algorithm = Algorithm.HMAC256(User_SECRET);//加密方式

        //头部信息
        Map<String,Object> header = new HashMap<>(2);
        header.put("typ","JWT");
        header.put("alg","HS256");
        return JWT.create()
                .withIssuer("SXBlog")
                .withClaim("userName",User.getUserName())
//                .withClaim("role",User.getRole())
                //最后一次登录时间有的话可以用
//                .withClaim("lastLogin",User.getLastLogin())
                .withExpiresAt(date)
                .sign(algorithm);
    }
    public User getUserData(String UserString){
        DecodedJWT jwt = JWT.decode(UserString);
        User user = new User();
        user.setUserName(jwt.getClaim("username").asString());
//        user.setRole(jwt.getClaim("role").asString());
//        user.setLastLogin(jwt.getClaim("lastLogin").asDate());
        return user;
    }
    public static String creatToken(String username){
        //这里传入的是token对象，决定token的内容
        User tk = new User();
        Date date = new Date();
        tk.setUserName(username);
//        tk.setRole(role);
//        tk.setLastLogin(date);
        //交给上面实现类得到token
        return getUser(tk);
    }
    public String getUserDataOpenId(String User){
        return JWT.decode(User).getClaim("openid").asString();
    }
    public static boolean verify(String token){
        //通过JWT的验证机制是否报错区分是否成
        try {
            JWTVerifier verifier = JWT.require(Algorithm.HMAC256(User_SECRET)).withIssuer("SXBlog").build();
            DecodedJWT jwt = verifier.verify(token);
            //通过日志代替这段
            System.out.println("认证通过：");
            System.out.println("username: " + jwt.getClaim("username").asString());
            System.out.println("过期时间：      " + jwt.getExpiresAt());
            return true;
        } catch (Exception e){
            return false;
        }
    }

}
