package com.sx.sxblog.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.entity.Tag;
import com.sx.sxblog.mapper.BlogMapper;
import com.sx.sxblog.mapper.TagMapper;
import com.sx.sxblog.service.ITagService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lgx
 * @since 2020-07-08
 */
@Service
public class TagServiceImpl extends ServiceImpl<TagMapper, Tag> implements ITagService {
    @Resource
    private TagMapper tagMapper;


    @Override
    public int insertTag(Tag tag) {
        return tagMapper.insert(tag);
    }

    @Override
    public int deleteTag(int tag_id) {
        return tagMapper.deleteById(tag_id);
    }

    @Override
    public int updateTag(Tag tag) {
        return tagMapper.update(tag, new QueryWrapper<Tag>()
                .eq("tag_Id",tag.getTagId())
        );
    }

    @Override
    public List<Tag> getTagList() {
        return tagMapper.selectList(null);
    }

    @Override
    public Tag getTagById(int tag_id) {
        return tagMapper.selectById(tag_id);
    }

    @Override
    public List<Tag> getTagsByBlogId(int blog_id) {
        return tagMapper.getTagsByBlogId(blog_id);
    }


}
