package com.sx.sxblog.controller;


import com.alibaba.fastjson.JSONObject;
import com.sx.sxblog.common.ReturnEntity;
import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.entity.Tag;
import com.sx.sxblog.service.impl.BlogServiceImpl;
import com.sx.sxblog.service.impl.TagServiceImpl;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

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

}
