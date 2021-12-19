var states;
var logoutIcon = $('<svg t="1639910353636" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1288" width="20" height="20"><path d="M512 322c-104.92 0-190 85.08-190 190s85.08 190 190 190 190-85.06 190-190-85.08-190-190-190z" p-id="1289" fill="#d81e06"></path></svg>');
var loginIcon = $('<svg t="1639910353636" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1288" width="20" height="20"><path d="M512 322c-104.92 0-190 85.08-190 190s85.08 190 190 190 190-85.06 190-190-85.08-190-190-190z" p-id="1289" fill="#1afa29"></path></svg>');
var logoutBtn = $('<svg t="1639910784321" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2265" width="20" height="20"><path d="M990.410486 511.991814 990.410486 511.991814 990.410486 511.991814 990.410486 511.991814zM488.481865 1022.310521 488.481865 1022.310521c-251.226788 0-454.892351-207.077266-454.892351-462.47812 0-193.325054 116.707049-358.866321 282.341437-427.981445l0 0.154519c4.923126-1.77339 10.184967-2.740414 15.69854-2.740414 25.977651 0 47.031153 21.429055 47.031153 47.840588 0 20.836561-13.0799 38.527478-31.363312 45.099151l0 0.063445c-129.070634 55.844889-219.614813 185.943946-219.614813 337.563132 0 202.576765 161.52786 366.796944 360.800369 366.796944 199.215204 0 360.739994-164.220179 360.739994-366.796944 0-151.620209-90.512457-281.719266-219.582067-337.563132l0-0.063445c-18.252713-6.571672-31.365358-24.26259-31.365358-45.099151 0-26.412556 21.086248-47.840588 47.062875-47.840588 5.480828 0 10.774391 0.964978 15.665795 2.740414l0-0.154519c165.66918 69.115124 282.343483 234.657414 282.343483 427.981445C943.346587 815.232233 739.7107 1022.310521 488.481865 1022.310521zM488.481865 527.937994c-26.00528 0-47.060829-21.428032-47.060829-47.839565L441.421037 197.038632l0 0L441.421037 100.329033l0 0L441.421037 49.529043c0-26.41358 21.055548-47.840588 47.060829-47.840588 25.977651 0 47.033199 21.428032 47.033199 47.840588l0 143.522788 0 95.681176 0 191.364399C535.515065 506.509962 514.459516 527.937994 488.481865 527.937994z" p-id="2266" fill="#d81e06"></path></svg>');

$(document).ready(function () {
    getUserStateData();
})

function getUserStateData() {
    $.ajax({
        url: "php/getUserState.php",
        type: "GET",
        dataType: "json",
        success: function (data) {
            if (data.code == 200) {
                initUserstate(data.data);
            } else {
                showTipModal("发生错误, code: " + data.code + ", message: " + data.message);
            }
            $(".modal-close").click(function () {
                closeTipModal();
            });

            //移除加载
            $("#state-loading").remove();
        },
        error: function (jqXHR, textStatus, error) {
            showTipModal("初始化用户状态时发生不可预计的错误: " + error);
            $(".modal-close").click(function () {
                closeTipModal();
            });

            //移除加载
            $("#state-loading").remove();
        }
    })
}

function initUserstate(items) {
    states = items;
    for (var i in items) {
        var item = items[i];

        if (item["isDel"] != 1) {
            var username = $('<span class="state-username col-item"></span>').text(item["username"]);
            var token = $('<span class="state-token col-item"></span>');
            var time = $('<span class="state-time col-item"></span>').text(item["timestamp"]);
            var state = $('<span class="state-state col-item"></span>');
            var logout = $('<a class="logoutBtn" style="text-decoration: none; padding: 5px; margin-right: 10px; cursor: pointer;"></a>');

            item["token"] != null ? token.text(item["token"]) : token.text("用户未登录或已登出");
            item["timestamp"] != null ? time.text(item["timestamp"]) : time.text("无");
            item["state"] ? state.addClass("isLogin") : state.addClass("isLogout");
            item["state"] ?
                logout.attr("onclick", 'askOp("' + item["username"] + '", "state", false, "登出");') :
                logout.attr("onclick", 'showTipModal("该用户不在登录状态，不能强制登出");');

            var username_container = $('<div class="col-2"></div>').append(username);
            var token_container = $('<div class="col-4"></div>').append(token);
            var time_container = $('<div class="col-2"></div>').append(time);
            var state_contianer = $('<div class="col-2"></div>').append(state);
            var logout_container = $('<div class="col-2"></div>').append(logout);

            var all_container = $('<div class="list-group-item list-group-item-action"></div>')
                .append($('<div class="row"></div>')
                    .append(username_container, token_container,
                        time_container, state_contianer, logout_container));

            $("#state-container").append(all_container);
        }
    }
    $(".isLogin").append(loginIcon);
    $(".isLogout").append(logoutIcon);
    $(".logoutBtn").append(logoutBtn);
}
