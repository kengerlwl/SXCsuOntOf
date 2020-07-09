package com.sx.sxblog.service;

import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.entity.Comment;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lgx
 * @since 2020-07-08
 */
public interface ICommentService extends IService<Comment> {
    //对评论进行增加【】
    int insertComment(Comment comment);

    //对评论进行删除【】
    int deleteComment(int comment_id);

    //对评论列表进行查询显示【】
    List<Comment> getCommentList();

}
