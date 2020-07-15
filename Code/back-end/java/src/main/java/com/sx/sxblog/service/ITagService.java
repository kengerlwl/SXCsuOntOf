package com.sx.sxblog.service;

import com.sx.sxblog.entity.Tag;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.Collection;
import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lgx
 * @since 2020-07-08
 */
public interface ITagService extends IService<Tag> {
    //对标签进行增加【】
    int insertTag(Tag tag);

    //对标签进行删除【】
    int deleteTag(int tag_id);

    //对标签进行修改【】
    int updateTag(Tag tag);

    //对标签列表进行查询显示【】
    List<Tag> getTagList();

    //对指定标签进行查询【】
    Tag getTagById(int tag_id);

    //使用blogid删除tag
    int deletTagByBlogId(int blogid);

    //使用userid和tagcontent进行删除
    int deletTagByUserAndContent(int blogid,String tagName);


    List<Tag> getTagsByBlogId(int blog_id);





}
