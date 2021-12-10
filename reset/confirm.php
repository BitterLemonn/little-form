<?php
header( 'Content-Type:application/json' );
$result_conn = json_decode( require_once( "../utils/conn.php" ), JSON_UNESCAPED_UNICODE );

if ( $result_conn[ "code" ] == 200 ) {
	$json_return = [ "code" => 200, "message" => "success", "data" => [] ];

	if ( $_POST["username"] == null ) {
		$json_return['code'] = 403;
		$json_return['message'] = "用户名不能为空";
	} else {
		$sql = "SELECT username FROM USER WHERE email='{$_POST['email']}' and username = '{$_POST['username']}'";
		$result = mysqli_query( $conn, $sql );
		if ( mysqli_num_rows( $result ) == 0 ) {
			$json_return['code'] = 403;
			$json_return['message'] = "用户名或邮箱错误";
		} else {
			$username = mysqli_fetch_array($result)['username'];
			$item = ['username'=>$username];
			array_push($json_return['data'],$item);
		}
	}

	echo( json_encode( $json_return, JSON_UNESCAPED_UNICODE ) );
    mysqli_close($conn);
} else {
	echo( json_encode( $result_conn, JSON_UNESCAPED_UNICODE ) );
}