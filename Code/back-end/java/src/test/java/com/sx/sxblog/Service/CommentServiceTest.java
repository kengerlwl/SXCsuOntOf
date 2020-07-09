package com.sx.sxblog.Service;

import com.sx.sxblog.entity.Comment;
import com.sx.sxblog.service.impl.CollectServiceImpl;
import com.sx.sxblog.service.impl.CommentServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CommentServiceTest {
    @Resource
    private CommentServiceImpl commentService;

    @Test
    public void getCommentList(){
        List<Comment> commentList = commentService.getCommentList();
        System.out.println(commentList);
    }

    @Test
    public void insertComment(){
        Comment comment = new Comment();
        comment.setBlogId(1000005);
        comment.setUserId(10001);
        comment.setCommentWord("this is a good blog");
        //comment.setCommentDate();
        Integer result = commentService.insertComment(comment);
        System.out.println(result);
    }

    @Test
    public void deleteComment(){
        int result = commentService.deleteComment(10003);
        System.out.println(result);
    }
}
