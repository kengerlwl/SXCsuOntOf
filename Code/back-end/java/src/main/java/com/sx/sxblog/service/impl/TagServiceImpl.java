package com.sx.sxblog.service.impl;

import com.sx.sxblog.entity.Tag;
import com.sx.sxblog.mapper.TagMapper;
import com.sx.sxblog.service.ITagService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

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

}
