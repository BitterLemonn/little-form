<?php
header('Content-Type:application/json');
$result_conn = json_decode(require_once("../utils/confirmToken.php"), JSON_UNESCAPED_UNICODE);

if ($result_conn["code"] == 200) {
    $json_return = ["code" => 200, "message" => "success", "data" => []];

    //判空
    if (!isset($_POST["title"]) || trim($_POST["title"]) == "" || !isset($_POST["contain"])  || trim($_POST["contain"]) == "") {
        $json_return["code"] = 406;
        $json_return["message"] = "标题和内容不能为空";
        echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
        exit();
    }

    //判断长文本
    if (mb_strlen($_POST['title'], "UTF-8") > 30 || mb_strlen($_POST['contain'], "UTF-8") > 200) {
        $json_return["code"] = 406;
        $json_return["message"] = "标题或内容超出长度限制";
        echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
        exit();
    }

    //主页显示
    $sql = "INSERT INTO post(title, content, ownUser, recentUser, postCount) VALUES ('{$_POST['title']}','{$_POST['contain']}', '{$_COOKIE['username']}', '{$_COOKIE['username']}', 0)";
    mysqli_query($conn, $sql);
    //插入评论
    $sql = "SELECT MAX(postID) as postID FROM post";
    $result = mysqli_fetch_array(mysqli_query($conn, $sql));
    $sql = "INSERT INTO form(userName, comment, ownPost) VALUES ('{$_COOKIE['username']}', '{$_POST['contain']}', '{$result['postID']}')";
    mysqli_query($conn, $sql);

    echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
    mysqli_close($conn);
}else{
    echo (json_encode($result_conn, JSON_UNESCAPED_UNICODE));
}
