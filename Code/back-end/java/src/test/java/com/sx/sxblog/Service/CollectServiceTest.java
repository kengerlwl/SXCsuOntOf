package com.sx.sxblog.Service;

import com.sx.sxblog.entity.Collect;
import com.sx.sxblog.service.impl.CollectServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CollectServiceTest {
    @Resource
    private CollectServiceImpl collectService;

    @Test
    public void getCollectList(){
        List<Collect> collectList = collectService.getCollectList();
        System.out.println(collectList);
    }

    @Test
    public void getCollectById(){
        Collect collect = collectService.getCollectById(10001);
        System.out.println(collect);
    }

    @Test
    public void insertCollect(){
        Collect collect = new Collect();
        collect.setUserId(10000);
        collect.setBlogId(1000006);
        Integer result = collectService.insertCollect(collect);
        System.out.println(result);
    }

    @Test
    public void deleteCollect(){
        int result = collectService.deleteCollect(10002);
        System.out.println(result);
    }


}
