<?php
header('Content-Type:application/json');
$result_conn = json_decode(require_once("../../utils/confirmToken.php"), JSON_UNESCAPED_UNICODE);

if ($result_conn["code"] == 200) {
    $json_return = ["code" => 200, "message" => "success", "data" => []];

    $sql = "SELECT username FROM user WHERE username != '{$_COOKIE["username"]}'";
    if ($result = mysqli_query($conn, $sql)) {
        while ($line = mysqli_fetch_array($result)["username"]) {
            $sql = "SELECT * FROM token WHERE username = '$line'";
            if ($tokenResult = mysqli_query($conn, $sql)) {
                $state = false;
                if (mysqli_num_rows($tokenResult) > 0) {
                    $tokenLine = mysqli_fetch_array($tokenResult);
                    if (time() - strtotime($tokenLine["timestamp"]) < 60 * 60 * 24)
                        $state = true;
                    $item = [
                        "username" => $tokenLine["username"], "token" => $tokenLine["token"],
                        "timestamp" => $tokenLine["timestamp"], "state" => $state
                    ];
                }else{
                    $item = [
                        "username" => $line, "token" => null,
                        "timestamp" => null, "state" => $state
                    ];
                }
                array_push($json_return["data"], $item);
            } else {
                $json_return["code"] = 500;
                $json_return["message"] = "发生错误, " . $conn->error;
            }
        }
    } else {
        $json_return["code"] = 500;
        $json_return["message"] = "发生错误, " . $conn->error;
    }

    echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
    mysqli_close($conn);
} else {
    echo (json_encode($result_conn, JSON_UNESCAPED_UNICODE));
}
