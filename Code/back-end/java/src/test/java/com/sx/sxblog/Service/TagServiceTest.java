package com.sx.sxblog.Service;

import com.sx.sxblog.entity.Tag;
import com.sx.sxblog.service.impl.TagServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TagServiceTest {
    @Resource
    private TagServiceImpl tagService;

    @Test
    public void getTagList(){
        List<Tag> tagList = tagService.getTagList();
        System.out.println(tagList);
    }

    @Test
    public void getTagById()
    {
        Tag tag = tagService.getTagById(10000);
        System.out.println(tag);
    }

    @Test
    public void insertTag()
    {
        Tag tag = new Tag();
        tag.setBlogId(1000005);
        tag.setTagName("c#");

        Integer result = tagService.insertTag(tag);
        System.out.println(result);
    }

    @Test
    public void updateTag()
    {
        Tag tag = new Tag();
        tag.setTagId(10002);
        tag.setBlogId(1000004);
        tag.setTagName("c++");

        Integer result = tagService.updateTag(tag);
        System.out.println(result);
    }

    @Test
    public void deleteTag(){
        int result = tagService.deleteTag(10002);
        System.out.println(result);
    }
}
