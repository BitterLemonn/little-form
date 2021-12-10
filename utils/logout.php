<?php
$result_conn = json_decode(require_once("../utils/confirmToken.php"), JSON_UNESCAPED_UNICODE);

if ($result_conn["code"] == 200) {
    $json_return = ["code" => 200, "message" => "success", "data" => []];

    if(isset($_COOKIE["username"]) && isset($_COOKIE["token"])){
        $sql = "DELETE FROM token WHERE username='{$_COOKIE["username"]}'";
        mysqli_query($conn, $sql);
    }else{
        $json_return["code"] = 401;
        $json_return["message"] = "不存在登录信息";
    }

    echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
    mysqli_close($conn);
} else {
    echo (json_encode($result_conn, JSON_UNESCAPED_UNICODE));
}