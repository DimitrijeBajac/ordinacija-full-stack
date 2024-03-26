-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: ordinacija
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `pacijenti`
--

DROP TABLE IF EXISTS `pacijenti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pacijenti` (
  `pacijent_id` bigint NOT NULL AUTO_INCREMENT,
  `broj_telefona` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `ime` varchar(255) DEFAULT NULL,
  `jmbg` varchar(255) DEFAULT NULL,
  `prezime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`pacijent_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `termini`
--

DROP TABLE IF EXISTS `termini`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `termini` (
  `termin_id` bigint NOT NULL AUTO_INCREMENT,
  `datumivreme` datetime(6) DEFAULT NULL,
  `status_termina` varchar(255) DEFAULT NULL,
  `trajanje_pregleda` int NOT NULL,
  `pacijent_id` bigint DEFAULT NULL,
  `zubar_id` bigint DEFAULT NULL,
  PRIMARY KEY (`termin_id`),
  KEY `FK5h59csb5j78vgqpn6i948as8m` (`pacijent_id`),
  KEY `FK3ytiy0y2cuj8jvt7ayehyqqwn` (`zubar_id`),
  CONSTRAINT `FK3ytiy0y2cuj8jvt7ayehyqqwn` FOREIGN KEY (`zubar_id`) REFERENCES `zubar` (`zubar_id`),
  CONSTRAINT `FK5h59csb5j78vgqpn6i948as8m` FOREIGN KEY (`pacijent_id`) REFERENCES `pacijenti` (`pacijent_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `zubar`
--

DROP TABLE IF EXISTS `zubar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zubar` (
  `zubar_id` bigint NOT NULL AUTO_INCREMENT,
  `ime` varchar(255) DEFAULT NULL,
  `kod_za_prijavu` varchar(255) DEFAULT NULL,
  `prezime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`zubar_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-28 18:43:12
