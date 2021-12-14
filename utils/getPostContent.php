<?php
$result_conn = json_decode(require_once("../utils/confirmToken.php"), JSON_UNESCAPED_UNICODE);

if ($result_conn["code"] == 200) {
    $json_return = ["code" => 200, "message" => "success", "data" => [], "title" => null];

    if (isset($_GET["postID"])) {
        $sql = "SELECT * FROM post WHERE postID = '{$_GET["postID"]}'";
        $title = mysqli_fetch_array(mysqli_query($conn, $sql))["title"];
        $json_return["title"] = $title;

        //计算总页数
        $sql = "SELECT * FROM form WHERE ownPost = {$_GET["postID"]} AND ownContent IS null";
        $commentNum = mysqli_num_rows(mysqli_query($conn, $sql));
        if ($commentNum % 10 > 0) {
            $pageCount = (int)($commentNum / 10) + 1;
        } else {
            $pageCount = (int)($commentNum / 10);
        }
        $json_return["pageCount"] = $pageCount;

        //返回信息
        if (!isset($_GET["page"])) {
            $json_return["code"] = 400;
            $json_return["message"] = "未传入page值";
            echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
            exit();
        }
        $page = $_GET['page'];
        if ($page > $pageCount || $page <= 0) {
            $json_return["code"] = 400;
            $json_return["message"] = "传入页数有误";
            echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
            exit();
        }

        //返回主贴数据
        $count = ($page - 1) * 10;
        $sql = "SELECT * FROM form WHERE ownPost = {$_GET["postID"]} AND ownContent IS null ORDER BY timestamp LIMIT $count , 10";
        $result = mysqli_query($conn, $sql);
        while ($line = mysqli_fetch_array($result)) {
            $eDay = explode(" ", $line['timestamp'])[0];
            $eTime = substr(explode(" ", $line['timestamp'])[1], 0, 5);
            $nDay = date("Y-m-d");
            $eDay == $nDay ? $time = $eTime : $time = substr($line['timestamp'], 0, count($line['timestamp']) - 4);
            // 查询头像
            $uName = $line['userName'];
            $sql = "SELECT * from user where username='$uName'";
            $result_profile = mysqli_fetch_array(mysqli_query($conn, $sql));
            $item = [
                "commentID" => $line["commentID"], "username" => $line["userName"],
                "comment" => $line["comment"], "timestamp" => $time, "type" => 0, "childComment" => [],"profile" => $result_profile['profile']
            ];
            array_push($json_return["data"], $item);
        }
        //返回回复帖数据
        $sql = "SELECT * FROM form WHERE ownPost = {$_GET["postID"]} AND ownContent IS NOT null ORDER BY timestamp";
        $result = mysqli_query($conn, $sql);
        while ($line = mysqli_fetch_array($result)) {
            $eDay = explode(" ", $line['timestamp'])[0];
            $eTime = substr(explode(" ", $line['timestamp'])[1], 0, 5);
            $nDay = date("Y-m-d");
            $eDay == $nDay ? $time = $eTime : $time = substr($line['timestamp'], 0, count($line['timestamp']) - 4);

            for ($i = 0; $i < count($json_return["data"]); $i++) {
                //回复贴的主贴所在页数为当前页数才传出数据
                if ($line["ownContent"] == $json_return["data"][$i]["commentID"]) {
                    // 查询头像
                    $uName = $line['userName'];
                    $sql = "SELECT * from user where username='$uName'";
                    $result_profile = mysqli_fetch_array(mysqli_query($conn, $sql));
                    $item = [
                        "commentID" => $line["commentID"], "username" => $line["userName"],
                        "comment" => $line["comment"], "timestamp" => $time, "type" => 1, "childComment" => [],
                        "ownContent" => $line["ownContent"],"profile" => $result_profile["profile"]
                    ];
                    array_push($json_return["data"], $item);

                    array_push($json_return["data"][$i]["childComment"], $line["commentID"]);
                }
            }
        }
    } else {
        $json_return["code"] = 500;
        $json_return["message"] = "未传入postID";
    }
    echo (json_encode($json_return, JSON_UNESCAPED_UNICODE));
    mysqli_close($conn);
} else {
    echo (json_encode($result_conn, JSON_UNESCAPED_UNICODE));
}
