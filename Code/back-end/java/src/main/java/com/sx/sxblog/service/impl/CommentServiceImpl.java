package com.sx.sxblog.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.entity.Comment;
import com.sx.sxblog.mapper.BlogMapper;
import com.sx.sxblog.mapper.CommentMapper;
import com.sx.sxblog.service.ICommentService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

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
    @Resource
    private CommentMapper commentMapper;


    @Override
    public int insertComment(Comment comment) {
        return commentMapper.insert(comment);
    }

    @Override
    public int deleteComment(int comment_id) {
        return commentMapper.deleteById(comment_id);
    }

    @Override
    public List<Comment> getCommentList() {
        return commentMapper.selectList(null);
    }

    @Override
    public int deletCommentByBlogid(int blogid){
        QueryWrapper<Comment> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("blog_id",blogid);
        int result = commentMapper.delete(queryWrapper);
        return result;
    }
}
