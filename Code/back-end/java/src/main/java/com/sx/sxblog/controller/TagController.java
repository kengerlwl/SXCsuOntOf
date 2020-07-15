package com.sx.sxblog.controller;


import com.alibaba.fastjson.JSONObject;
import com.sx.sxblog.common.ReturnEntity;
import com.sx.sxblog.common.UserUtil;
import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.entity.Tag;
import com.sx.sxblog.service.impl.BlogServiceImpl;
import com.sx.sxblog.service.impl.TagServiceImpl;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author lgx
 * @since 2020-07-08
 */
@RestController
public class TagController {
    @Resource
    private TagServiceImpl tagService;

    @Resource
    private BlogServiceImpl blogService;

    @RequestMapping(value = "/getTagList",method = RequestMethod.GET)
    @ResponseBody
    public ReturnEntity getTagList(){
        JSONObject data = new JSONObject();
        List<Tag> tagList = tagService.getTagList();
        data.put("tagList",tagList);
        return ReturnEntity.successResult(data);
    }

    @RequestMapping(value = "/getTagById",method = RequestMethod.GET)
    @ResponseBody
    public ReturnEntity getTagById(int tag_id){
        JSONObject data = new JSONObject();
        Tag tag = tagService.getTagById(tag_id);
        data.put("tag_id",tag);
        return ReturnEntity.successResult(data);
    }

    @RequestMapping(value = "/insertTag",method = RequestMethod.POST)
    @ResponseBody
    public ReturnEntity insertTag(@RequestBody Tag tag){
        JSONObject data = new JSONObject();
        int result = tagService.insertTag(tag);
        data.put("result",result);
        System.out.println(data);
        return ReturnEntity.successResult(data);
    }

    @RequestMapping(value = "/deleteTag",method = RequestMethod.POST)
    @ResponseBody
    public ReturnEntity deleteTag(@RequestBody Tag tag){
        JSONObject data = new JSONObject();
        int result = tagService.deleteTag(tag.getTagId());
        data.put("result",result);
        return ReturnEntity.successResult(data);
    }

    @RequestMapping(value = "/updateTag",method = RequestMethod.POST)
    @ResponseBody
    public ReturnEntity updateTag(@RequestBody Tag tag){
        JSONObject data = new JSONObject();
        int result = tagService.updateTag(tag);
        data.put("result",result);
        return ReturnEntity.successResult(data);
    }




    @RequestMapping(value = "/getTagsByBlogId",method = RequestMethod.GET)
    @ResponseBody
    public ReturnEntity getTagsByBlogId(int blog_id){
        JSONObject data = new JSONObject();
        List<Tag> tagList = tagService.getTagsByBlogId(blog_id);
        data.put("tagList",tagList);
        return ReturnEntity.successResult(data);
    }


    @GetMapping("/pub/user_tags")
    @ResponseBody
    public ReturnEntity getAllTagsByUser(@RequestBody Map<String,Object> user_post_id){

        String msg = "";
        JSONObject data = new JSONObject();
        boolean status = true;
        int id = 10;//不存在的id 如果错误说明try catch 有问题

        String userid = (String) user_post_id.get("userid");
        try{
            id = UserUtil.switchToint(userid);
        }catch (Exception e){
        }

        List<Blog> blogs = blogService.getBlogListByUserid(id);
        Set<String> tagSet = new HashSet<String>();

        //中转taglist
        List<Tag> tagList;

        if (blogs!=null && !blogs.isEmpty()){
            for (Blog blog : blogs){
                tagList = tagService.getTagsByBlogId(blog.getBlogId());
                for (Tag tag : tagList){
                    tagSet.add(tag.getTagName());
                }
            }
        }else {
            msg="user have not bolg";
        }
        data.put("tag",tagSet);
        ReturnEntity returnEntity = new ReturnEntity(status,msg,data);
        return returnEntity;

    }

}
