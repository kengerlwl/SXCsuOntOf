package com.sx.sxblog.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.sx.sxblog.entity.Collect;
import com.sx.sxblog.entity.User;
import com.sx.sxblog.mapper.CollectMapper;
import com.sx.sxblog.service.ICollectService;
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
public class CollectServiceImpl extends ServiceImpl<CollectMapper, Collect> implements ICollectService {
    @Resource
    private CollectMapper collectMapper;

    @Override
    public int insertCollect(Collect collect) {
        return collectMapper.insert(collect);
    }

    @Override
    public int deleteCollect(int collect_id) {
        return collectMapper.deleteById(collect_id);
    }

    @Override
    public List<Collect> getCollectList() {
        return collectMapper.selectList(null);
    }

    @Override
    public Collect getCollectById(int collect_id) {
        return collectMapper.selectById(collect_id);
    }

    @Override
    public List<Collect> getCollectListByUserid(int userid){
        QueryWrapper<Collect> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id",userid);
        List<Collect> collects = collectMapper.selectList(queryWrapper);
        return collects;
    }
}
