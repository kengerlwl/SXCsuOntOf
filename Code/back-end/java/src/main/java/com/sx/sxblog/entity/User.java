package com.sx.sxblog.entity;

import com.baomidou.mybatisplus.annotation.IdType;
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
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 用户流水号
     */
    @TableId(value = "user_id", type = IdType.AUTO)
    private Integer userId;

    /**
     * 用户账号
     */
    private String userName;

    /**
     * 用户密码
     */
    private String password;

    /**
     * 邮箱
     */
    private String email;

    /**
     * 等级
     */
    private Integer level;

    private String sex;

    private String birthday;

    private String description;

    private String company;


}
