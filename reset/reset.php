<?php
header('Content-Type:application/json');
$result_conn = json_decode(require_once("../utils/conn.php"), JSON_UNESCAPED_UNICODE);

if ($result_conn["code"] == 200) {
	$json_return = ["code" => 200, "message" => "success", "data" => []];

	if ($_POST['password'] == null || $_POST['confirm'] == null) {
		$json_return['code'] = 403;
		$json_return['message'] = "密码不能为空";
	} else {
		//判断两次密码是否一致
		if ($_POST['password'] !== $_POST['confirm']) {
			$json_return['code'] = 403;
			$json_return['message'] = "两次密码不一致";
		} else {
			$sql = "update USER set password='{$_POST['password']}' WHERE userName ='{$_POST['username']}'";
			mysqli_query($conn, $sql);
			$time = time();
			$token = $_POST['username'] . $time . $_POST['password'];
			$token = md5($token);
			$sql = "select * from token where userName ='{$_POST['username']}'";
			if (mysqli_num_rows(mysqli_query($conn, $sql)) != 0) {
				$sql = "delete from token WHERE userName ='{$_POST['username']}'";
				mysqli_query($conn, $sql);
			}
			$sql = "insert into token(username,token) values('{$_POST['username']}','$token')";
			mysqli_query($conn, $sql);
		}
	}

	echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
	mysqli_close($conn);
} else {
	echo (json_encode($result_conn, JSON_UNESCAPED_UNICODE));
}
