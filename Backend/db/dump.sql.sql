-- MySQL dump 10.13  Distrib 5.7.44, for osx10.19 (x86_64)
--
-- Host: localhost    Database: composite_materials
-- ------------------------------------------------------
-- Server version	5.7.44

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
-- Table structure for table `materials`
--

DROP TABLE IF EXISTS `materials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text,
  `image` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materials`
--

LOCK TABLES `materials` WRITE;
/*!40000 ALTER TABLE `materials` DISABLE KEYS */;
INSERT INTO `materials` VALUES (1,'стеклопластик','Композиционный материалов (пластических материалов), состоящих из стекловолокнистого наполнителя (стеклянное волокно, кварцевое волокно и др.) и связующего вещества (термореактивные и термопластичные полимеры). Это слоистый материал, наполнителем которого служит стекловолокно, а матрицей является фенолформальдегидная смола.',NULL),(2,'углепластик','Полимерный композитный материал из переплетённых нитей углеродного волокна, расположенных в матрице из полимерных (например, эпоксидных) смол. Основная составляющая часть углепластика — это нити углеродного волокна, состоящего в основном из атомов углерода',NULL),(3,'полиэтилен','Термопластичный полимер этилена, относится к классу полиолефинов[1]. Является органическим соединением.',NULL),(4,'полистирол','Продукт полимеризации стирола (винилбензола), термопластичный полимер линейной структуры.\n\n',NULL),(5,'оргпластик','Прозрачный твёрдый синтетический материал на основе органических полимеров, который в несколько раз легче обычного силикатного стекла, но вместе стем обладает практически той же степенью прозрачности и светопропускания.',NULL),(6,'текстолит','Электроизоляционный конструкционный материал, применяемый для производства подшипников скольжения, шестерён и других деталей, в электро- и радиотехнике.',NULL),(7,'боропласик','Содержат в кач-ве упрочняющего (армирующего) наполнителя борные волокнистые материалы.',NULL),(8,'керамика','Материалы, изготавливаемые из глин или их смесей с минеральными добавками (а иногда из других неорганических соединений) под воздействием высокой температуры с последующим охлаждением; а также изделия из таких материалов',NULL),(9,'карбон','Аналогично углепластику',NULL),(10,'металлосплав','Макроскопически однородный металлический материал из смеси двух или большего элементов с преобладанием металлических компонентов.\n\n',NULL),(11,'тест','описание','jaeyoung-geoffrey-kang-0bi-a4YDWXY-unsplash.jpg');
/*!40000 ALTER TABLE `materials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer` varchar(100) NOT NULL,
  `phone` varchar(14) DEFAULT NULL,
  `date` datetime NOT NULL,
  `product` varchar(100) NOT NULL,
  `amount` float NOT NULL,
  `price` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'composite_materials'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-08  2:50:56
