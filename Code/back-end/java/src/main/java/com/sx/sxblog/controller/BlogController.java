package com.sx.sxblog.controller;


import com.alibaba.fastjson.JSONObject;
import com.sx.sxblog.common.ReturnEntity;
import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.entity.Tag;
import com.sx.sxblog.service.impl.BlogServiceImpl;
import com.sx.sxblog.service.impl.TagServiceImpl;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Iterator;
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
public class BlogController {
    @Resource
    private BlogServiceImpl blogService;
    @Resource TagServiceImpl tagService;

    @RequestMapping(value = "/getBlogList",method = RequestMethod.GET)
    @ResponseBody
    public ReturnEntity getBlogList(){
        JSONObject data = new JSONObject();
        List<Blog> blogList = blogService.getBlogList();
        data.put("blogList",blogList);
        return ReturnEntity.successResult(data);
    }



    @RequestMapping(value = "/getBlogListByUser",method = RequestMethod.GET)
    @ResponseBody
    public ReturnEntity getBlogListByUser(int user_id){
        JSONObject data = new JSONObject();

        List<Blog> blogList = blogService.getBlogList();


        for(int    i=0;    i<blogList.size();    i++) {
            Blog blogtmp    =    blogList.get(i);
            int userID = blogtmp.getUserId();

            int tmpId =  blogtmp.getBlogId();
            if (user_id != userID){
                blogList.remove(i);
                i--;
            }
            else{
                List<Tag> tagList = tagService.getTagsByBlogId(tmpId);
                System.out.println(tmpId);

                System.out.println("获取相应的blog tag");
                JSONObject tmp = new JSONObject();
                data.put(String.valueOf(tmpId), tagList);
            }



        }
        data.put("bloglist", blogList);

        return ReturnEntity.successResult(data);
    }




    @RequestMapping(value = "/getBlogById",method = RequestMethod.GET)
    @ResponseBody
    public ReturnEntity getBlogById(int blog_id){
        JSONObject data = new JSONObject();
        Blog blog = blogService.getBlogById(blog_id);
        data.put("blog_id",blog);
        return ReturnEntity.successResult(data);
    }

    @RequestMapping(value = "/insertBlog",method = RequestMethod.POST)
    @ResponseBody
    public ReturnEntity insertBlog(@RequestBody Blog blog){
        JSONObject data = new JSONObject();
        int result = blogService.insertBlog(blog);
        List<Blog> blogtmp=  blogService.getBlogByBlogName(blog.getBlogName());
        data.put("result",blogtmp);
        System.out.println(data);
        return ReturnEntity.successResult(data);
    }

    @RequestMapping(value = "/deleteBlog",method = RequestMethod.POST)
    @ResponseBody
    public ReturnEntity deleteBlog(@RequestBody Blog blog){
        JSONObject data = new JSONObject();
        int result = blogService.deleteBlog(blog.getBlogId());
        data.put("result",result);
        return ReturnEntity.successResult(data);
    }

    @RequestMapping(value = "/updateBlog",method = RequestMethod.POST)
    @ResponseBody
    public ReturnEntity updateBlog(@RequestBody Blog blog){
        JSONObject data = new JSONObject();
        int result = blogService.updateBlog(blog);
        data.put("result",result);
        return ReturnEntity.successResult(data);
    }








}
