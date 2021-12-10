<?php
header('Content-Type:application/json');
$result_conn = json_decode(require_once("../utils/conn.php"), JSON_UNESCAPED_UNICODE);

if ($result_conn["code"] == 200) {
    $json_return = ["code" => 200, "message" => "success", "data" => []];
    if(isset($_COOKIE["username"]) && isset($_COOKIE["token"])){
        $sql = "SELECT * FROM token WHERE username='{$_COOKIE["username"]}'";
        $result = mysqli_query($conn, $sql);
        if(mysqli_num_rows($result) != 0){
            $line = mysqli_fetch_array($result);
            $token = $line["token"];
            $timestamp = $line["timestamp"];
            if($token == $_COOKIE["token"]){
                $sql = "SELECT UNIX_TIMESTAMP('$timestamp')";
                $timestamp = mysqli_fetch_array(mysqli_query($conn, $sql))[0];
                if(time() - $timestamp > 60 * 60 * 24){
                    $sql = "DELETE FROM token WHERE username='{$_COOKIE['username']}'";
                    mysqli_query($conn, $sql);
                    $json_return["code"] = 401;
                    $json_return["message"] = "非法请求，token值过期，请重新登录";
                }
            }else{
                $json_return["code"] = 401;
                $json_return["message"] = "非法请求，token值无效，请重新登录"; 
            }
        }else{
            $json_return["code"] = 401;
            $json_return["message"] = "非法请求，数据不存在，请先登录";
        }
    }else{
        $json_return["code"] = 401;
        $json_return["message"] = "非法请求，请使用cookies保存";
    }
    return (json_encode($json_return, JSON_UNESCAPED_UNICODE));
} else {
    return (json_encode($result_conn, JSON_UNESCAPED_UNICODE));
}
