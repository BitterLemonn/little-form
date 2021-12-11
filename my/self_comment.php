<?php

$result_conn = json_decode(require_once("../utils/confirmToken.php"), JSON_UNESCAPED_UNICODE);
if ($result_conn["code"] == 200) {
    header('Content-Type:application/json');

    $json_return = ["code" => 200, "message" => "success", "data" => []];

    //判断page传值
    if (!isset($_GET['page'])) {
        $json_return["code"] = 400;
        $json_return["message"] = "未传入page值";
        echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
        exit();
    }

    //计算总页数
    $sql = "SELECT * FROM post ORDER BY timestamp";
    $post_num = mysqli_num_rows(mysqli_query($conn, $sql));
    if ($post_num % 10 > 0) {
        $page_count = (int)($post_num / 10) + 1;
    } else {
        $page_count = (int)($post_num / 10);
    }
    $json_return["pageNum"] = $page_count;

    //返回信息
    $page = $_GET['page'];

    if ($page > $page_count || $page <= 0) {
        $json_return["code"] = 400;
        $json_return["message"] = "传入页数有误";
        echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
        exit();
    }
    $uname = $_GET['uname'];
    $count = ($page - 1) * 10;
    $sql = "SELECT * FROM post where ownUser='$uname' ORDER BY timestamp DESC LIMIT $count , 10";
    $result = mysqli_query($conn, $sql);
    while ($line = mysqli_fetch_array($result)) {
        $eDay = explode(" ", $line['timestamp'])[0];
        $eTime = substr(explode(" ", $line['timestamp'])[1], 0, 5);
        $nDay = date("Y-m-d");
        $eDay == $nDay ? $time = $eTime : $time = $eDay;
        $item = [
            "postID" => $line['postID'], "title" => $line['title'], "content" => $line['content'],
            "timestamp" => $time, "ownUser" => $line['ownUser'], "recentUser" => $line['recentUser'],
            "postCount" => $line['postCount']
        ];
        array_push($json_return["data"], $item);
    }

    echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
} else {
    echo (json_encode($result_conn, JSON_UNESCAPED_UNICODE));
}