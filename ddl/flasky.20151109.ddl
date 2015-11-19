-- MySQL dump 10.13  Distrib 5.6.26, for Linux (x86_64)
--
-- Host: localhost    Database: flasky
-- ------------------------------------------------------
-- Server version	5.6.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alembic_version`
--

DROP TABLE IF EXISTS `alembic_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `body` text,
  `body_html` text,
  `timestamp` datetime DEFAULT NULL,
  `disabled` tinyint(1) DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `question_link_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=155282 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `follows`
--

DROP TABLE IF EXISTS `follows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `follows` (
  `follower_id` int(11) NOT NULL,
  `followed_id` int(11) NOT NULL,
  `timestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`follower_id`,`followed_id`),
  KEY `followed_id` (`followed_id`),
  CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`followed_id`) REFERENCES `users` (`id`),
  CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`follower_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `body` text,
  `timestamp` datetime DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  `body_html` text,
  `question_link_id` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `question_id` (`question_link_id`),
  KEY `author_id` (`author_id`),
  KEY `ix_posts_timestamp` (`timestamp`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39911 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `default` tinyint(1) DEFAULT NULL,
  `permissions` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `ix_roles_default` (`default`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `topic_mapping`
--

DROP TABLE IF EXISTS `topic_mapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `topic_mapping` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `topic_id` int(10) unsigned NOT NULL,
  `post_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mapping_id` (`topic_id`,`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `topics`
--

DROP TABLE IF EXISTS `topics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `topics` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(100) NOT NULL,
  `last_visit` int(10) unsigned DEFAULT NULL,
  `link_id` int(10) unsigned NOT NULL,
  `add_time` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link_id` (`link_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1994 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `password_hash` varchar(128) DEFAULT NULL,
  `confirmed` tinyint(1) DEFAULT NULL,
  `about_me` text,
  `last_seen` datetime DEFAULT NULL,
  `location` varchar(64) DEFAULT NULL,
  `member_since` datetime DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `avatar_hash` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_users_username` (`username`),
  UNIQUE KEY `ix_users_email` (`email`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86466 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-11-09 13:54:11
