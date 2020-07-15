package com.sx.sxblog.controller;


import com.alibaba.fastjson.JSONObject;
import com.sx.sxblog.common.ReturnEntity;
import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.entity.Collect;
import com.sx.sxblog.entity.Tag;
import com.sx.sxblog.service.impl.BlogServiceImpl;
import com.sx.sxblog.service.impl.CollectServiceImpl;
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
public class CollectController {
    @Resource
    private CollectServiceImpl collectService;

    @Resource
    private BlogServiceImpl blogService;
    @Resource
    private TagServiceImpl tagService;
    @RequestMapping(value = "/getCollectList",method = RequestMethod.GET)
    @ResponseBody
    public ReturnEntity getCollectList(){
        JSONObject data = new JSONObject();
        List<Collect> collectList = collectService.getCollectList();
        data.put("collectList",collectList);
        return ReturnEntity.successResult(data);
    }

    @RequestMapping(value = "/getCollectListByUser",method = RequestMethod.GET)
    @ResponseBody
    public ReturnEntity getCollectListByUser(int user_id){

        JSONObject data = new JSONObject();
        List<Collect> collectList = collectService.getCollectList();


        for(int i =0; i < collectList.size(); i++){


            Collect collect = collectList.get(i);
            int UserId = collect.getUserId();
            System.out.println(UserId);
            if(UserId != user_id){
                collectList.remove(i);
                i--;
            }else{

                int blog_id = collect.getBlogId();

                String  s = String.valueOf(blog_id);

                Blog blog = blogService.getBlogById(blog_id);
                List<Tag> tagList = tagService.getTagsByBlogId(blog_id);
                System.out.println(blog.getBlogContent());
                data.put(s, blog);
                data.put(s + "tag", tagList);

            }
        }

        data.put("collectList",collectList);





        return ReturnEntity.successResult(data);
    }

    @RequestMapping(value = "/getCollectById",method = RequestMethod.GET)
    @ResponseBody
    public ReturnEntity getCollectById(int collect_id){
        JSONObject data = new JSONObject();
        Collect collect = collectService.getCollectById(collect_id);
        data.put("collect_id",collect);
        return ReturnEntity.successResult(data);
    }

    @RequestMapping(value = "/insertCollect",method = RequestMethod.POST)
    @ResponseBody
    public ReturnEntity insertCollect(@RequestBody Collect collect){
        JSONObject data = new JSONObject();
        int result = collectService.insertCollect(collect);
        data.put("result",result);
        System.out.println(data);
        return ReturnEntity.successResult(data);
    }

    @RequestMapping(value = "/deleteCollect",method = RequestMethod.POST)
    @ResponseBody
    public ReturnEntity deleteCollect(@RequestBody Collect collect){
        JSONObject data = new JSONObject();
        int result = collectService.deleteCollect(collect.getCollectId());
        data.put("result",result);
        return ReturnEntity.successResult(data);
    }
}
