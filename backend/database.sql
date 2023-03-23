-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_caspienne
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artifacts`
--

DROP TABLE IF EXISTS `artifacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artifacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_arti` varchar(45) DEFAULT NULL,
  `description_arti` longtext,
  `price` double DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `archive_arti` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `artifacts_has_themes`
--

DROP TABLE IF EXISTS `artifacts_has_themes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artifacts_has_themes` (
  `artifacts_id` int NOT NULL,
  `themes_id` int NOT NULL,
  PRIMARY KEY (`artifacts_id`,`themes_id`),
  KEY `fk_artifacts_has_themes_themes1_idx` (`themes_id`),
  KEY `fk_artifacts_has_themes_artifacts1_idx` (`artifacts_id`),
  CONSTRAINT `fk_artifacts_has_themes_artifacts1` FOREIGN KEY (`artifacts_id`) REFERENCES `artifacts` (`id`),
  CONSTRAINT `fk_artifacts_has_themes_themes1` FOREIGN KEY (`themes_id`) REFERENCES `themes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  PRIMARY KEY (`id`,`users_id`),
  KEY `fk_panier_users1_idx` (`users_id`),
  CONSTRAINT `fk_panier_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cart_has_artifacts`
--

DROP TABLE IF EXISTS `cart_has_artifacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_has_artifacts` (
  `id_cart_has_artifacts` int NOT NULL AUTO_INCREMENT,
  `cart_id` int NOT NULL,
  `artifacts_id` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id_cart_has_artifacts`),
  KEY `fk_cart_has_artifacts_artifacts1_idx` (`artifacts_id`),
  KEY `fk_cart_has_artifacts_cart1_idx` (`cart_id`),
  CONSTRAINT `fk_cart_has_artifacts_artifacts1` FOREIGN KEY (`artifacts_id`) REFERENCES `artifacts` (`id`),
  CONSTRAINT `fk_cart_has_artifacts_cart1` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` longtext,
  `date_create` date DEFAULT NULL,
  `date_update` date DEFAULT NULL,
  `actived` tinyint DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_event` varchar(100) NOT NULL,
  `description_event` longtext NOT NULL,
  `date_event_begginning` date NOT NULL,
  `date_event_end` date DEFAULT NULL,
  `place_event` varchar(55) NOT NULL,
  `picture_event` longtext,
  `archive_event` int DEFAULT NULL,
  `link_event` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `events_has_themes`
--

DROP TABLE IF EXISTS `events_has_themes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events_has_themes` (
  `events_id` int NOT NULL,
  `themes_id` int NOT NULL,
  PRIMARY KEY (`events_id`,`themes_id`),
  KEY `fk_events_has_themes_themes1_idx` (`themes_id`),
  KEY `fk_events_has_themes_events1_idx` (`events_id`),
  CONSTRAINT `fk_events_has_themes_events1` FOREIGN KEY (`events_id`) REFERENCES `events` (`id`),
  CONSTRAINT `fk_events_has_themes_themes1` FOREIGN KEY (`themes_id`) REFERENCES `themes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `num_cmd` int DEFAULT NULL,
  `comments_id` int DEFAULT NULL,
  `users_id` int NOT NULL,
  `order_amount` double DEFAULT NULL,
  PRIMARY KEY (`id`,`users_id`),
  KEY `fk_commande_users1_idx` (`users_id`),
  KEY `fk_commandes_comments1_idx` (`comments_id`),
  CONSTRAINT `fk_commande_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_commandes_comments1` FOREIGN KEY (`comments_id`) REFERENCES `comments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orders_has_artifact`
--

DROP TABLE IF EXISTS `orders_has_artifact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders_has_artifact` (
  `orders_id` int NOT NULL,
  `artifact_id` int NOT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`orders_id`,`artifact_id`),
  KEY `fk_orders_has_artifact_artifact1_idx` (`artifact_id`),
  KEY `fk_orders_has_artifact_orders1_idx` (`orders_id`),
  CONSTRAINT `fk_orders_has_artifact_artifact1` FOREIGN KEY (`artifact_id`) REFERENCES `artifacts` (`id`),
  CONSTRAINT `fk_orders_has_artifact_orders1` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pictures`
--

DROP TABLE IF EXISTS `pictures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pictures` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_img` longtext,
  `url_img` longtext,
  `is_active` int DEFAULT NULL,
  `artifacts_id` int NOT NULL,
  PRIMARY KEY (`id`,`artifacts_id`),
  KEY `fk_pictures_artifacts1_idx` (`artifacts_id`),
  CONSTRAINT `fk_pictures_artifacts1` FOREIGN KEY (`artifacts_id`) REFERENCES `artifacts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `themes`
--

DROP TABLE IF EXISTS `themes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `themes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_theme` varchar(55) DEFAULT NULL,
  `description_theme` varchar(700) DEFAULT NULL,
  `picture_theme` longtext,
  `archive_theme` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nickname` varchar(25) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(150) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `number_delivery` varchar(45) DEFAULT NULL,
  `adress_delivery` varchar(100) DEFAULT NULL,
  `zip_delivery` varchar(10) DEFAULT NULL,
  `town_delivery` varchar(55) DEFAULT NULL,
  `country_delivery` varchar(55) DEFAULT NULL,
  `number_bill` varchar(45) DEFAULT NULL,
  `adress_bill` varchar(100) DEFAULT NULL,
  `zip_bill` varchar(10) DEFAULT NULL,
  `town_bill` varchar(55) DEFAULT NULL,
  `country_bill` varchar(55) DEFAULT NULL,
  `is_admin` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-23 16:50:55
