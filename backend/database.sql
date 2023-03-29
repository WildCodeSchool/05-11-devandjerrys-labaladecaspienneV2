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
  `name_arti` varchar(60) NOT NULL,
  `description_arti` longtext,
  `price` double NOT NULL,
  `stock` int NOT NULL,
  `discount` double DEFAULT NULL,
  `archive_arti` int NOT NULL,
  `matiere_arti` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_arti_UNIQUE` (`name_arti`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artifacts`
--

LOCK TABLES `artifacts` WRITE;
/*!40000 ALTER TABLE `artifacts` DISABLE KEYS */;
INSERT INTO `artifacts` VALUES (1,'Collier','Inspiration Lovecrafttienne - Monstre 3cm - Ruban 35.56cm (modulable) ',25,1,NULL,0,'Bois, Ruban'),(2,'Collier Fongus','Fongus 4cm - Ruban 35.56cm (modulable) ',25,1,NULL,0,'Ruban, Polymère'),(3,'Sculpture Fongus','h 12cm / L 10cm',40,1,NULL,0,'Bois, Polymère, Verre'),(4,'Bracelet Lotus','S ( 16CM-19CM ) M ( 19CM /- 22CM)',20,1,NULL,0,'Polymère'),(5,'Ras de cou Veuve Noir','Araignée - h 7cm / L 4cm',40,1,NULL,0,'Polymère, Acier doré, Perle rocaille, Verre, Ruban'),(6,'Collier Pierre de Lune','50,8 cm',20,1,NULL,0,'Acier doré, Pierre de Lune'),(7,'Cadre Fongus','h 20cm / L 12cm',35,1,NULL,0,'Bois, Polymère'),(8,'Boîte Necronomicon ','Inspiration Lovecrafttienne h 26cm / L 20cm',80,1,NULL,0,'Bois, Polymère'),(9,'Cadre','Inspiration Lovecrafttienne - h 20cm / L 12cm',35,1,NULL,0,'Bois, Polymère'),(10,'Boîte','Inspiration Lovecrafttienne - Cube de 12cm (env)',48,1,NULL,0,'Bois, Polymère');
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
INSERT INTO `artifacts_has_themes` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(1,3),(8,3),(9,3),(10,3),(8,5),(9,5),(10,5),(1,8),(8,8),(9,8),(10,8),(2,9),(3,9),(4,9),(5,9),(7,9);
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (25,25),(26,26);
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_has_artifacts`
--

LOCK TABLES `cart_has_artifacts` WRITE;
/*!40000 ALTER TABLE `cart_has_artifacts` DISABLE KEYS */;
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
  `description_event` longtext,
  `date_event_begginning` date NOT NULL,
  `date_event_end` date DEFAULT NULL,
  `place_event` varchar(55) NOT NULL,
  `picture_event` longtext,
  `archive_event` int DEFAULT NULL,
  `link_event` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'12ème Fête Médiévale de Mecquignies','Spectacles équestres, groupe de musique déambulatoire, marché d\'artisans et diverses animations sur les deux jours. Multiples restaurations sur site. Spectacle de feu le samedi soir.','2023-06-17','2023-06-18','Mecquignies (59)','https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/309273457_209649984750751_8782038235405505558_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vQ3IJvSYMroAX9AI6tW&_nc_ht=scontent-cdg4-1.xx&oh=00_AfDdYnKFSgsGkZFuVSlAPpaRx1ZRthvh7mBQThh-_10utA&oe=64202C62',0,'https://www.facebook.com/people/Medievale-Mecquignies/100071172511682/?paipv=0&eav=AfaCaEiDAPD9wjo2EjVzakMHH4owaEQScAI1mgG8yCM_97jwo6gAohFZoKeM2JLRdLs&_rdr'),(2,'Ludi Geek Festival 2023 - Festival du Jeu','Le temps d’un week-end, plongez dans la culture du comics, du manga et du jeu d’arcade','2023-10-28','2023-10-29','Halluin(59)','https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/326154842_1350127862498759_6220042926693798284_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=SmulDT5B5AYAX9UFBpb&_nc_oc=AQmWwQb_08hBYMMKnYN9PpNri2i-9K2cEixq8ZbW_27cBXvLpv4KbwmviafdaQrpTqRlyYd0G60rGFD_ICweynHX&_nc_ht=scontent-cdg4-1.xx&oh=00_AfBDKUzfHgkcz4sF5mgH34g_q0sld32lZ5l-3kTp8qrGNA&oe=641F4CF0',0,'https://www.facebook.com/Ludigeek'),(3,'OctoGônes 2022 - 13ème Convention du Jeu et de l\'Imaginaire','42 rue de maître Gurdil à partir de 11H stand 42 - prix','2022-12-25','2022-12-25','Arras (62)',NULL,0,'https://poefestinternational.com/'),(4,'Le salon fantastique 10ème édition','A l\'auberge du poney qui tousse à partir de 10H stand 42 -','2021-11-13','2021-11-13','Dunkerque (59)',NULL,0,'https://poefestinternational.com/'),(5,'Salon Fantastique et Japan Party','666 chemin de traverse à partir de 7h','2022-02-20','2022-02-20','Hazebrouck (59)',NULL,0,'https://poefestinternational.com/'),(6,'Middle Earth Festival','42 impasse du destin, parking payant','2023-01-08','2023-01-08','Lens (62)',NULL,0,'https://poefestinternational.com/');
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
  `num_cmd` bigint DEFAULT NULL,
  `comments_id` int DEFAULT NULL,
  `users_id` int NOT NULL,
  `orderAmount` double DEFAULT NULL,
  PRIMARY KEY (`id`,`users_id`),
  KEY `fk_commande_users1_idx` (`users_id`),
  KEY `fk_commandes_comments1_idx` (`comments_id`),
  CONSTRAINT `fk_commande_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_commandes_comments1` FOREIGN KEY (`comments_id`) REFERENCES `comments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
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
  `artifacts_id` int NOT NULL,
  PRIMARY KEY (`id`,`artifacts_id`),
  KEY `fk_pictures_artifacts1_idx` (`artifacts_id`),
  CONSTRAINT `fk_pictures_artifacts1` FOREIGN KEY (`artifacts_id`) REFERENCES `artifacts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pictures`
--

LOCK TABLES `pictures` WRITE;
/*!40000 ALTER TABLE `pictures` DISABLE KEYS */;
INSERT INTO `pictures` VALUES (1,'1CollierInspirationLovecrafitienne-1.png','/public/uploads/1CollierInspirationLovecrafitienne-1.png',1),(2,'1CollierInspirationLovecrafitienne-2.png','/public/uploads/1CollierInspirationLovecrafitienne-2.png',1),(3,'2CollierFongus-1.png','/public/uploads/2CollierFongus-1.png',2),(4,'2CollierFongus-2.png','/public/uploads/2CollierFongus-2.png',2),(5,'3ScultureFongus-1.png','/public/uploads/3ScultureFongus-1.png',3),(6,'3ScultureFongus-2.png','/public/uploads/3ScultureFongus-2.png',3),(7,'4BraceletLotus-1.png','/public/uploads/4BraceletLotus-1.png',4),(8,'4BraceletLotus-2.png','/public/uploads/4BraceletLotus-2.png',4),(9,'5RasDeCouVeuveNoire-1.png','/public/uploads/5RasDeCouVeuveNoire-1.png',5),(10,'5RasDeCouVeuveNoire-2.png','/public/uploads/5RasDeCouVeuveNoire-2.png',5),(11,'5RasDeCouVeuveNoire-3.png','/public/uploads/5RasDeCouVeuveNoire-3.png',5),(12,'6CollierPierreDeLune-1.png','/public/uploads/6CollierPierreDeLune-1.png',6),(13,'6CollierPierreDeLune-2.png','/public/uploads/6CollierPierreDeLune-2.png',6),(14,'8Necronomicon-1.png','/public/uploads/8Necronomicon-1.png',8),(15,'8Necronomicon-2.png','/public/uploads/8Necronomicon-2.png',8),(16,'8Necronomicon-3.png','/public/uploads/8Necronomicon-3.png',8),(17,'10BoiteLovecrafitienne-1.png','/public/uploads/10BoiteLovecrafitienne-1.png',10),(18,'10BoiteLovecrafitienne-2.png','/public/uploads/10BoiteLovecrafitienne-2.png',10),(20,'7CadreFongus-1.jpg','/public/uploads/7CadreFongus-1.jpg',7),(21,'7CadreFongus-2.jpg','/public/uploads/7CadreFongus-2.jpg',7),(22,'9CadreInspiLovecrafttienne-1.jpg','/public/uploads/9CadreInspiLovecrafttienne-1.jpg',9);
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
  `archive_theme` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_theme_UNIQUE` (`name_theme`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `themes`
--

LOCK TABLES `themes` WRITE;
/*!40000 ALTER TABLE `themes` DISABLE KEYS */;
INSERT INTO `themes` VALUES (1,'La fantasy','Les histoires fantastiques, qui mettent en scène des mondes imaginaires remplis de créatures magiques, de héros courageux et d\'aventures épiques, sont un sujet de prédilection pour les fans de la culture de l\'imaginaire. Des œuvres célèbres comme Le Seigneur des Anneaux de J.R.R. Tolkien, Harry Potter de J.K. Rowling et Le Trône de Fer de George R.R. Martin ont captivé des millions de lecteurs et de spectateurs.','/public/uploads/fantasy.png',0),(2,'La science-fiction','La science-fiction explore des mondes futuristes ou alternatifs, souvent peuplés d\'extraterrestres, de robots et de technologies avancées. Les thèmes abordés peuvent inclure la dystopie, l\'exploration spatiale, l\'intelligence artificielle, le voyage dans le temps et bien plus encore. Des œuvres célèbres comme 1984 de George Orwell, Blade Runner de Ridley Scott et La Guerre des étoiles de George Lucas ont inspiré des générations de fans de la culture de l\'imaginaire.','/public/uploads/sf.png',0),(3,'Les monstres','Les monstres ont une place importante dans la culture de l\'imaginaire, que ce soit dans les histoires d\'horreur, les films fantastiques ou les jeux vidéo. Les monstres peuvent prendre de nombreuses formes différentes, allant des créatures mythologiques comme les dragons et les minotaures aux monstres modernes tels que les vampires et les loups-garous. Des œuvres célèbres comme Frankenstein de Mary Shelley et la série de films Godzilla ont ouvert de nouvelles portes à des nouveaux monstres de l\'imaginaire.','/public/uploads/monstre.png',0),(4,'La magie','La magie est un thème courant dans la culture de l\'imaginaire, souvent associée à la fantasy. Les histoires de magie peuvent inclure des sorciers, des sortilèges, des artefacts magiques et des créatures mystiques. Des œuvres célèbres telles que la série Harry Potter de J.K. Rowling et la trilogie Le Magicien d\'Oz de L. Frank Baum ont captivé des millions de fans à travers le monde.','/public/uploads/magie.png',0),(5,'L\'occultisme','L\'occultisme est un domaine qui explore les forces mystérieuses et surnaturelles qui existent\nau-delà de la compréhension humaine. Les histoires d\'occultisme peuvent inclure des pratiques\nésotériques, des rituels magiques, des démons et des esprits. Des œuvres célèbres telles que le\nNécronomicon de H. P Lovecraft et la série TV Supernatural ont inspiré des fans de la culture de\nl\'imaginaire.\r','/public/uploads/occultisme.png',0),(6,'Les jeux vidéo','Les jeux vidéo sont une forme populaire de la culture de l\'imaginaire, offrant des\nexpériences immersives dans des mondes fantastiques et des scénarios passionnants. Les genres de jeux\nvidéo comprennent la fantasy, la science-fiction, les jeux de rôle et les jeux de survie. Des jeux célèbres\ncomme Final Fantasy, The Legend of Zelda et World of Warcraft ont captivé des millions de joueurs à\ntravers le monde.','/public/uploads/jeanxvideo.png',0),(7,'Les mangas et les animes','Les mangas et les animes sont des formes populaires de la culture de\nl\'imaginaire originaires du Japon. Les mangas sont des bandes dessinées japonaises, tandis que les\nanimes sont des séries animées. Les thèmes courants dans les mangas et les animes incluent la fantasy, la\nscience-fiction, l\'horreur et le surnaturel. Des œuvres célèbres telles que Dragon Ball, Naruto et Sailor\nMoon ont inspiré des fans du monde entier.','/public/uploads/manga.png',0),(8,'L\'horreur','L\'horreur est un autre thème populaire dans la culture de l\'imaginaire. Les histoires d\'horreur\nse concentrent souvent sur des événements effrayants et surnaturels, mettant en scène des créatures\nterrifiantes, des fantômes, des zombies, des monstres, des vampires et des loups-garous. Les œuvres\nd\'horreur peuvent également inclure des éléments de suspense, de mystère et de gore. Des œuvres\ncélèbres telles que les romans de H.P Lovecraft avec les Récits Horrifique présentant de nombreuses\ncréatures et mystère de l\'horreur, de Stephen King, le film The Shining de Stanley Kubrick, la série TV\nAmerican Horror Story et les jeux vidéo comme Resident Evil sont des célèbres pilier de l\'horreur.\r','/public/uploads/horreur.png',0),(9,'La féérie','Les histoires de féerie mettent souvent en scène des créatures fantastiques telles que les fées,\nles nymphes, les lutins, les elfes et les gnomes, ainsi que des mondes féériques remplis de magie et de\nmerveilles. Les histoires de féerie ont une longue histoire dans la littérature, remontant aux contes de fées\net aux légendes médiévales, et continuent d\'inspirer des œuvres populaires telles que la série TV\nOnceUpon a Time et le film Le Monde de Narnia. La féerie est donc un thème important dans la culture de\nl\'imaginaire, qui offre des possibilités infinies pour des histoires captivantes et des univers magiques.\r','/public/uploads/feerie.png',0),(10,'Le médiéval','Les histoires médiévales sont souvent ancrées dans un contexte historique et mettent en scène des rois, des chevaliers, des princesses et des batailles épiques. Les romans de fantasy médiévale tels que Le Seigneur des Anneaux de J.R.R. Tolkien et la série de George R.R. Martin, Le Trône de Fer, ont été particulièrement populaires ces dernières années, ainsi que des jeux vidéo comme Skyrim et des films comme Robin des Bois. Le thème médiéval offre des possibilités pour des histoires riches en personnages et en intrigue, et permet aux lecteurs, joueurs et spectateurs de s\'immerger dans un monde différent et fascinant.','/public/uploads/Medieval.png',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (25,NULL,'PANASTIER','Alexandra','baladeCaspienneFR@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$jDu/ZDpWOlMVru3bwmkURw$z+OL9dI1nNfcVD8JFmlp95R56eCAgDFsPHFr8CSjrUE',NULL,NULL,NULL,NULL,NULL,'Lille',NULL,NULL,NULL,NULL,NULL,NULL,1),(26,NULL,'DOE','John','dreamdev@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$d68ZGPQlaByKBhfTBICI6w$UjONUVL6i8K66OJwp9ZxewEytKfJPtr8QQAJ7/Qcp6s',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
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

-- Dump completed on 2023-03-29 18:50:01
