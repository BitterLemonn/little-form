-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-12-25 05:37:28
-- 伺服器版本： 10.4.17-MariaDB
-- PHP 版本： 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `my_db`
--

-- --------------------------------------------------------

--
-- 資料表結構 `form`
--

CREATE TABLE `form` (
  `commentID` int(11) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `comment` varchar(300) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `ownPost` int(11) NOT NULL,
  `ownContent` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `form`
--

INSERT INTO `form` (`commentID`, `userName`, `comment`, `timestamp`, `ownPost`, `ownContent`) VALUES
(5, '123', '旧的库挂掉了', '2021-12-07 15:01:30', 6, NULL),
(6, '5555', '有点bug', '2021-12-07 15:28:03', 6, 5),
(7, '5555', '好耶', '2021-12-07 15:28:20', 6, NULL),
(8, '5555', '“不忘初心，牢记使命”是党保持永远年轻的重要法宝，是始终铭记历史的重要力量，是不断开创未来的重要基础。', '2021-12-07 15:30:25', 7, NULL),
(9, '5555', '我也说一句', '2021-12-07 15:30:37', 6, 5),
(11, 'root', '玻利维亚萨哈马国家公园的帕亚查塔火山群', '2021-12-07 15:33:59', 6, NULL),
(13, 'cat', '习近平总书记在十九大报告中指出，弘扬马克思主义学风，推进两学一做学习教育常态化制度化，以县处级以上领导干部为重点，在全党开展不忘初心、牢记使命主题教育，用党的创新理论武装头脑，推动全党更加自觉地为实现新时代党的历史使命不懈奋斗。经过近些年的努力，脱贫攻坚已经初见成效，人民的生活水平有了显著地提高，但是我们决不能满足于此，改革只有进行时没有完成时，要继续不忘初心、牢记使命。', '2021-12-07 15:40:18', 7, NULL),
(14, 'cat', '不忘初心、牢记使命，是贯彻党的十九大精神的重要举措。党的十九大是在全面建成小康社会决胜阶段、中国特色社会主义进入新时代的关键时期召开的一次十分重要的大会。党的十九大报告，高举旗帜、高瞻远瞩、继往开来，是我们党迈进新时代、开启新征程、谱写新篇章的政治宣言和行动指南。开展不忘初心、牢记使命主题教育，铭记为中国人民谋幸福，为中华民族谋复兴的初心和使命，是学习贯彻党的十九大精神的重要举措，是激励我们共产党', '2021-12-07 15:40:36', 7, NULL),
(15, 'cat', '不忘初心,还在于党的根基在人民、党的力量在人民,为此，就需要坚持一切为了人民、一切依靠人民，充分发挥广大人民群众的积极性、主动性、创造性,不断把为人民造福事业推向前进。', '2021-12-07 15:40:52', 7, 13),
(16, 'cat', '自信人生二百年，会当水击三千里。一个人不忘初心，就是洗尽铅华不忘本，一个政党不忘初心，就能长期保持先进性和纯洁性。我们有理由相信，只要不忘初心、继续前进，只要勇于变革、勇于创新，我们党就一定能向历史、向人民交出新的更加优异的答卷!', '2021-12-07 15:42:05', 7, 13),
(17, 'cat', '法国的霞慕尼红峰', '2021-12-07 15:43:24', 9, NULL),
(18, 'cat', '学名：Nycticorax nycticorax\r\n', '2021-12-07 15:46:21', 10, NULL),
(19, 'cat', '特征 夜鹭雄雌同形同色，成鸟体长约40厘米至65厘米，头、枕部略带金属光泽的深蓝灰色，上体部分和双翅为暗灰色，下体略带乳黄色的白色。头顶上有两到三根细长的白色蓑羽。虹膜是血红色，喙黑色足黄色。亚成鸟体长跟成鸟一样，上体灰褐色，翅膀上有星星点点分布的白色斑点。', '2021-12-07 15:46:28', 10, NULL),
(20, 'cat', '食物：夜鹭主要取食蛙类、小鱼、虾等水生动物，偶尔吃一些植物性食物；受到惊吓的夜鹭会把吃进去的食物呕吐出来，经消化或未经消化的食物腥臭不堪，以此作为防卫，也可以从中得到研究夜鹭食性的线索。', '2021-12-07 15:47:26', 10, NULL),
(21, 'cat', '顶', '2021-12-07 15:47:55', 9, NULL),
(22, 'cat', '在观察时可以看见夜鹭会长时间盯着水面一动不动，等有鱼来，然后忽然伸长脖子，把鱼收入嘴中', '2021-12-07 15:49:44', 10, NULL),
(23, 'cat', '夜鹭和企鹅配色有点像，所以有时候会看见一些新闻：一只夜鹭飞进动物园的企鹅群中企图混吃混喝【手动狗头】', '2021-12-07 15:51:42', 10, NULL),
(24, 'root', '小夜：我就是企鹅', '2021-12-07 15:53:50', 10, 23),
(26, 'root', '呢種雀鳥最鍾意岸邊，然後捉啲魚，有時會食一啲植物', '2021-12-07 15:56:40', 10, 20),
(28, '123', '顶', '2021-12-07 15:59:21', 9, NULL),
(29, 'root', '顶', '2021-12-07 16:01:23', 10, NULL),
(30, 'fyfy', '没错好像挺厉害的', '2021-12-10 01:30:30', 11, NULL),
(31, 'fyfy', '确实', '2021-12-10 01:39:58', 11, 30),
(32, '123', '这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字', '2021-12-10 05:17:06', 12, NULL),
(33, 'DWF', '我是DWF', '2021-12-10 07:34:27', 13, NULL),
(34, 'DWF', '哈哈哈哈', '2021-12-10 07:34:33', 13, NULL),
(35, 'DWF', '你好帅', '2021-12-10 07:34:39', 13, NULL),
(37, 'fyfy', '嗯嗯', '2021-12-11 09:03:27', 11, 30),
(38, 'fyfy', '11', '2021-12-11 09:07:20', 11, 30),
(41, 'fyfy', '确实', '2021-12-19 04:08:58', 10, 19),
(43, 'fyfy', '嗯', '2021-12-19 04:10:03', 6, 7),
(49, 'lyc', '哈哈哈哈', '2021-12-21 08:15:11', 18, NULL),
(50, '1234', '321', '2021-12-21 08:15:11', 19, NULL),
(51, '111', '111', '2021-12-21 08:15:16', 20, NULL),
(52, 'aaa', 'ss', '2021-12-21 08:15:23', 21, NULL),
(55, '1111111111', '111111111', '2021-12-21 08:15:38', 22, NULL),
(56, '123487', '撒大声地所多所多所多', '2021-12-21 08:15:42', 23, NULL),
(57, '1234', '回复 5555 : 123', '2021-12-21 08:15:54', 6, 5),
(58, 'aaa', '试试', '2021-12-21 08:15:54', 20, 51),
(59, 'lihua', 'g', '2021-12-21 08:15:55', 18, NULL),
(61, '111', '11111', '2021-12-21 08:16:02', 21, 52),
(62, '1234', '123', '2021-12-21 08:16:06', 6, NULL),
(63, '1111111111', '1', '2021-12-21 08:16:06', 21, NULL),
(65, 'lyc', '灌灌灌灌水', '2021-12-21 08:16:20', 18, NULL),
(68, 'aaa', '试试', '2021-12-21 08:18:37', 25, NULL),
(69, '1234', '.', '2021-12-21 08:18:39', 26, NULL),
(70, '1234', '🥵🥵🥵🥵🥵🥵🥵🥵🥵🥵', '2021-12-21 08:19:37', 26, NULL),
(71, '1234', '🥵🥵🥵🥵🥵🥵', '2021-12-21 08:20:00', 27, NULL),
(72, '2019100111', 'Hi', '2021-12-21 08:20:21', 28, NULL),
(73, 'reinhart', '我破防了', '2021-12-21 08:21:05', 29, NULL),
(78, 'admin', '破的好', '2021-12-21 09:37:04', 29, NULL);

--
-- 觸發器 `form`
--
DELIMITER $$
CREATE TRIGGER `onAddReply` AFTER INSERT ON `form` FOR EACH ROW UPDATE post SET postCount = postCount + 1, timestamp = (SELECT CURRENT_TIMESTAMP) WHERE postID = new.ownPost
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `onDeleteReply` AFTER DELETE ON `form` FOR EACH ROW UPDATE post SET postCount = postCount - 1 WHERE postID=old.ownPost
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- 資料表結構 `post`
--

CREATE TABLE `post` (
  `postID` int(11) NOT NULL,
  `ownUser` varchar(20) NOT NULL,
  `recentUser` varchar(20) NOT NULL,
  `title` varchar(30) NOT NULL,
  `content` varchar(300) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `postCount` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `post`
--

INSERT INTO `post` (`postID`, `ownUser`, `recentUser`, `title`, `content`, `timestamp`, `postCount`) VALUES
(6, '123', '123', '这是新的库', '旧的库挂掉了', '2021-12-21 08:16:06', 8),
(7, '5555', '5555', '不忘初心，牢记使命', '“不忘初心，牢记使命”是党保持永远年轻的重要法宝，是始终铭记历史的重要力量，是不断开创未来的重要基础。', '2021-12-07 15:30:24', 5),
(9, 'cat', 'cat', '今天bing的背景壁纸', '法国的霞慕尼红峰', '2021-12-07 15:59:21', 3),
(10, 'cat', 'cat', '【科普】夜鹭', '学名：Nycticorax nycticorax\r\n', '2021-12-19 04:08:58', 9),
(11, 'fyfy', 'fyfy', '我要发个很牛的帖子', '没错好像挺厉害的', '2021-12-11 09:07:20', 5),
(12, '123', '123', '这是一篇测试内容最多多长的帖子', '这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字', '2021-12-10 05:17:06', 1),
(13, 'DWF', 'DWF', '你好', '我是DWF', '2021-12-20 10:51:27', 3),
(18, 'lyc', 'lyc', '邓加绒你好', '哈哈哈哈', '2021-12-21 08:16:20', 3),
(19, '1234', '1234', '1123', '321', '2021-12-21 08:15:11', 1),
(20, '111', '111', '111', '111', '2021-12-21 08:15:54', 2),
(21, 'aaa', 'aaa', 'ss', 'ss', '2021-12-21 08:16:06', 3),
(22, '1111111111', '1111111111', '红红火火恍恍惚惚', '111111111', '2021-12-21 08:15:38', 1),
(23, '123487', '123487', '大大大', '撒大声地所多所多所多', '2021-12-21 08:15:42', 1),
(25, 'aaa', 'aaa', '我也发一个', '试试', '2021-12-21 08:18:37', 1),
(26, '1234', '1234', '牛哇牛哇', '.', '2021-12-21 08:19:37', 2),
(27, '1234', '1234', '🥵🥵🥵🥵🥵🥵', '🥵🥵🥵🥵🥵🥵', '2021-12-21 08:20:00', 1),
(28, '2019100111', '2019100111', 'Hi', 'Hi', '2021-12-21 08:20:21', 1),
(29, 'reinhart', 'reinhart', '删我的贴？', '我破防了', '2021-12-21 09:37:04', 2);

-- --------------------------------------------------------

--
-- 資料表結構 `token`
--

CREATE TABLE `token` (
  `username` varchar(20) NOT NULL,
  `token` varchar(40) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `token`
--

INSERT INTO `token` (`username`, `token`, `timestamp`) VALUES
('111', '0cb562d03434f28bb18dbe4c5726d2ee', '2021-12-21 08:15:03'),
('1111', '52c85e239a021f42d68aa398eb8ad2d1', '2021-12-21 08:15:19'),
('11111', '36220eae02e4a9fdd17f035e077c73a0', '2021-12-21 08:15:33'),
('1111111111', '43940a98460729d6d4a8c85ea232c7d2', '2021-12-21 08:15:24'),
('1234', '5957f51674f528b9ac6a952ac6131db1', '2021-12-21 08:16:21'),
('123487', '3914117ec89e025edcec4c7eb6cbc685', '2021-12-21 08:15:25'),
('2019100111', 'fe4cc3e7d982b94ecc15042ea6382f79', '2021-12-21 08:20:07'),
('5555', '11f1d684888f282db487b9eb5e54ea81', '2021-12-11 03:30:14'),
('aaa', '9f8d7db98fe7586f9aecd136b0428c0c', '2021-12-21 08:15:13'),
('admin', 'e6142cdc8a5ae4e8110cd1b99392a5d7', '2021-12-25 04:27:48'),
('cat', '85e74ca33747ad567f3fd9ec54d2a18a', '2021-12-21 07:56:50'),
('hyy', 'fa342117ef7c3ef6e82622ee26131107', '2021-12-21 08:16:25'),
('lihua', 'e40403a7de31a62a5d0289f97cee52fb', '2021-12-21 08:15:39'),
('reinhart', 'a7d2d498cd5a8800ba0c7dee3cd2a6b2', '2021-12-21 08:25:36'),
('root', 'e42babd23390747c8005d2105af0c1b0', '2021-12-21 08:15:26'),
('test', '3790f8ee272bfee9b8f18e58983e2643', '2021-12-21 08:19:28'),
('visitor', '00f92296a487584bb8885bd1fda4a1f0', '2021-12-21 08:47:35'),
('XXX', '94a05c785355516ded62dea02f9789da', '2021-12-21 08:19:29');

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `userID` int(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `profile` varchar(30) NOT NULL,
  `isBan` tinyint(1) NOT NULL DEFAULT 0,
  `isOP` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`userID`, `username`, `password`, `email`, `profile`, `isBan`, `isOP`) VALUES
(1, '123', '123', '123@qq.com', '../upload/A_8jumx7.png', 0, 0),
(2, 'bitterlemon', '1234', '8738@qq.com', '', 0, 0),
(3, '5555', '55555', '1976150655@qq.com', '', 0, 0),
(4, 'root', '123', '1976150655@qq.com', '', 0, 0),
(5, 'cat', 'cat', '1976150655@qq.com', '../upload/A_m7pd5n.png', 0, 0),
(6, 'fyfy', '1234', '1809255650@qq.com', '../upload/A_50pra2.jpg', 0, 0),
(9, 'DWF', 'DWF', '15915120262@163.com', '../upload/A_61oo3p.jpg', 0, 0),
(11, 'admin', 'admin123321', 'admin@admin.com', '', 0, 1),
(12, 'lyc', 'lyc', '12312@qq.com', '', 1, 0),
(13, '1234', '1234', '1234@qq.com', '', 0, 0),
(14, '111', '111111', '11@11.cc', '', 0, 0),
(15, 'test', '123', '222@qq.com', '', 0, 0),
(16, 'Reinhart', '12345', 'yuchu_liu@126.com', '', 1, 0),
(17, 'aaa', 'aaa', 'aaa@qq.com', '', 0, 0),
(18, '1111', '123456789', '1761877666@qq.com', '', 0, 0),
(19, '1111111111', '111', '111@163.com', '', 0, 0),
(20, '123487', '123', '1231231212@qq.com', '', 0, 0),
(21, '11111', 'qfn976X5uaV67Wt', 'aa@qq.com', '/upload/A_8nl92t.jpeg', 0, 0),
(22, 'lihua', '123', '111111@qq.com', '', 0, 0),
(23, 'hyy', '123', '777@qq.com', '', 0, 0),
(24, 'XXX', '123', '1539999999@qq.com', '', 0, 0),
(25, '2019100111', '123456', '20191002867@gdufs.edu.cn', '', 0, 0),
(26, 'visitor', '810975', '0000000000@00.com', '', 0, 0);

--
-- 觸發器 `user`
--
DELIMITER $$
CREATE TRIGGER `onUpdateBan` BEFORE UPDATE ON `user` FOR EACH ROW UPDATE banneduser SET username = new.username WHERE username = old.username
$$
DELIMITER ;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`commentID`),
  ADD KEY `postFK` (`ownPost`),
  ADD KEY `contentFK` (`ownContent`);

--
-- 資料表索引 `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`postID`),
  ADD KEY `ownUserFK` (`ownUser`),
  ADD KEY `recentUserFK` (`recentUser`);

--
-- 資料表索引 `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`username`);

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `username` (`username`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `form`
--
ALTER TABLE `form`
  MODIFY `commentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `post`
--
ALTER TABLE `post`
  MODIFY `postID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `form`
--
ALTER TABLE `form`
  ADD CONSTRAINT `contentFK` FOREIGN KEY (`ownContent`) REFERENCES `form` (`commentID`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `postFK` FOREIGN KEY (`ownPost`) REFERENCES `post` (`postID`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- 資料表的限制式 `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `ownUserFK` FOREIGN KEY (`ownUser`) REFERENCES `user` (`username`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recentUserFK` FOREIGN KEY (`recentUser`) REFERENCES `user` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `usernameFK` FOREIGN KEY (`username`) REFERENCES `user` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
