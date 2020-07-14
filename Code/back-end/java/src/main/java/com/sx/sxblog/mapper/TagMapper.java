package com.sx.sxblog.mapper;

import com.sx.sxblog.entity.Tag;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lgx
 * @since 2020-07-08
 */
public interface TagMapper extends BaseMapper<Tag> {
    List<Tag> getTagsByBlogId(int blog_id);

}
