var check_username = false;
var check_password = false;
var check_email = false;

function InitCheckEl() {
    var userPane = new Vue({
        el: '#userPane',
        data: {
            username_input: ''
        },
        updated: function () {
            onUsernameCheck();
            $("#err_hint").text('');
        }
    })

    var passwordPane = new Vue({
        el: "#passwordPane",
        data: {
            password_input: ''
        },
        updated: function () {
            onPasswordCheck();
            $("#err_hint").text('');
        }
    })

    var confirmPane = new Vue({
        el: '#confirmPane',
        data: {
            confirm_input: ''
        },
        updated: function () {
            onPasswordCheck()
            $("#err_hint").text('');
        }
    })

    var emailPane = new Vue({
        el: '#emailPane',
        data: {
            email_input: ''
        },
        updated: function () {
            onEmailCheck()
            $("#err_hint").text('');
        }
    })
}

function onUsernameCheck() {
    var username = document.getElementById("username");
    var rule = /^[A-Za-z0-9._-]{3,15}$/;
    if (!rule.test(username.value)) {
        $("#username_hint").text("用户名3-15位,且只能使用英文、数字以及 .-_");
        check_username = false;
    } else {
        $("#username_hint").text('');
        check_username = true;
    }
}

function onPasswordCheck() {
    var password = document.getElementById("password");
    var confirm = document.getElementById("confirm");
    var password_hint = document.getElementById("password_hint");
    var confirm_hint = document.getElementById("confirm_hint");
    var rule = /^.+$/;

    if (rule.test(password.value)) {
        password_hint.innerHTML = "";
        if (password.value !== confirm.value) {
            confirm_hint.innerHTML = "两次输入的密码不一致";
            check_password = false;
        } else {
            confirm_hint.innerHTML = "";
            check_password = true;
        }
    } else {
        password_hint.innerHTML = "密码不能为空";
        check_password = false;
    }
}

function onEmailCheck() {
    var email = document.getElementById("email");
    var hint = document.getElementById("email_hint");
    var rule = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;

    if (!rule.test(email.value)) {
        hint.innerHTML = "请输入正确的邮箱地址";
        check_email = false;
    } else {
        hint.innerHTML = "";
        check_email = true;
    }
}

function check() {
    onUsernameCheck();
    onPasswordCheck();
    onEmailCheck();
    if (check_username && check_email && check_password) {
        var formData = $("#form").serialize()
        
        $.ajax({
            url: "register.php",
            type: "POST",
            data: formData,

            success: function(data, textStatus, jqXHR){
                if(data["code"] == 202){
                    $("#err_hint").text("用户名已存在");
                }else if(data["code"] == 500){
                    $("#err_hint").text("发生数据库错误, 请联系网站管理员。错误详情: message: " + data["message"]);
                }else if(data["code"] == 200){
                    window.location.href='../home/home.html?page=1';
                }else{
                    $("#err_hint").text("发生不可预计的错误, 请联系网站管理员。错误详情: code: " + data["code"] + ", message: " + data["message"]);
                }
            },
            error: function(data, textStatus, jqXHR){
                $("#err_hint").text("发生未知错误,请联系网站管理员: " + error);
            }
        })
        return false;
    } else {
        $("#err_hint").text("请检查信息填写的正确性");
        return false;
    }
}