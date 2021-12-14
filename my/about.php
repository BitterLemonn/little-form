<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta charset="utf-8">
    <title>修改个人信息</title>
    <link href="css/style.css" rel="stylesheet" />
    <script src="js/edit_user.js"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    
        <script type="text/javascript">
        if (getCookie("username") == "") {
            alert("请先登录");
            window.location.href = "../login/login.html";
        }
        getUser()
    </script>
</head>

<body>
    
    <div id="wrap">
        <div id="left">
            <div id="photo" class="img"> <a href="#"><img src="../images/me.jpg" alt="image" /></a> </div>
            <div id="blogtitle">
                <h1><a href="my_post.html">Hi</a></h1>
            </div>
            <div class="clear"></div>
            <div id="nav">
                <li><a href="../home/home.html">返回首页</a></li>
                <li><a href="my_post.html">我的帖子</a></li>
                <li><a href="about.html">修改信息</a></li>
            </div>
        </div>
        <div id="right">
            <div class="post"> <span class="time">修改个人信息</span>
                <form method="post" action="" id="form" onsubmit="return edit();">
                    <table id="centerTable" border="0" cellspacing="15">
                        <tr style='display: none'>
                            <td><input type='text' name='id'></td>
                        </tr>
                        <tr align="center">
                            <td>用户名</td>
                            <td><input name="userName" id='userName' type="text" value="" readOnly></td>
                        </tr>
                        <tr align="center">
                            <td>密码</td>
                            <td><input id="password1" name="password1" type="password"></td>
                        </tr>
                        <tr align="center">
                            <td>重复密码</td>
                            <td><input name="password" id="password" type="password">
                            <span id="passwordHint" class="hint"></span>

                            </td>

                        </tr>
                        <tr align="center">
                            <td>邮箱</td>
                            <td><input name="email" type="text" id="email" value="" /></td>
                        </tr>
                    </table>
                    <div align="center" id="comment" style="padding-top:15px">
                        <input name="submit" type="submit" value="确认修改" id="submit">
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>

</html>
