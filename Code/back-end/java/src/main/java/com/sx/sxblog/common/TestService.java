package com.sx.sxblog.common;

import com.alibaba.fastjson.JSONObject;
import com.sx.sxblog.DemoApplication;
import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.entity.Tag;
import com.sx.sxblog.service.impl.BlogServiceImpl;
import com.sx.sxblog.service.impl.TagServiceImpl;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = DemoApplication.class )//这里是启动类
public class TestService {
    @Resource
    private BlogServiceImpl blogService;
    @Resource
    private TagServiceImpl tagService;

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
}
