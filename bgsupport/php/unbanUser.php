<?php
header('Content-Type:application/json');
$result_conn = json_decode(require_once("../../utils/confirmToken.php"), JSON_UNESCAPED_UNICODE);

if ($result_conn["code"] == 200) {
    $json_return = ["code" => 200, "message" => "success", "data" => []];

    $sql = "DELETE FROM bannedUser WHERE username = '{$_POST['username']}'";
    
    if (!mysqli_query($conn, $sql)) {
        $json_return["code"] = 500;
        $json_return["message"] = "解除禁言时发生错误, " . $conn->error;
    }else{
        $sql = "UPDATE user SET isBan = 0 WHERE username = '{$_POST['username']}'";
        if (!mysqli_query($conn, $sql)) {
            $json_return["code"] = 500;
            $json_return["message"] = "解除禁言时发生错误, " . $conn->error;
        }
    }

    echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
    mysqli_close($conn);
} else {
    echo (json_encode($result_conn, JSON_UNESCAPED_UNICODE));
}
