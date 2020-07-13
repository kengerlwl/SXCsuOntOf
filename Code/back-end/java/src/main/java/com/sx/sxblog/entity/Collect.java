package com.sx.sxblog.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import java.time.LocalDate;
import com.baomidou.mybatisplus.annotation.TableId;
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
 * @since 2020-07-08
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class Collect implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "collect_id", type = IdType.AUTO)
    private Integer collectId;

    private Integer userId;

    private Integer blogId;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Integer getCollectId() {
        return collectId;
    }

    public void setCollectId(Integer collectId) {
        this.collectId = collectId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getBlogId() {
        return blogId;
    }

    public void setBlogId(Integer blogId) {
        this.blogId = blogId;
    }

    public LocalDate getCollectDate() {
        return collectDate;
    }

    public void setCollectDate(LocalDate collectDate) {
        this.collectDate = collectDate;
    }

    private LocalDate collectDate;


}
