<?php
header('Content-Type:application/json');
$result_conn = json_decode(require_once("../../utils/confirmToken.php"), JSON_UNESCAPED_UNICODE);

if ($result_conn["code"] == 200) {
    $json_return = ["code" => 200, "message" => "success", "data" => []];

    $sql = "SELECT * FROM user WHERE isOP = 1 AND username = '{$_COOKIE['username']}'";
    if(mysqli_num_rows(mysqli_query($conn, $sql)) != 1){
        $json_return["code"] = 401;
        $json_return["message"] = "非法访问, 非管理员用户访问";
        //删除登录信息
        $sql = "DELETE FROM token WHERE username='{$_COOKIE['username']}'";
        mysqli_query($conn, $sql);
    }

    echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
    mysqli_close($conn);
} else {
    echo (json_encode($result_conn, JSON_UNESCAPED_UNICODE));
}