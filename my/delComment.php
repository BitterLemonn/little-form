<?php

$result_conn = json_decode(require_once("../utils/confirmToken.php"), JSON_UNESCAPED_UNICODE);
if ($result_conn["code"] == 200) {
    header('Content-Type:application/json');

    $json_return = ["code" => 200, "message" => "success", "data" => []];

    //判断page传值
    if (!isset($_GET['commentId'])) {
        $json_return["code"] = 400;
        $json_return["message"] = "不存在";
        echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
        exit();
    }
    $sql = "delete from form where commentID={$_GET["commentId"]}"; 
    if(mysqli_query($conn, $sql)){ 
        $json_return["message"] = "删除成功";
    }else{ 
        $json_return["code"] = 400;
        $json_return["message"] = "删除失败";
    } 
    echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
} else {
    echo (json_encode($result_conn, JSON_UNESCAPED_UNICODE));
}