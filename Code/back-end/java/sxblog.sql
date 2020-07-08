/*
 Navicat Premium Data Transfer

 Source Server         : lgx
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : localhost:3306
 Source Schema         : sxblog

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 08/07/2020 00:45:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for blog
-- ----------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog` (
  `blog_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `blog_content` varchar(10000) DEFAULT NULL,
  `post_time` date DEFAULT NULL,
  `blog_views` int DEFAULT NULL,
  `blog_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`blog_id`),
  KEY `user_blog` (`user_id`),
  CONSTRAINT `user_blog` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000002 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog
-- ----------------------------
BEGIN;
INSERT INTO `blog` VALUES (1000000, 10000, '如何学好python', '2020-07-07', 143, '学好python很重要');
INSERT INTO `blog` VALUES (1000001, 10002, '如何学Java', '2020-07-01', 12, '快去学习吧');
COMMIT;

-- ----------------------------
-- Table structure for collect
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect` (
  `collect_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `blog_id` int DEFAULT NULL,
  `collect_date` date DEFAULT NULL,
  PRIMARY KEY (`collect_id`),
  KEY `user_collect` (`user_id`),
  KEY `blog_collect` (`blog_id`),
  CONSTRAINT `blog_collect` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`blog_id`),
  CONSTRAINT `user_collect` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10002 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collect
-- ----------------------------
BEGIN;
INSERT INTO `collect` VALUES (10000, 10001, 1000000, '2020-07-07');
INSERT INTO `collect` VALUES (10001, 10000, 1000001, '2020-07-06');
COMMIT;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `blog_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `comment_word` varchar(200) DEFAULT NULL,
  `comment_date` date DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `blog_comment` (`blog_id`),
  KEY `user_comment` (`user_id`),
  CONSTRAINT `blog_comment` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`blog_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `user_comment` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=10003 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
BEGIN;
INSERT INTO `comment` VALUES (10000, 1000000, 10000, '博主辛苦了', '2020-07-03');
INSERT INTO `comment` VALUES (10001, 1000000, 10002, '写的真好，点个赞', '2020-07-04');
INSERT INTO `comment` VALUES (10002, 1000001, 10000, '这个文章实测好用', '2020-07-06');
COMMIT;

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `tag_id` int NOT NULL AUTO_INCREMENT,
  `blog_id` int DEFAULT NULL,
  `tag_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`tag_id`),
  KEY `blog_tag` (`blog_id`),
  CONSTRAINT `blog_tag` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`blog_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=10002 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tag
-- ----------------------------
BEGIN;
INSERT INTO `tag` VALUES (10000, 1000001, 'Java');
INSERT INTO `tag` VALUES (10001, 1000000, 'Python');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT COMMENT '用户流水号',
  `user_name` varchar(20) DEFAULT NULL COMMENT '用户账号',
  `password` varchar(20) DEFAULT NULL COMMENT '用户密码',
  `email` varchar(20) DEFAULT NULL COMMENT '邮箱',
  `level` int(1) unsigned zerofill DEFAULT NULL COMMENT '等级',
  `sex` varchar(20) DEFAULT NULL,
  `birthday` varchar(20) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `company` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10003 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (10000, 'lwl', '123', '123@qq.com', 0, '男', '2000-1-1', '我爱Python', '软件1803');
INSERT INTO `user` VALUES (10001, 'hbx', '123', '456@qq.com', 0, '男', '2000-2-2', '我爱Vue', '软件1804');
INSERT INTO `user` VALUES (10002, 'lgx', '123', '1349621303@qq.com', 0, '男', '1999-3-3', '我爱Java', '软件1803');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
