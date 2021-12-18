//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
<<<<<<< HEAD
// 查询用户基本信息
function getUser() {
=======

// 查询用户基本信息
function getUser(){
>>>>>>> b0625fea7dd2921ce92114fcd24b8f370d31fb3c
    $.ajax({
        url: "updaMe.php",
        type: "GET",
        data: {
<<<<<<< HEAD
            "uname": getCookie("username")
=======
            "uname":getCookie("username")
>>>>>>> b0625fea7dd2921ce92114fcd24b8f370d31fb3c
        },
        success: function (data, textStatus, jqXHR) {
            if (data["code"] == 200) {
                document.getElementById("userName").value = data["data"]["username"];
                document.getElementById("email").value = data["data"]["email"];
<<<<<<< HEAD
                document.getElementById("profile").src = data["data"]["profile"] || '../../images/me.jpg'
=======
>>>>>>> b0625fea7dd2921ce92114fcd24b8f370d31fb3c
            }
            else {
                $("#errHint").text("发生不可预计的错误, 请联系网站管理员。错误详情: code: " + data["code"] + ", message: " + data["message"]);
            }
        },
        error: function (jqXHR, textStatus, error) {
            $("#errHint").text("发生未知错误,请联系网站管理员: " + error);
        }
    })
    return false;
}

<<<<<<< HEAD
function checkPassword() {
    var password = $("#password").val();
    var password1 = $("#password1").val();
    var rule = /^.+$/
    if (password == "" || password1 == "") {
        $("#passwordHint").text('密码不能为空');
        return false;
    } else if (password !== password1) {
        //输入校验结果
        $("#passwordHint").text('两次密码不一致');
        return false;
    } else if (rule.test(password)) {
=======
function checkPassword(){
    var password = $("#password").val();
    var password1 = $("#password1").val();
    var rule = /^.+$/
    if(password==""||password1==""){
        $("#passwordHint").text('密码不能为空');
        return false;
    }else if(password!==password1){
        //输入校验结果
        $("#passwordHint").text('两次密码不一致');
        return false;
    }else if(rule.test(password)){
>>>>>>> b0625fea7dd2921ce92114fcd24b8f370d31fb3c
        $("#passwordHint").text('');
        return true;
    }
    return true;
}

function edit() {
<<<<<<< HEAD
    if (checkPassword()) {
=======
    if (checkPassword()){
>>>>>>> b0625fea7dd2921ce92114fcd24b8f370d31fb3c
        var formData = $("#form").serialize();
        $.ajax({
            url: "updaMe.php",
            type: "POST",
            data: formData,
<<<<<<< HEAD

=======
    
>>>>>>> b0625fea7dd2921ce92114fcd24b8f370d31fb3c
            success: function (data, textStatus, jqXHR) {
                if (data["code"] == 200) {
                    alert("用户信息修改成功");
                    window.location.href = "my_post.html?page=1";

                } else if (data["code"] == 202) {
                    alert("修改失败");
                }
                else {
                    $("#errHint").text("发生不可预计的错误, 请联系网站管理员。错误详情: code: " + data["code"] + ", message: " + data["message"]);
                }
            },
            error: function (jqXHR, textStatus, error) {
                $("#errHint").text("发生未知错误,请联系网站管理员: " + error);
            }
        })
        return false;

<<<<<<< HEAD
    } else {
=======
    }else{
>>>>>>> b0625fea7dd2921ce92114fcd24b8f370d31fb3c
        return false;
    }
}