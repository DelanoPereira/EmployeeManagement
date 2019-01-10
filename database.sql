-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: employee_management
-- ------------------------------------------------------
-- Server version	5.1.53-community-log

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
-- Table structure for table `contact_details`
--

DROP TABLE IF EXISTS `contact_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact_details` (
  `contact_details_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `contact_details_email` varchar(20) DEFAULT NULL,
  `contact_detail_telephone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`contact_details_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_details`
--

LOCK TABLES `contact_details` WRITE;
/*!40000 ALTER TABLE `contact_details` DISABLE KEYS */;
INSERT INTO `contact_details` VALUES (1,'u@m.com','00'),(2,'delano.dc@gmail.com','345678'),(3,'w@m.com','999'),(4,'n@m.com','789'),(5,'q@g.com','123456789'),(6,'y@m.com','2345678');
/*!40000 ALTER TABLE `contact_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `employee_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `employee_firstname` varchar(20) DEFAULT NULL,
  `employee_lastname` varchar(20) DEFAULT NULL,
  `employee_address` bigint(20) DEFAULT NULL,
  `employee_contact_details` bigint(20) DEFAULT NULL,
  `employee_social_media_address` bigint(20) DEFAULT NULL,
  `employee_number` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  KEY `FK4722E6AE7E149238` (`employee_social_media_address`),
  KEY `FK4722E6AE8506EB26` (`employee_address`),
  KEY `FK4722E6AE641274E5` (`employee_contact_details`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'UUU','UUU',1,1,1,'1546951478622'),(2,'Delano','Pereira',2,2,2,'1546952349696'),(3,'DDDD','DDDD',3,3,3,'1546952953061'),(4,'T','Bj',4,4,4,'1546953356450'),(5,'Fabrice','Deg',5,5,5,'1546956688857'),(6,'Jimmy','Tshi',6,6,6,'1547015291174');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_address`
--

DROP TABLE IF EXISTS `employee_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee_address` (
  `employee_address_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `employee_address_city` varchar(20) DEFAULT NULL,
  `employee_address_country` varchar(20) DEFAULT NULL,
  `employee_address_state` varchar(20) DEFAULT NULL,
  `employee_address_street` varchar(20) DEFAULT NULL,
  `employee_address_zip_code` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`employee_address_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_address`
--

LOCK TABLES `employee_address` WRITE;
/*!40000 ALTER TABLE `employee_address` DISABLE KEYS */;
INSERT INTO `employee_address` VALUES (1,'u','u','u','u','u'),(2,'a','a','','S','a'),(3,'k','k','k','Dq','k'),(4,'jn','j','jnjn','njnjn','jn'),(5,'y','y','y','m','y'),(6,'y','y','y','y','y');
/*!40000 ALTER TABLE `employee_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_media_address`
--

DROP TABLE IF EXISTS `social_media_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `social_media_address` (
  `social_media_address_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `social_media_address_name` varchar(20) DEFAULT NULL,
  `social_media_address_url` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`social_media_address_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_media_address`
--

LOCK TABLES `social_media_address` WRITE;
/*!40000 ALTER TABLE `social_media_address` DISABLE KEYS */;
INSERT INTO `social_media_address` VALUES (1,'000','00'),(2,'gvg','gvg'),(3,'88','9'),(4,'89','89'),(5,'iii','iii'),(6,'gggh','ghgh');
/*!40000 ALTER TABLE `social_media_address` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-09  8:40:34
