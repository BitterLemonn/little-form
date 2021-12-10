<?php
header('Content-Type:application/json');
$result_conn = json_decode(require_once("../utils/conn.php"), JSON_UNESCAPED_UNICODE);

if ($result_conn["code"] == 200) {
    $sql = "SELECT userName FROM USER WHERE userName='{$_POST['username']}'";
    $result = mysqli_query($conn, $sql);
    $json_return = ["code" => 200, "message" => "success", "data" => []];

    //判断用户是否存在
    if (mysqli_num_rows($result) !== 0) {
        $json_return["code"] = 202;
        $json_return["message"] = "用户名已存在";
    } else {
        $sql = "INSERT INTO USER (userName, password, email) VALUES ('{$_POST['username']}', '{$_POST['password']}', '{$_POST['email']}')";
        //判断语句是否出错
        if (mysqli_query($conn, $sql) === TRUE) {
            $json_return["code"] = 200;
            $json_return["message"] = "success";

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
            $json_return["code"] = 500;
            $json_return["message"] = $conn->error;
        }
    }
    echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
    mysqli_close($conn);
} else {
    echo (json_encode($result_conn, JSON_UNESCAPED_UNICODE));
}
