-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_caspienne
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Dumping data for table `artifacts`
--

LOCK TABLES `artifacts` WRITE;
/*!40000 ALTER TABLE `artifacts` DISABLE KEYS */;
INSERT INTO `artifacts` VALUES (1,'collier','sddshdfjdsdjf',50,2,NULL,NULL),(2,'bracelet','defhzohe',35,5,NULL,NULL),(3,'bague','dsf',20,1,NULL,NULL);
/*!40000 ALTER TABLE `artifacts` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `artifacts_has_themes`
--

LOCK TABLES `artifacts_has_themes` WRITE;
/*!40000 ALTER TABLE `artifacts_has_themes` DISABLE KEYS */;
INSERT INTO `artifacts_has_themes` VALUES (1,1),(3,1),(1,2),(2,2),(3,2);
/*!40000 ALTER TABLE `artifacts_has_themes` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,1),(2,2);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `cart_has_artifacts`
--

LOCK TABLES `cart_has_artifacts` WRITE;
/*!40000 ALTER TABLE `cart_has_artifacts` DISABLE KEYS */;
INSERT INTO `cart_has_artifacts` VALUES (1,1,1,5),(2,1,2,2),(3,2,3,1);
/*!40000 ALTER TABLE `cart_has_artifacts` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'dddddddd','2002-02-02','2023-03-09',1),(2,'dddddddddddddd','2010-10-10','2010-10-10',1),(3,'ssssssss','2023-01-01','2023-01-01',1);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `events_has_themes`
--

LOCK TABLES `events_has_themes` WRITE;
/*!40000 ALTER TABLE `events_has_themes` DISABLE KEYS */;
/*!40000 ALTER TABLE `events_has_themes` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (2,1,1,1,100),(6,2,2,2,30),(14,5,NULL,18,150),(15,7,NULL,18,22),(16,6,NULL,18,45);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `orders_has_artifact`
--

LOCK TABLES `orders_has_artifact` WRITE;
/*!40000 ALTER TABLE `orders_has_artifact` DISABLE KEYS */;
INSERT INTO `orders_has_artifact` VALUES (2,1,3);
/*!40000 ALTER TABLE `orders_has_artifact` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `pictures`
--

LOCK TABLES `pictures` WRITE;
/*!40000 ALTER TABLE `pictures` DISABLE KEYS */;
INSERT INTO `pictures` VALUES (1,'test1','https://cdn.shopify.com/s/files/1/0321/5920/3464/products/fondbleu0167_a833c554-96cd-4773-a540-43699c468def_1200x1200.jpg?v=1624544705',1,1),(2,'test1','https://cdn.shopify.com/s/files/1/0321/5920/3464/products/gigi-clozeau_bracelet-madone-resine-jade-or-jaune-17-cm_b3vi004j1717xx_i1_645273b5-ed8b-4da1-8441-2f2b8ed5f1b8_600x600@2x.jpg?v=1624544419',1,2),(3,'test2','https://atelier-amaya.com/media/catalog/product/f/2/f27ac352-953a-4dec-a3fa-front.jpg?quality=100&fit=bounds&height=500&width=500',1,1),(4,'test2','https://cdn.shopify.com/s/files/1/0321/5920/3464/products/gigi-clozeau_bracelet-madone-resine-jade-or-jaune-17-cm_b3vi004j1717xx_i1_645273b5-ed8b-4da1-8441-2f2b8ed5f1b8_600x600@2x.jpg?v=1624544419',1,2),(5,'test1','https://www.histoiredor.com/dw/image/v2/BCQS_PRD/on/demandware.static/-/Sites-THOM_CATALOG/default/dw7fa8888a/images/B3DFJYI609-master.jpg?sw=1024&sh=1024',1,3);
/*!40000 ALTER TABLE `pictures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `themes`
--

DROP TABLE IF EXISTS `themes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `themes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_theme` varchar(55) DEFAULT NULL,
  `description_theme` longtext,
  `picture_theme` longtext,
  `archive_theme` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `themes`
--

LOCK TABLES `themes` WRITE;
/*!40000 ALTER TABLE `themes` DISABLE KEYS */;
INSERT INTO `themes` VALUES (1,'La fantasy','Les histoires fantastiques, qui mettent en scène des mondes imaginaires remplis de créatures magiques, de héros courageux et d\'aventures épiques, sont un sujet de prédilection pour les fans de la culture de l\'imaginaire. Des œuvres célèbres comme Le Seigneur des Anneaux de J.R.R. Tolkien, Harry Potter de J.K. Rowling et Le Trône de Fer de George R.R. Martin ont captivé des millions de lecteurs et de spectateurs.','https://lemazetroucas-my.sharepoint.com/personal/contact_lemazetroucas_fr/Documents/Images/WCS/themes_balade_caspienne/fantasy.png?Web=1',0),(2,'La science-fiction','La science-fiction explore des mondes futuristes ou alternatifs, souvent peuplés d\'extraterrestres, de robots et de technologies avancées. Les thèmes abordés peuvent inclure la dystopie, l\'exploration spatiale, l\'intelligence artificielle, le voyage dans le temps et bien plus encore. Des œuvres célèbres comme 1984 de George Orwell, Blade Runner de Ridley Scott et La Guerre des étoiles de George Lucas ont inspiré des générations de fans de la culture de l\'imaginaire.','https://lemazetroucas-my.sharepoint.com/personal/contact_lemazetroucas_fr/Documents/Images/WCS/themes_balade_caspienne/sf.png?Web=1',0),(3,'Les monstres','Les monstres ont une place importante dans la culture de l\'imaginaire, que ce soit dans les histoires d\'horreur, les films fantastiques ou les jeux vidéo. Les monstres peuvent prendre de nombreuses formes différentes, allant des créatures mythologiques comme les dragons et les minotaures aux monstres modernes tels que les vampires et les loups-garous. Des œuvres célèbres comme Frankenstein de Mary Shelley et la série de films Godzilla ont ouvert de nouvelles portes à des nouveaux monstres de l\'imaginaire.','https://lemazetroucas-my.sharepoint.com/personal/contact_lemazetroucas_fr/Documents/Images/WCS/themes_balade_caspienne/monstre.png?Web=1',0),(4,'La magie','La magie est un thème courant dans la culture de l\'imaginaire, souvent associée à la fantasy. Les histoires de magie peuvent inclure des sorciers, des sortilèges, des artefacts magiques et des créatures mystiques. Des œuvres célèbres telles que la série Harry Potter de J.K. Rowling et la trilogie Le Magicien d\'Oz de L. Frank Baum ont captivé des millions de fans à travers le monde.','https://lemazetroucas-my.sharepoint.com/personal/contact_lemazetroucas_fr/Documents/Images/WCS/themes_balade_caspienne/magie.png?Web=1',0),(5,'L\'occultisme','L\'occultisme est un domaine qui explore les forces mystérieuses et surnaturelles qui existent\nau-delà de la compréhension humaine. Les histoires d\'occultisme peuvent inclure des pratiques\nésotériques, des rituels magiques, des démons et des esprits. Des œuvres célèbres telles que le\nNécronomicon de H. P Lovecraft et la série TV Supernatural ont inspiré des fans de la culture de\nl\'imaginaire.\r','https://lemazetroucas-my.sharepoint.com/personal/contact_lemazetroucas_fr/Documents/Images/WCS/themes_balade_caspienne/occultisme.png?Web=1',0),(6,'Les jeux vidéo','Les jeux vidéo sont une forme populaire de la culture de l\'imaginaire, offrant des\nexpériences immersives dans des mondes fantastiques et des scénarios passionnants. Les genres de jeux\nvidéo comprennent la fantasy, la science-fiction, les jeux de rôle et les jeux de survie. Des jeux célèbres\ncomme Final Fantasy, The Legend of Zelda et World of Warcraft ont captivé des millions de joueurs à\ntravers le monde.','https://lemazetroucas-my.sharepoint.com/personal/contact_lemazetroucas_fr/Documents/Images/WCS/themes_balade_caspienne/jeanxvideo.png?Web=1',0),(7,'Les mangas et les animes','Les mangas et les animes sont des formes populaires de la culture de\nl\'imaginaire originaires du Japon. Les mangas sont des bandes dessinées japonaises, tandis que les\nanimes sont des séries animées. Les thèmes courants dans les mangas et les animes incluent la fantasy, la\nscience-fiction, l\'horreur et le surnaturel. Des œuvres célèbres telles que Dragon Ball, Naruto et Sailor\nMoon ont inspiré des fans du monde entier.','https://lemazetroucas-my.sharepoint.com/personal/contact_lemazetroucas_fr/Documents/Images/WCS/themes_balade_caspienne/manga.png?Web=1',0),(8,'L\'horreur','L\'horreur est un autre thème populaire dans la culture de l\'imaginaire. Les histoires d\'horreur\nse concentrent souvent sur des événements effrayants et surnaturels, mettant en scène des créatures\nterrifiantes, des fantômes, des zombies, des monstres, des vampires et des loups-garous. Les œuvres\nd\'horreur peuvent également inclure des éléments de suspense, de mystère et de gore. Des œuvres\ncélèbres telles que les romans de H.P Lovecraft avec les Récits Horrifique présentant de nombreuses\ncréatures et mystère de l\'horreur, de Stephen King, le film The Shining de Stanley Kubrick, la série TV\nAmerican Horror Story et les jeux vidéo comme Resident Evil sont des célèbres pilier de l\'horreur.\r','https://lemazetroucas-my.sharepoint.com/personal/contact_lemazetroucas_fr/Documents/Images/WCS/themes_balade_caspienne/horreur.png?Web=1',0),(9,'La féérie','Les histoires de féerie mettent souvent en scène des créatures fantastiques telles que les fées,\nles nymphes, les lutins, les elfes et les gnomes, ainsi que des mondes féériques remplis de magie et de\nmerveilles. Les histoires de féerie ont une longue histoire dans la littérature,remontant aux contes de fées\net aux légendes médiévales, et continuent d\'inspirer des œuvres populaires telles que la série TV\nOnceUpon a Time et le film Le Monde de Narnia. La féerie est donc un thème important dans la culture de\nl\'imaginaire, qui offre des possibilités infinies pour des histoires captivantes et des univers magiques.\r','https://lemazetroucas-my.sharepoint.com/personal/contact_lemazetroucas_fr/Documents/Images/WCS/themes_balade_caspienne/feerie.png?Web=1',0),(10,'Le médiéval','Les histoires médiévales sont souvent ancrées dans un contexte historique et mettent en scène des rois, des chevaliers, des princesses et des batailles épiques. Les romans de fantasy médiévale tels que Le Seigneur des Anneaux de J.R.R. Tolkien et la série de George R.R. Martin, Le Trône de Fer, ont été particulièrement populaires ces dernières années, ainsi que des jeux vidéo comme Skyrim et des films comme Robin des Bois. Le thème médiéval offre des possibilités pour des histoires riches en personnages et en intrigue, et permet aux lecteurs, joueurs et spectateurs de s\'immerger dans un monde différent et fascinant.','https://lemazetroucas-my.sharepoint.com/personal/contact_lemazetroucas_fr/Documents/Images/WCS/themes_balade_caspienne/Medieval.png?Web=1',0);
/*!40000 ALTER TABLE `themes` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'jDO','DOE','John','jd@gmail','pass','2011-01-01','1251654',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'MDE','TAS','Mar','mario@hjsdh','pass','1980-07-31','4555',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,'juju21','Doe','jules','jules.doe@monmail.com','$argon2id$v=19$m=65536,t=5,p=1$O+ymU4S+MG4laNbiJ6SSLw$mqfLKmMdXQYg6YmsvU4arnOQU8FUOG4sheBSFd1oaoc','2001-01-01','540797821','25','rue du chateau','50500','londres','france','50500','rue du chateau','50500','londres','france',NULL),(21,NULL,NULL,NULL,'helene.doe@monmail.com','$argon2id$v=19$m=65536,t=5,p=1$k5/6bAOtQidkr5MHzfZtEQ$KZd6/1VlPsqo3WWLeaekWWwAYyh/1i7WndkM3UuPOfQ',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(22,NULL,NULL,NULL,'helene.doe@monmail.com','$argon2id$v=19$m=65536,t=5,p=1$QnMN8KvLCqgQ9atd+pElbA$po6WRQ/LENJj3ETWk7OnRHqwMPEyw8LNIgtSwWij9/c',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(23,NULL,NULL,NULL,'cecilia.doe@monmail.com','$argon2id$v=19$m=65536,t=5,p=1$wYWRp495Yd7JGqKb9ucb4Q$3aWjSWo5s6sFu2a2aq9njNKPZE57HkjIf7RkFUALFtw',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(24,'jo','doe','jojo','jo@mail.com','mdp','2002-02-02','44444444','25','rue du chateau','50500','londres','france','50500','rue du chateau','50500','londres','france',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-21 11:21:31
