<?php 

$result_conn = json_decode(require_once("../utils/confirmToken.php"), JSON_UNESCAPED_UNICODE);
header('Content-Type:application/json');

$json_return = ["code" => 200, "message" => "success", "data" => []];
// 查
if ($_SERVER['REQUEST_METHOD']=='GET'){
	$sql = "SELECT * FROM user WHERE username='{$_COOKIE['username']}'";
	$result = mysqli_fetch_array(mysqli_query($conn, $sql));
	$json_return["data"] = $result;
	echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));

}elseif($_SERVER['REQUEST_METHOD']=='POST'){  // 改

	$sql  = "UPDATE user SET password='{$_POST['password']}' ,email='{$_POST['email']}' ,profile='/upload/A_8nl92t.jpeg' where username='{$_POST['userName']}'";

	$result = mysqli_query($conn, $sql);
	if (!$result){
		$json_return["code"] = 202;
		$json_return["message"] = "修改用户失败";
	}
	echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
    mysqli_close($conn);

}



		
		
		



