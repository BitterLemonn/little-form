<?php
header('Content-Type:application/json');
$result_conn = json_decode(require_once("../utils/confirmToken.php"), JSON_UNESCAPED_UNICODE);

if ($result_conn["code"] == 200) {
    $json_return = ["code" => 200, "message" => "success", "data" => []];

    if(isset($_POST["commentID"]) && $_POST["commentID"] != null){
        $sql = "DELETE FROM form WHERE commentID='{$_POST['commentID']}'";
        if(!mysqli_query($conn, $sql)){
            $json_return["code"] = 500;
            $json_return["message"] = $conn->error_reporting;
        }
    }else{
        $json_return["code"] = 403;
        $json_return["message"] = "请传入commentID";
    }
    mysqli_close($conn);
    echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
}else {
    echo (json_encode($result_conn, JSON_UNESCAPED_UNICODE));
}