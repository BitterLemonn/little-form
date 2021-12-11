-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-12-10 10:22:30
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
(10, 'root', '好', '2021-12-07 15:33:28', 7, 8),
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
(35, 'DWF', '你好帅', '2021-12-10 07:34:39', 13, NULL);

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
(6, '123', '123', '这是新的库', '旧的库挂掉了', '2021-12-07 15:01:30', 5),
(7, '5555', '5555', '不忘初心，牢记使命', '“不忘初心，牢记使命”是党保持永远年轻的重要法宝，是始终铭记历史的重要力量，是不断开创未来的重要基础。', '2021-12-07 15:30:24', 6),
(9, 'cat', 'cat', '今天bing的背景壁纸', '法国的霞慕尼红峰', '2021-12-07 15:59:21', 3),
(10, 'cat', 'cat', '【科普】夜鹭', '学名：Nycticorax nycticorax\r\n', '2021-12-07 16:01:23', 8),
(11, 'fyfy', 'fyfy', '我要发个很牛的帖子', '没错好像挺厉害的', '2021-12-10 01:39:58', 3),
(12, '123', '123', '这是一篇测试内容最多多长的帖子', '这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字这篇文章一共200字', '2021-12-10 05:17:06', 1),
(13, 'DWF', 'DWF', '你好', '我是DWF', '2021-12-10 07:34:39', 3);

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
('123', '7c35a1030b95b9a1b437677f8c2f020b', '2021-12-10 08:43:12'),
('DWF', '19625213034dba7563af87e52dda0b6a', '2021-12-10 07:52:35'),
('fyfy', 'b9d32c349262f220e298ee5657f32c45', '2021-12-10 01:28:48');

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `userID` int(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`userID`, `username`, `password`, `email`) VALUES
(1, '123', '123', '123@qq.com'),
(2, 'bitterlemon', '1234', '8738@qq.com'),
(3, '5555', '55555', '1976150655@qq.com'),
(4, 'root', '123', '1976150655@qq.com'),
(5, 'cat', 'cat', '1976150655@qq.com'),
(6, 'fyfy', '123', '1809255650@qq.com'),
(9, 'DWF', '123', '15915120262@163.com');

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
  MODIFY `commentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `post`
--
ALTER TABLE `post`
  MODIFY `postID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
