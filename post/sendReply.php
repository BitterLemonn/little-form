<?php
$result_conn = json_decode(require_once("../utils/confirmToken.php"), JSON_UNESCAPED_UNICODE);

if ($result_conn["code"] == 200) {
    $json_return = ["code" => 200, "message" => "success", "data" => []];

    //查询是否被禁言
    $sql = "SELECT isBan FROM user WHERE username = '{$_COOKIE["username"]}'";
    if (mysqli_fetch_array(mysqli_query($conn, $sql))["isBan"] != 1) {
        //回复主贴
        if (isset($_POST["postID"]) && isset($_POST["contain"])) {
            try {
                //发表回复
                $sql = "INSERT INTO form (userName, comment, ownPost) VALUES ('{$_COOKIE['username']}', '{$_POST['contain']}', '{$_POST['postID']}')";
                mysqli_query($conn, $sql);
            } catch (Exception $e) {
                $json_return["code"] = 500;
                $json_return["message"] = "发生错误, message: " + $e;
            }
        } else if (isset($_POST["contentID"]) && isset($_POST["replyBody"]) && isset($_POST["postID"])) {
            //判断是否回复楼中楼
            if ($_POST["replyName"] != "") {
                $message = "回复 " . (string)$_POST["replyName"] . " : " . (string)$_POST["replyBody"];
            } else {
                $message = (string)$_POST["replyBody"];
            }

            //发表回复
            $sql = "INSERT INTO form (userName, comment, ownPost, ownContent) VALUES ('{$_COOKIE['username']}', '$message', '{$_POST['postID']}', '{$_POST['contentID']}')";
            if (mysqli_query($conn, $sql) != true) {
                $json_return["code"] = 500;
                $json_return["message"] = "发生错误, message: " + $e;
            }
        } else {
            $json_return["code"] = 403;
            $json_return["message"] = "非法请求，部分参数为空";
        }
    } else {
        $json_return["code"] = 401;
        $json_return["message"] = "非法请求，你已被关进小黑屋";
    }
    
    mysqli_close($conn);
    echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
} else {
    echo (json_encode($result_conn, JSON_UNESCAPED_UNICODE));
}
