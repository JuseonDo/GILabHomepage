-- MySQL dump 10.13  Distrib 8.0.42, for Linux (x86_64)
--
-- Host: localhost    Database: gilab
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `id` varchar(36) NOT NULL,
  `name` text NOT NULL,
  `homepage` text,
  `publicationId` varchar(36) NOT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `publicationId` (`publicationId`),
  KEY `ix_authors_id` (`id`),
  CONSTRAINT `authors_ibfk_1` FOREIGN KEY (`publicationId`) REFERENCES `publications` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES ('013814bc-e9d5-45be-aa08-438067fe8b65','Young-in Song','','96657047-0d3f-4a6e-8fc4-3407646be955',3),('06528c16-0244-4268-a8fc-278ed93ca5cb','Manabu Okumura','','3c019185-4a05-41ed-9c27-253670fe7c69',3),('07dcb0af-212f-48b8-b91c-292ac2a84a2e','Eun-Sun Cho*','','1d824f4b-6282-4ad2-9c03-1f040b289742',3),('0c05ce98-8a71-4203-93ee-b7ebf16e7536','Manabu Okumura','','29deb22e-fbef-4a38-9cf6-aa653e8862e0',4),('0ca65e94-bc49-469f-9531-653a3e19183d','<strong>Jingun Kwon*</strong>','','29deb22e-fbef-4a38-9cf6-aa653e8862e0',2),('15eee78b-a184-4cbe-88a0-0fedb4f8db1f','<strong><u>Dasom Choi†</u></strong>','','03635a45-cca0-43bf-971e-31645919d499',1),('17bee6aa-5d00-4c67-b3f4-0f8470693eca','<strong>Jingun Kwon</strong>','','57647e91-1f09-49a2-a153-ce86cbee9ebd',0),('22b63675-1123-46b2-8578-69bf4c4889bf','Hidetaka Kamigaito','','b8eaf74d-b35d-42fd-9df2-c274ee1c328e',0),('2b37be5a-8b7b-4162-add6-8f10bc7e6db8','Hidetaka Kamigaito','','29deb22e-fbef-4a38-9cf6-aa653e8862e0',3),('2bd014c8-4085-4f76-9845-0eea299c264f','<strong><u>Juseon Do</u></strong>','','f744b2b6-2ff8-4a35-ad20-d37424e06b8a',0),('30f03397-199b-43c5-b160-27cab6de1dba','Hidetaka Kamigaito','','3c019185-4a05-41ed-9c27-253670fe7c69',1),('384256bb-5834-416d-ba4d-a24517af2776','<strong>Jingun Kwon</strong>','','3c019185-4a05-41ed-9c27-253670fe7c69',0),('388afc77-bc0a-4166-9ed4-0de251ce859c','Hiroya Takamura','','854fbe19-5d2b-4412-abee-236618aca8cc',3),('39bcb56c-3f89-49ce-bc24-d7264c6a8cd7','Hidetaka Kamigaito','','2d211726-ad28-4e51-b0af-f4f5977c8c74',1),('4767e81f-2f50-41d1-bfa8-dbf1d66448b6','<strong>Jingun Kwon</strong>','','2d211726-ad28-4e51-b0af-f4f5977c8c74',0),('480ba15e-4f4a-49db-8562-1e0a5ec22485','Manabu Okumura','','96657047-0d3f-4a6e-8fc4-3407646be955',2),('562dbc48-07da-4642-a68a-801fd8f3be9b','Naoki Kobayashi','','57647e91-1f09-49a2-a153-ce86cbee9ebd',1),('5f73badf-4ea4-4034-9a45-670be9f497ea','Hidetaka Kamigaito','','f744b2b6-2ff8-4a35-ad20-d37424e06b8a',2),('7dbdf2f0-d746-428f-839c-1497326f8264','Hidetaka Kamigaito','','96657047-0d3f-4a6e-8fc4-3407646be955',1),('7e7bfc6a-2dda-4553-88a0-b00479794bee','Young-In Song','','2d211726-ad28-4e51-b0af-f4f5977c8c74',2),('8534dc7c-0cd4-4913-ab85-6bbdd0a14c31','Hidetaka Kamigaito','','03635a45-cca0-43bf-971e-31645919d499',3),('8734d5f3-21d2-40fb-9bb5-81e14a49ac40','Manabu Okumura','','03635a45-cca0-43bf-971e-31645919d499',4),('886ffbc7-889e-4dae-b90a-4fa423ed5cf6','Hidetaka Kamigaito','','57647e91-1f09-49a2-a153-ce86cbee9ebd',2),('8ff98d4d-9765-4e15-9cc2-d731bc005d87','<strong>Jingun Kwon*<strong>','','03635a45-cca0-43bf-971e-31645919d499',2),('970ed9c8-9df8-475c-a502-f4038a3ed539','<strong><u>Jaesung Hwang†</u></strong>','','29deb22e-fbef-4a38-9cf6-aa653e8862e0',1),('973e9648-579b-4f01-9cb5-b026b846643a','Hidetaka Kamigaito','','854fbe19-5d2b-4412-abee-236618aca8cc',2),('9ab99cea-a17c-4b86-a70b-cd64b2cbd587','Joon-Young Paik','','1d824f4b-6282-4ad2-9c03-1f040b289742',1),('a480ad5a-4957-40d6-8c79-09c9c122ec40','Manabu Okumura','','854fbe19-5d2b-4412-abee-236618aca8cc',4),('a7e8e6e2-bffa-47b5-a260-9d0af1080cf5','Youjeong Noh','','1d824f4b-6282-4ad2-9c03-1f040b289742',0),('acc2914f-5fd1-4d8b-b55b-2f5afe62922a','Hiroya Takamura','','3c019185-4a05-41ed-9c27-253670fe7c69',2),('ad074ce3-9426-4c81-bca5-d84da13c2baa','<strong>Jingun Kwon</strong>','','854fbe19-5d2b-4412-abee-236618aca8cc',0),('b1ea24df-22a1-4a97-ba2f-5eebcaa5faba','<strong><u>Sangjun Moon†</u></strong>','','03635a45-cca0-43bf-971e-31645919d499',0),('b362c9ee-f1af-4052-aaf0-482be51bbb45','Manabu Okumura','','2d211726-ad28-4e51-b0af-f4f5977c8c74',3),('b4fd8b05-19d3-4d1d-97af-a0caa3d589e8','Manabu Okumura','','57647e91-1f09-49a2-a153-ce86cbee9ebd',3),('b549e812-2d00-4b61-8fba-6d4ea6388d56','Naoki Kobayashi','','3c019185-4a05-41ed-9c27-253670fe7c69',4),('b629d7f9-cf42-4034-9a38-9cbe9115a3ef','Manabu Okumura','','b8eaf74d-b35d-42fd-9df2-c274ee1c328e',3),('bb4de30c-7b94-4719-97cb-382c8ca8cb04','Manabu Okumura','','f744b2b6-2ff8-4a35-ad20-d37424e06b8a',3),('bc37a580-50e8-4667-bcbb-a6262b95800e','<strong>Jingun Kwon*</strong>','','1d824f4b-6282-4ad2-9c03-1f040b289742',2),('c353fd61-4548-4042-bb07-26f6f29c6e26','Kobayashi Naoki','','854fbe19-5d2b-4412-abee-236618aca8cc',1),('cb8fecee-786e-4bdd-8e08-c093428ea7b9','<strong><u>Juseon Do†</u></strong>','','29deb22e-fbef-4a38-9cf6-aa653e8862e0',0),('cbebc98e-d338-4b5f-86bd-29802c650382','Young-In Song','','b8eaf74d-b35d-42fd-9df2-c274ee1c328e',2),('db3b92ff-75e8-4bec-973c-545ce11e0ee7','<strong>Jingun Kwon</strong>','','b8eaf74d-b35d-42fd-9df2-c274ee1c328e',1),('dee7ba65-95fe-448a-ae8f-c8724a329f94','<strong>Jingun Kwon*</strong>','','f744b2b6-2ff8-4a35-ad20-d37424e06b8a',1),('e8140e14-932a-4d35-861b-f260dc541847','Manabu Okumura','','ea9b2f8d-d0f6-4a74-b896-be8caaf9a755',2),('ee9ca534-25e5-498f-91fb-33c62da68bb3','Hidetaka Kamigaito','','ea9b2f8d-d0f6-4a74-b896-be8caaf9a755',1),('ef928349-f878-451d-98ee-ffd6d369be7e','<strong>Jingun Kwon</strong>','','ea9b2f8d-d0f6-4a74-b896-be8caaf9a755',0),('f3d2be43-7410-440f-8186-fd6a560aa900','<strong>Jingun Kwon</strong>','','96657047-0d3f-4a6e-8fc4-3407646be955',0);
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lab_info`
--

DROP TABLE IF EXISTS `lab_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lab_info` (
  `id` varchar(36) NOT NULL,
  `labName` text NOT NULL,
  `principalInvestigator` text NOT NULL,
  `piTitle` text NOT NULL,
  `piEmail` varchar(255) DEFAULT NULL,
  `piPhone` varchar(50) DEFAULT NULL,
  `piPhoto` text,
  `piBio` text,
  `description` text,
  `address` text NOT NULL,
  `latitude` text,
  `longitude` text,
  `building` text,
  `room` text,
  `university` text NOT NULL,
  `department` text NOT NULL,
  `website` text,
  `establishedYear` varchar(10) DEFAULT NULL,
  `researchFocus` text,
  `contactEmail` varchar(255) NOT NULL,
  `contactPhone` varchar(50) DEFAULT NULL,
  `officeHours` text,
  `createdAt` datetime NOT NULL DEFAULT (now()),
  `updatedAt` datetime NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lab_info`
--

LOCK TABLES `lab_info` WRITE;
/*!40000 ALTER TABLE `lab_info` DISABLE KEYS */;
INSERT INTO `lab_info` VALUES ('lab_settings','Generative Intelligence Lab','Jingun Kwon','Assistant Professor','jingun.kwon@cnu.ac.kr','+82 42-821-5449','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/da41eb30e9404907b150c5605404a82d.jpeg','','<p><strong>Work Experience</strong></p><ul><li>Assistant Professor, Department of Artificial Intelligence, CNU&nbsp;(2023.09.01~<em>present</em>)</li><li>Applied Research Scientist, Search cic, NAVER (2022.06.16~2023.08.16,&nbsp;<em>full-time</em>)</li><li>National Assembly of the Republic of Korea (2016.06~2016.08,&nbsp;<em>intern</em>)</li></ul><p><strong>Education</strong></p><ul><li>Ph.D. in Information and Communications Engineering, Tokyo Institute of Technology, 2021.12.31 (Advisor:&nbsp;<a href=\"https://lr-www.pi.titech.ac.jp/wp/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 101, 128);\">Manabu Okumura</a>,&nbsp;<a href=\"https://sites.google.com/view/hjtakamura/home?authuser=0\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">Hiroya Takamura</a>,&nbsp;<a href=\"https://sites.google.com/site/hidetakakamigaito\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">Hidetaka Kamigaito</a>)</li><li>M.E. in Information and Communications Engineering, Tokyo Institute of Technology, 2020.03.26 (Advisor: Manabu Okumura)</li><li>B.S. in Statistics, University of California, Los Angeles (UCLA), 2018.03.24</li></ul><p><span style=\"color: rgb(0, 0, 0);\">✉️&nbsp;&nbsp;</span><a href=\"mailto:jingun.kwon@cnu.ac.kr\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">jingun.kwon@cnu.ac.kr</a><span style=\"color: rgb(0, 0, 0);\">&nbsp;📍&nbsp;Room W2-512</span></p><p>Welcome to the Generative Intelligence Lab at Chungnam National University.&nbsp;Our lab performs cutting-edge research in applied problems in&nbsp;<strong>natural language processing</strong>.&nbsp;&nbsp;<span style=\"color: rgb(0, 0, 0);\">&nbsp;</span></p>','대전 유성구 대학로 99','36.3504','127.3845','공과대학5호관','Room W2-512','Chungnam National University','Artificial Intelligence, Compputer Science','','2025','','jingun.kwon@cnu.ac.kr','+82 42-821-5449','','2025-09-04 13:16:46','2025-09-06 10:46:55');
/*!40000 ALTER TABLE `lab_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(1024) DEFAULT NULL,
  `homepage` varchar(1024) DEFAULT NULL,
  `degree` varchar(50) NOT NULL,
  `joinedAt` varchar(100) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `bio` text,
  `researchInterests` text,
  `createdAt` datetime NOT NULL DEFAULT (now()),
  `updatedAt` datetime NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES ('01d4a6d0-d699-458a-82c5-3f99aada983e','한승우','77sungwhan@o.cnu.ac.kr','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/2e95a4dae0764ece90d9740b4d90ef59.jpg','https://github.com/HanSungwoo','bachelors','Mar. 2023 ~ Current','current','',NULL,'2025-09-04 13:29:38','2025-09-04 13:29:38'),('07241990-5203-4ab4-b36b-d627293be394','도주선','doju00@o.cnu.ac.kr','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/02aea4cf5efd497e915ea5dfafc6e0a6.jpg','https://github.com/JuseonDo','bachelors','Nov. 2023 ~ Current','current','',NULL,'2025-09-04 13:27:47','2025-09-04 13:27:47'),('114677b7-a679-4d59-97bd-345951ed64b5','문상준','202550430@o.cnu.ac.kr','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/eb43b8b660c7451eb9a1fe31f3805485.jpg','https://github.com/Mcat00','masters','Mar. 2025 ~ Current','Naver Internship','',NULL,'2025-09-04 13:14:08','2025-09-04 13:14:08'),('a2c63ec3-9a6c-4a11-a39b-a7276a395734','최다솜','somcandy08@o.cnu.ac.kr','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/d5c289d467e441858866c9807fc3f6d2.jpg','https://github.com/somcandy08','masters','Mar. 2025 ~ Current','LG AI Research Internship','',NULL,'2025-09-04 13:23:20','2025-09-04 13:23:20');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` varchar(36) NOT NULL,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `summary` text,
  `imageUrl` text,
  `publishedAt` datetime NOT NULL DEFAULT (now()),
  `authorId` varchar(36) NOT NULL,
  `isPublished` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT (now()),
  `updatedAt` datetime NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  KEY `authorId` (`authorId`),
  KEY `ix_news_id` (`id`),
  CONSTRAINT `news_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES ('168489af-50f0-4e97-ad9e-d6e57bb1bbb1','[2025.05] [ACL2025] One paper accepted to ACL2025 findings (Short).','','','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/38d347ee3a6d43a78b020bc6337e96e8.png','2025-09-05 05:21:11','9065baac-3c30-454e-b986-ade4508326dd',1,'2025-09-05 05:21:11','2025-09-05 05:21:11'),('2dd35a77-5acf-468a-9b81-09dab84286b7','[2025.05] M1 문상준 NAVER 인턴 합격을 축하합니다! (2025.5.26~8.20)','','','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/17899791fdbc4dd4ab20e9c1d4224ca7.png','2025-09-05 05:21:21','9065baac-3c30-454e-b986-ade4508326dd',1,'2025-09-05 05:21:21','2025-09-05 05:22:11'),('2e9186da-b4ea-4223-9a14-bddc3efcbbe2','[2025.07] M1 최다솜 LG AI Research 인턴 합격을 축하합니다! (2025.7.28~2026.1.28)','','','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/5022171ce3164c8e869c468a558ac16f.png','2025-09-05 05:22:44','9065baac-3c30-454e-b986-ade4508326dd',1,'2025-09-05 05:22:44','2025-09-05 05:22:44'),('78fbedfc-db04-4d2a-aaa1-411f20909c56','[2024.05] [ACL2024] One paper accepted to ACL2024 findings (Long).','<p>Computer Science 분야 우수국제학술대회인</p><p>ACL2024(The 62nd Annual Meeting of the Association for Computational Linguistics)</p><p>에서 논문을 발표한 도주선 학생을 소개합니다.</p><p><br></p><p><strong>저자: 도주선</strong>(학사과정 기계공학부, 인공지능학과 복수전공),&nbsp;<strong>지도교수 권진근</strong>(인공지능학과),</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Hidetaka Kamigaito</strong>&nbsp;(나라선단과학기술대학),&nbsp;<strong>Manabu Okumura</strong>&nbsp;(도쿄공업대학)</p><p><br></p><p>논문제목: InstructCMP: Length Control in Sentence Compression through Instruction-based Large Language Models</p><p>학술지명: The 62nd Annual Meeting of the Association for Computational Linguistics</p><p>발표일자: 2024.8.11.</p>','','http://localhost:8000/static/uploads/3f46040414ab498d987203141e049b4a.png','2025-09-05 04:53:08','9065baac-3c30-454e-b986-ade4508326dd',1,'2025-09-05 04:53:08','2025-09-06 10:44:20'),('7cb7ed63-b07c-421f-a15e-f3716764a46b','[2025.01] [NAACL2025] One paper accepted to NAACL2025 findings (Short).','<p>Computer Science 분야 우수국제학술대회인</p><p>NAACL2025(2025 Annual Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics)에서 논문을 발표한 도주선 학생을 소개합니다.</p><p><br></p><p><strong>저자: 도주선</strong>(학사과정 기계공학부, 인공지능학과 복수전공), 황재성<span style=\"color: rgb(15, 20, 25);\">(학사과정 인공지능학과),</span>&nbsp;<strong>지도교수 권진근</strong>(인공지능학과),</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Hidetaka Kamigaito</strong>&nbsp;(나라선단과학기술대학),&nbsp;<strong>Manabu Okumura</strong>&nbsp;(도쿄공업대학)</p><p><br></p><p>논문제목: Considering Length Diversity in Retrieval-Augmented Summarization</p><p>학술지명: 2025 Annual Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics</p><p>발표일자: 2025.4.29.</p>','','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/82c5a8314faa49bb9ce789c37c798ceb.png','2025-09-05 05:16:44','9065baac-3c30-454e-b986-ade4508326dd',1,'2025-09-05 05:16:44','2025-09-05 05:20:22'),('d8b4a5f6-3907-444a-be6d-5cac5848f215','[2025.08] [EMNLP2025] One paper accepted to EMNLP2025 findings (Long).','','','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/d42ea28b9e344c2b9d731c32e0481070.png','2025-09-05 05:23:05','9065baac-3c30-454e-b986-ade4508326dd',1,'2025-09-05 05:23:05','2025-09-05 05:23:05');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publications`
--

DROP TABLE IF EXISTS `publications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publications` (
  `id` varchar(36) NOT NULL,
  `title` text NOT NULL,
  `journal` text,
  `conference` text,
  `year` int DEFAULT NULL,
  `type` varchar(32) NOT NULL,
  `abstract` text NOT NULL,
  `pdfUrl` text,
  `imageUrl` text,
  `order` int NOT NULL,
  `authorId` varchar(36) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  KEY `authorId` (`authorId`),
  KEY `ix_publications_id` (`id`),
  CONSTRAINT `publications_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publications`
--

LOCK TABLES `publications` WRITE;
/*!40000 ALTER TABLE `publications` DISABLE KEYS */;
INSERT INTO `publications` VALUES ('03635a45-cca0-43bf-971e-31645919d499','Length Representations in Large Language Models','','EMNLP 2025',2025,'conference','<p>Large language models (LLMs) have shown remarkable capabilities across various tasks, that are learned from massive amounts of text-based data. Although LLMs can control output sequence length, particularly in instruction-based settings, the internal mechanisms behind this control have been unexplored yet. In this study, we provide empirical evidence on how output sequence length information is encoded within the internal representations in LLMs. In particular, our findings show that multi-head attention mechanisms are critical in determining output sequence length, which can be adjusted in a disentangled manner. By scaling specific hidden units within the model, we can control the output sequence length without losing the informativeness of the generated text, thereby indicating that length information is partially disentangled from semantic information. Moreover, some hidden units become increasingly active as prompts become more length-specific, thus reflecting the model’s internal awareness of this attribute. Our findings suggest that LLMs have learned robust and adaptable internal mechanisms for controlling output length without any external control.</p>','https://arxiv.org/pdf/2507.20398','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/ef41f08f0ff846bb9f145f7f0f1c75ee.png',0,'9065baac-3c30-454e-b986-ade4508326dd','2025-09-05 07:20:11'),('1d824f4b-6282-4ad2-9c03-1f040b289742','gMBA: Expression Semantic Guided Mixed Boolean-Arithmetic Deobfuscation Using Transformer Architectures','','ACL 2025',2025,'conference','<p>Mixed Boolean-Arithmetic (MBA) obfuscation protects intellectual property by converting programs into forms that are more complex to analyze. However, MBA has been increasingly exploited by malware developers to evade detection and cause significant real-world problems. Traditional MBA deobfuscation methods often consider these expressions as part of a black box and overlook their internal semantic information. To bridge this gap, we propose a truth table, which is an automatically constructed semantic representation of an expression’s behavior that does not rely on external resources. The truth table is a mathematical form that represents the output of expression for all possible combinations of input. We also propose a general and extensible guided MBA deobfuscation framework (gMBA) that modifies a Transformer-based neural encoderdecoder Seq2Seq architecture to incorporate this semantic guidance. Experimental results and in-depth analysis show that integrating expression semantics significantly improves performance and highlights the importance of internal semantic expressions in recovering obfuscated code to its original form.</p>','https://aclanthology.org/2025.findings-acl.1127.pdf','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/3663609309f34f8ca61581afd7352d88.png',1,'9065baac-3c30-454e-b986-ade4508326dd','2025-09-05 07:17:49'),('29deb22e-fbef-4a38-9cf6-aa653e8862e0','Considering Length Diversity in Retrieval-Augmented Summarization','','NAACL 2025',2025,'conference','<p>This study investigates retrieval-augmented summarization by specifically examining the impact of exemplar summary lengths under length constraints, not covered by previous work. We propose a Diverse Length-aware Maximal Marginal Relevance (DL-MMR) algorithm to better control summary lengths. This algorithm combines the query relevance with diverse target lengths in retrieval-augmented summarization. Unlike previous methods that necessitate exhaustive exemplar-exemplar relevance comparisons using MMR, DL-MMR considers the exemplar target length as well and avoids comparing exemplars to each other, thereby reducing computational cost and conserving memory during the construction of an exemplar pool. Experimental results showed the effectiveness of DL-MMR, which considers length diversity, compared to the original MMR algorithm. DL-MMR additionally showed the effectiveness in memory saving of 781,513 times and computational cost reduction of 500,092 times, while maintaining the same level of informativeness.</p>','https://aclanthology.org/2025.findings-naacl.134.pdf','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/28a8e6dedc5e4c5893b5d19553ef2703.png',2,'9065baac-3c30-454e-b986-ade4508326dd','2025-09-05 07:15:43'),('2d211726-ad28-4e51-b0af-f4f5977c8c74','Hierarchical Label Generation for Text Classification','','EACL 2023',2023,'conference','<p>Hierarchical text classification (HTC) aims to assign the most relevant labels with the hierarchical structure to an input text. However, handling unseen labels with considering a label hierarchy is still an open problem for real-world applications because traditional HTC models employ a pre-defined label set. To deal with this problem, we propose a generation-based classifier that leverages a Seq2Seq framework to capture a label hierarchy and unseen labels explicitly. Because of no available social media datasets that target at HTC, we constructed a new (Blog) dataset using pairs of social media posts and their hierarchical topic labels. Experimental results on the Blog dataset showed the effectiveness of our generation-based classifier over state-of-the-art baseline models. Human evaluation results showed that the quality of generated unseen labels outperforms even the gold labels.</p>','https://aclanthology.org/2023.findings-eacl.46.pdf','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/fc1efadec9a64495aea70f69552ad354.png',1,'9065baac-3c30-454e-b986-ade4508326dd','2025-09-04 13:56:02'),('3c019185-4a05-41ed-9c27-253670fe7c69','Bridging Between Emojis and Kaomojis by Learning Their Representations from Linguistic and Visual Information','','IEEE/WIC/ACM 2019',2019,'conference','<p><span style=\"color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);\">Small images of emojis have unique characteristics as additional information in understanding writers\' intentions. They enable social media users to emphasize their emotions and to express gestural movements in their posts. In addition to emojis, kaomojis (emoticons or facemarks) also behave in a similar way. They are composed of a sequence of characters, which are popularized especially in Asian countries. Although both emojis and kaomojis fulfill similar functions and share the same meaning that can be clues in opinion mining or sentiment analysis, the previous researches have been biased to explore emojis and kaomojis separately. In this paper, we align emojis and kaomojis together as a single token in the Japanese context to offer a bridge between them. Specifically, we aim to judge whether emojis and kaomojis share the same meaning or are similar with each other. We assume that emojis and kaomojis are both a single word in order to obtain their linguistic information with the skip-gram model. Furthermore, we present a new approach to consider the appearances of emojis and kaomojis in themselves, meaning that we explore the information of their visually similar shapes. We regard both of them as a single image to take into account their visual information with the CNN model. We merge two different perspectives toward emojis and kaomojis by exploring their linguistic and visual information simultaneously on the same space. The experimental results showed that we can align an unlimited number of emojis and kaomojis together with their representations (embeddings), and adding the visual information to the linguistic information can improve their representations.</span></p>','https://ieeexplore.ieee.org/document/8909533','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/2ddf2af4d5b24c2abc3e8414f43cce58.png',0,'9065baac-3c30-454e-b986-ade4508326dd','2025-09-04 13:35:57'),('57647e91-1f09-49a2-a153-ce86cbee9ebd','Considering Nested Tree Structure in Sentence Extractive Summarization with Pre-trained Transformer','','EMNLP 2021',2021,'conference','<p>Sentence extractive summarization shortens a document by selecting sentences for a summary while preserving its important contents. However, constructing a coherent and informative summary is difficult using a pre-trained BERT-based encoder since it is not explicitly trained for representing the information of sentences in a document. We propose a nested tree-based extractive summarization model on RoBERTa (NeRoBERTa), where nested tree structures consist of syntactic and discourse trees in a given document. Experimental results on the CNN/DailyMail dataset showed that NeRoBERTa outperforms baseline models in ROUGE. Human evaluation results also showed that NeRoBERTa achieves significantly better scores than the baselines in terms of coherence and yields comparable scores to the state-of-the-art models.</p>','https://aclanthology.org/2021.emnlp-main.330.pdf','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/347375e9204248138fd04f592fd4bae5.png',0,'9065baac-3c30-454e-b986-ade4508326dd','2025-09-04 13:51:15'),('854fbe19-5d2b-4412-abee-236618aca8cc','Joint Modeling of Emoji Position and Its Label for Better Understanding in Social Media','Journal of Natural Language Processing','',2022,'journal','<p>In social media, the frequent use of small images, called emojis, in posts has played a key role in recent communications. However, less attention has been paid to their positions in the given texts although users are known to carefully choose and place emojis that match their post. Exploring the position of emojis in texts is expected to enhance our understanding of the relationship between emojis and texts. In this paper, we propose a novel task of inserting an emoji at a position in a given tweet. We extend an emoji label prediction method considering the information of emoji positions, by jointly learning the emoji position in a tweet to predict the emoji la- bel. Additional information on emoji position can improve the performance of emoji prediction. Human evaluations validate the existence of a suitable emoji position in a tweet. The proposed task makes tweets fancier and more natural. In addition, the emoji position can further improve the performance of irony detection compared to emoji label prediction. We also report the experimental results for the modiﬁed dataset, due to the problem of the original dataset for the ﬁrst shared task to predict an emoji label in SemEval 2018.</p>','https://www.jstage.jst.go.jp/article/jnlp/29/2/29_467/_article/-char/ja','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/c32d6d798b91496a81471c5f1683be93.png',0,'9065baac-3c30-454e-b986-ade4508326dd','2025-09-04 13:54:21'),('96657047-0d3f-4a6e-8fc4-3407646be955','Hierarchical Trivia Fact Extraction from Wikipedia Articles','','Coling 2020',2020,'conference','<p>Recently, automatic trivia fact extraction has attracted much research interest. Modern search engines have begun to provide trivia facts as the information for entities because they can motivate more user engagement. In this paper, we propose a new unsupervised algorithm that automatically mines trivia facts for a given entity. Unlike previous studies, the proposed algorithm targets at a single Wikipedia article and leverages its hierarchical structure via top-down processing. Thus, the proposed algorithm offers two distinctive advantages: it does not incur high computation time, and it provides a domain-independent approach for extracting trivia facts. Experimental results demonstrate that the proposed algorithm is over 100 times faster than the existing method which considers Wikipedia categories. Human evaluation demonstrates that the proposed algorithm can mine better trivia facts regardless of the target entity domain and outperforms the existing methods.</p>','https://aclanthology.org/2020.coling-main.424.pdf','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/d9c30066cc054dda8356b5f0dfb7dd09.png',0,'9065baac-3c30-454e-b986-ade4508326dd','2025-09-04 13:38:01'),('b8eaf74d-b35d-42fd-9df2-c274ee1c328e','A New Surprise Measure for Extracting Interesting Relationships between Persons','','EACL 2021',2021,'conference','<p>One way to enhance user engagement in search engines is to suggest interesting facts to the user. Although relationships between persons are important as a target for text mining, there are few effective approaches for extracting the interesting relationships between persons. We therefore propose a method for extracting interesting relationships between persons from natural language texts by focusing on their surprisingness. Our method first extracts all personal relationships from dependency trees for the texts and then calculates surprise scores for distributed representations of the extracted relationships in an unsupervised manner. The unique point of our method is that it does not require any labeled dataset with annotation for the surprising personal relationships. The results of the human evaluation show that the proposed method could extract more interesting relationships between persons from Japanese Wikipedia articles than a popularity-based baseline method. We demonstrate our proposed method as a chrome plugin on google search.</p>','https://aclanthology.org/2021.eacl-demos.27v2.pdf','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/970b831ea8704881b60e3a53ac6b0ad0.png',1,'9065baac-3c30-454e-b986-ade4508326dd','2025-09-04 13:43:08'),('ea9b2f8d-d0f6-4a74-b896-be8caaf9a755','Abstractive Document Summarization with Summary-length Prediction','','EACL 2023',2023,'conference','<p>Recently, we can obtain a practical abstractive document summarization model by finetuning a pre-trained language model (PLM). Since the pre-training for PLMs does not consider summarization-specific information such as the target summary length, there is a gap between the pre-training and fine-tuning for PLMs in summarization tasks. To fill the gap, we propose a method for enabling the model to understand the summarization-specific information by predicting the summary length in the encoder and generating a summary of the predicted length in the decoder in fine-tuning. Experimental results on the WikiHow, NYT, and CNN/DM datasets showed that our methods improve ROUGE scores from BART by generating summaries of appropriate lengths. Further, we observed about 3.0, 1,5, and 3.1 point improvements for ROUGE-1, -2, and - L, respectively, from GSum on the WikiHow dataset. Human evaluation results also showed that our methods improve the informativeness and conciseness of summaries.</p>','https://aclanthology.org/2023.findings-eacl.45.pdf','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/6bbedde0f12f41bc82d53282c3160de1.png',0,'9065baac-3c30-454e-b986-ade4508326dd','2025-09-04 13:57:32'),('f744b2b6-2ff8-4a35-ad20-d37424e06b8a','InstructCMP: Length Control in Sentence Compression through Instruction-based Large Language Models','','ACL 2024',2024,'conference','<p>Extractive summarization can produce faithful summaries but often requires additional constraints such as a desired summary length. Traditional sentence compression models do not typically consider the constraints because of their restricted model abilities, which require model modifications for coping with them. To bridge this gap, we propose Instruction-based Compression (InstructCMP), an approach to the sentence compression task that can consider the length constraint through instructions by leveraging the zero-shot task-solving abilities of Large Language Models (LLMs). For this purpose, we created new evaluation datasets by transforming traditional sentence compression datasets into an instruction format. By using the datasets, we first reveal that the current LLMs still face challenges in accurately controlling the length for a compressed text. To address this issue, we propose an approach named “length priming,” that incorporates additional length information into the instructions without external resources. While the length priming effectively works in a zero-shot setting, a training dataset with the instructions would further improve the ability of length control. Thus, we additionally created a training dataset in an instruction format to fine-tune the model on it. Experimental results and analysis show that applying the length priming significantly improves performances of InstructCMP in both zero-shot and fine-tuning settings without the need of any model modifications.</p>','https://aclanthology.org/2024.findings-acl.532.pdf','https://locking-led-hobby-labs.trycloudflare.com/static/uploads/be2e8b45ddae493892f2c38e82095f35.png',0,'9065baac-3c30-454e-b986-ade4508326dd','2025-09-05 06:53:39');
/*!40000 ALTER TABLE `publications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `research_areas`
--

DROP TABLE IF EXISTS `research_areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `research_areas` (
  `id` varchar(36) NOT NULL,
  `name` text NOT NULL,
  `description` text,
  `parentId` varchar(36) DEFAULT NULL,
  `imageUrl` text,
  `order` int NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT (now()),
  `updatedAt` datetime NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  KEY `parentId` (`parentId`),
  KEY `ix_research_areas_id` (`id`),
  CONSTRAINT `research_areas_ibfk_1` FOREIGN KEY (`parentId`) REFERENCES `research_areas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `research_areas`
--

LOCK TABLES `research_areas` WRITE;
/*!40000 ALTER TABLE `research_areas` DISABLE KEYS */;
INSERT INTO `research_areas` VALUES ('8069085a-565a-48f9-8096-5575a68a4ced','AI Security','Watermarking, MBA deofuscation, Fake image detection, etc',NULL,'',0,1,'2025-09-05 07:13:20','2025-09-05 07:13:20'),('8414b4a2-15f3-46df-9777-36915338c1ea','LLM Red team','Jailbreaking, Train data extraction, Fake image generation, etc',NULL,'',0,1,'2025-09-05 07:08:36','2025-09-05 07:08:36'),('850cd185-99c8-46b0-bf23-329275bef50a','Generation','Summarization, RAG, Controllable LLMs, Image Generation, Multimodal Geneation, etc',NULL,'',0,1,'2025-09-05 07:13:33','2025-09-05 07:13:33'),('fba90d16-a601-4873-9369-6e4085714fb5','Information Extraction','NER, Neural ranking model, etc',NULL,'',0,1,'2025-09-05 07:13:48','2025-09-05 07:13:48');
/*!40000 ALTER TABLE `research_areas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `email` varchar(255) NOT NULL,
  `hashed_password` varchar(255) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `isApproved` tinyint(1) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT (now()),
  `updatedAt` datetime NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_users_email` (`email`),
  KEY `ix_users_id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('9065baac-3c30-454e-b986-ade4508326dd','gilab@admin.com','$2b$12$Gl4/lrxUp.GqSSqCbFNtverUaA1WDT9ice899OZx4/5rTU3EDfLGu','Admin','User',1,1,'2025-09-04 01:00:53','2025-09-05 07:27:29');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'gilab'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-08  8:38:54
