<?php
header('Content-Type:application/json');
//设置时区
ini_set('date.timezone', 'Asia/Shanghai');

$servername = "192.168.128.90";
$username = "root";
$password = "";
$dbname = "my_db";
 
// 创建连接
error_reporting(0);
$conn = new mysqli($servername, $username, $password, $dbname);
$json_return = ["code" => 200, "message" => "success", "data" =>[]];
if ($conn->connect_error) {
    $json_return["code"] = 500;
    $json_return["message"] = $conn->connect_error;
} 
$conn->set_charset('utf8mb4');
return json_encode($json_return, JSON_UNESCAPED_UNICODE);
?>