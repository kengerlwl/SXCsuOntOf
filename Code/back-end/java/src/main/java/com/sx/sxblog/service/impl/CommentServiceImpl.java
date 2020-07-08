package com.sx.sxblog.service.impl;

import com.sx.sxblog.entity.Comment;
import com.sx.sxblog.mapper.CommentMapper;
import com.sx.sxblog.service.ICommentService;
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
public class CommentServiceImpl extends ServiceImpl<CommentMapper, Comment> implements ICommentService {

}
