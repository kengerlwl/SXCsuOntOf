package com.sx.sxblog.common;

import com.sx.sxblog.entity.User;
import org.springframework.context.annotation.Bean;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class UserAndUUID {
    private Map<String, User> userMapSave = new HashMap<String, User>();
    public boolean addUser(String UUid,User user){
        userMapSave.put(UUid,user);
        return true;
    }

    public boolean delUser(String UUid){
        userMapSave.remove(UUid);
        return true;
    }

    public User getUser(String UUid){
        return userMapSave.get(UUid);
    }

    public boolean isContent(String UUid){
        if (userMapSave.containsKey(UUid)){
            return true;
        }
        else {
            return false;
        }
    }

}
