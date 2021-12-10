<?php
header('Content-Type:application/json');
$result_conn = json_decode(require_once("../utils/conn.php"), JSON_UNESCAPED_UNICODE);

if ($result_conn["code"] == 200) {
    $json_return = ["code" => 200, "message" => "success", "data" => []];

    if(isset($_POST["username"]) && isset($_POST["password"]) && $_POST["username"] != "" && $_POST["password"] != ""){
        $sql = "SELECT userName FROM USER WHERE userName='{$_POST['username']}' AND  password='{$_POST['password']}'";
        $result = mysqli_query($conn, $sql);
    
        //判断账号是否存在
        if (mysqli_num_rows($result) !== 0) {
            $time = time();
            $token = $_POST['username']  . $time . $_POST['password'];
            $token = md5($token);
    
            $sql = "SELECT * FROM token WHERE username='{$_POST['username']}'";
            if (mysqli_num_rows(mysqli_query($conn, $sql)) != 0) {
                $sql = "DELETE FROM token WHERE username='{$_POST['username']}'";
                mysqli_query($conn, $sql);
            }
            $sql = "INSERT INTO token(userName, token) VALUES ('{$_POST['username']}', '$token')";
            mysqli_query($conn, $sql);
    
            setcookie("username", $_POST['username'], $time + (3600 * 24), "/");
            setcookie("token", $token, $time + (3600 * 24), "/");
        } else {
            $json_return["code"] = 202;
            $json_return["message"] = "用户名或密码错误";
        }
    }else if(isset($_COOKIE["username"]) && isset($_COOKIE["token"])){
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
                    $json_return["message"] = "token值过期，请重新登录";
                }
            }else{
                $json_return["code"] = 401;
                $json_return["message"] = "token值无效，请重新登录";
            }
        }else{
            $json_return["code"] = 401;
            $json_return["message"] = "用户名已更改或错误，请重新登录";
        }
    }else{
        $json_return["code"] = 401;
        $json_return["message"] = "用户名或密码不能为空";
    }
    echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
    mysqli_close($conn);
} else {
    echo (json_encode($result_conn, JSON_UNESCAPED_UNICODE));
}
