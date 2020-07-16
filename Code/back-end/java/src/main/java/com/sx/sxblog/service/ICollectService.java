package com.sx.sxblog.service;

import com.sx.sxblog.entity.Blog;
import com.sx.sxblog.entity.Collect;
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
public interface ICollectService extends IService<Collect> {
    //对收藏进行增加【】
    int insertCollect(Collect collect);

    //对收藏进行删除【】
    int deleteCollect(int collect_id);

    //对收藏列表进行查询显示【】
    List<Collect> getCollectList();

    //对指定博客进行查询【】
    Collect getCollectById(int collect_id);

    //获取制定用户的collect列表
    List<Collect> getCollectListByUserid(int userid);

    //用blogid删除
    int deletCollectByBlogId(int blogid);

}
