package com.sx.sxblog.controller;


import com.alibaba.fastjson.JSONObject;
import com.sx.sxblog.common.ReturnEntity;
import com.sx.sxblog.entity.Comment;
import com.sx.sxblog.service.impl.CommentServiceImpl;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author lgx
 * @since 2020-07-08
 */
@RestController
public class CommentController {
    @Resource
    private CommentServiceImpl commentService;

    @RequestMapping(value = "/getCommentList",method = RequestMethod.GET)
    @ResponseBody
    public ReturnEntity getCommentList(){
        JSONObject data = new JSONObject();
        List<Comment> commentList = commentService.getCommentList();
        data.put("commentList",commentList);
        return ReturnEntity.successResult(data);
    }


    @RequestMapping(value = "/getCommentListByBlog",method = RequestMethod.GET)
    @ResponseBody
    public ReturnEntity getCommentListByBlog(int blog_id){
        JSONObject data = new JSONObject();
//        int blog_id = 1000000;
        List<Comment> commentList = commentService.getCommentList();
        for(int i =0; i < commentList.size(); i++)
        {
            Comment tmpComment = commentList.get(i);
            if(tmpComment.getBlogId() != blog_id){
                commentList.remove(i);
                i--;
            }else{

            }
        }
        data.put("commentList",commentList);
        return ReturnEntity.successResult(data);
    }
    @RequestMapping(value = "/insertComment",method = RequestMethod.POST)
    @ResponseBody
    public ReturnEntity insertComment(@RequestBody Comment comment){
        JSONObject data = new JSONObject();
        int result = commentService.insertComment(comment);
        data.put("result",result);
        System.out.println(data);
        return ReturnEntity.successResult(data);
    }

    @RequestMapping(value = "/deleteComment",method = RequestMethod.POST)
    @ResponseBody
    public ReturnEntity deleteComment(@RequestBody Comment comment){
        JSONObject data = new JSONObject();
        int result = commentService.deleteComment(comment.getCommentId());
        data.put("result",result);
        return ReturnEntity.successResult(data);
    }




}
