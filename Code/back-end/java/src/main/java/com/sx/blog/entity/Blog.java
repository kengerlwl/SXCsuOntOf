package com.sx.blog.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author lgx
 * @since 2020-07-06
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("Blog")
public class Blog implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("blogID")
    private String blogID;

    @TableField("postTime")
    private String postTime;

    @TableField("watchTimes")
    private Integer watchTimes;


}
