package com.sx.sxblog.common;

import com.alibaba.fastjson.JSONObject;
import com.sx.sxblog.DemoApplication;
import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.entity.Collect;
import com.sx.sxblog.entity.Tag;
import com.sx.sxblog.service.impl.BlogServiceImpl;
import com.sx.sxblog.service.impl.CollectServiceImpl;
import com.sx.sxblog.service.impl.TagServiceImpl;
import com.sx.sxblog.service.impl.UserServiceImpl;
import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
//import org.springframework.boot.test.context.SpringBootTest;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = DemoApplication.class )//这里是启动类
public class TestService {
    @Resource
    private BlogServiceImpl blogService;
    @Resource
    private TagServiceImpl tagService;
    @Resource
    private CollectServiceImpl collectService;
    @Resource
    private UserServiceImpl userService;

    @Test
    public void testJson(){
        System.out.println("start\n\n\n\n\n");
        int user_id = 10000;
        JSONObject data = new JSONObject();

        List<Blog> blogList = blogService.getBlogList();


        for(int    i=0;    i<blogList.size();    i++) {
            Blog blogtmp    =    blogList.get(i);
            int userID = blogtmp.getUserId();

            int tmpId =  blogtmp.getBlogId();
            if (user_id != userID){
                blogList.remove(i);
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
        System.out.println(data.toJSONString());
    }


    @Test
    public void testCollect(){
        JSONObject data = new JSONObject();
        int user_id = 10000;
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




        System.out.println(data.toJSONString());
    }

}
