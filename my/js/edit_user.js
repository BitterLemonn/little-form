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

// 查询用户基本信息
function getUser(){
    $.ajax({
        url: "updaMe.php",
        type: "GET",
        data: {
            "uname":getCookie("username")
        },
        success: function (data, textStatus, jqXHR) {
            if (data["code"] == 200) {
                document.getElementById("userName").value = data["data"]["username"];
                document.getElementById("email").value = data["data"]["email"];
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
        $("#passwordHint").text('');
        return true;
    }
    return true;
}

function edit() {
    if (checkPassword()){
        var formData = $("#form").serialize();
        $.ajax({
            url: "updaMe.php",
            type: "POST",
            data: formData,
    
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

    }else{
        return false;
    }
}