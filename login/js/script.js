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

function InitCheckEl(){
    var userPane = new Vue({
        el: "#userPane",
        data: {
            username_input: ''
        },
    
        updated: function(){
            checkUsername();
            $("#errHint").text('');
        }
    })

    var passwordPane = new Vue({
        el: "#passwordPane",
        data: {
            password_input: ''
        },

        updated: function(){
            checkPassword();
            $("#errHint").text('');
        }
    })
}

var checkU = false;
var checkP = false;

function checkUsername(){
    var username = $("#username").val();
    var rule = /^[A-Za-z0-9._-]{3,15}$/;

    if(rule.test(username)){
        $("#usernameHint").text('');
        checkU = true;
    }else{
        $("#usernameHint").text('用户名3-15位,且只能使用英文、数字以及 .-_');
        checkU= false;
    }
}

function checkPassword(){
    var password = $("#password").val();
    var rule = /^.+$/

    if(rule.test(password)){
        $("#passwordHint").text('');
        checkP = true;
    }else{
        $("#passwordHint").text('密码不能为空');
        checkP = false;
    }
}

function check(){
    checkPassword();
    checkUsername();

    if(checkP && checkU){
        var formData = $("#form").serialize();

        $.ajax({
            url: "login.php",
            type: "POST",
            data: formData,
            
            success: function(data, textStatus, jqXHR){
                if(data["code"] == 200){
                    if(getCookie("username") == "admin"){
                        window.location.href = "../bgsupport/frame.html";
                    }else{
                        window.location.href = "../home/home.html?page=1";
                    }
                }else if(data["code"] == 202){
                    $("#errHint").text("用户名或者密码错误");
                }
                else{
                    $("#errHint").text("发生不可预计的错误, 请联系网站管理员。错误详情: code: " + data["code"] + ", message: " + data["message"]);
                }
            },
            error: function(jqXHR, textStatus, error){
                $("#errHint").text("发生未知错误,请联系网站管理员: " + error);
            }
        })
    }else{
        $("#errHint").text("请检查信息正确性");
    }

    return false;
}

$(document).ready(function(){
    if(getCookie("username") != "" && getCookie("token") != ""){
        $.ajax({
            url: "login.php",
            type: "get",
            data: null,
            dataType: "json",
            success:function(data){
                if(data.code == 200){
                    window.location.href = "../home/home.html?page=1";
                }
            }
        })
    }
})