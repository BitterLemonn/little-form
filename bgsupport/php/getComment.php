<?php
header('Content-Type:application/json');
$result_conn = json_decode(require_once("../../utils/confirmToken.php"), JSON_UNESCAPED_UNICODE);

if ($result_conn["code"] == 200) {
    $json_return = ["code" => 200, "message" => "success", "data" => []];

    $sql = "SELECT * FROM form";
    if ($result = mysqli_query($conn, $sql)) {
        while ($line = mysqli_fetch_array($result)) {
            $sql = "SELECT title FROM post WHERE postID={$line['ownPost']}";
            if ($post = mysqli_fetch_array(mysqli_query($conn, $sql))['title']) {
                $item = [
                    "id" => $line["commentID"], "username" => $line["userName"],
                    "comment" => $line["comment"], "timestamp" => $line["timestamp"],
                    "ownPost" => $post
                ];
                array_push($json_return["data"], $item);
            }
        }
    } else {
        $json_return["code"] = 500;
        $json_return["message"] = $conn->error;
    }

    echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
    mysqli_close($conn);
} else {
    echo (json_encode($result_conn, JSON_UNESCAPED_UNICODE));
}
