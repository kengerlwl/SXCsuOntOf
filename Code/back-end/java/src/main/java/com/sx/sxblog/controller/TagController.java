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

//        String userid = (String) user_post_id.get("userid");
        try{
            id = (Integer) user_post_id.get("userid");
        }catch (Exception e){
            status = false;
            msg = "worng id";
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
            if(status){
                msg="user have not bolg";
            }
            status = false;
        }
        data.put("tag",tagSet);
        ReturnEntity returnEntity = new ReturnEntity(status,msg,data);
        return returnEntity;

    }

    @PostMapping("/delet_tag_by_blogid_tagname")
    @ResponseBody
    public ReturnEntity deletTagByUserTagname(@RequestBody Map<String,Object> map){
        JSONObject data = new JSONObject();
        String msg = "";
        boolean status = true;

        String blogId = (String) map.get("blog_id");
        int id = UserUtil.switchToint(blogId);
        String tagName = (String) map.get("tag_name");
        int result = tagService.deletTagByUserAndContent(id,tagName);

        data.put("result",result);

        ReturnEntity returnEntity = new ReturnEntity(status,msg,data);
        return returnEntity;

    }

}
