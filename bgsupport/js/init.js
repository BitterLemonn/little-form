var states;
var comments;

var logoutIcon = $('<svg t="1639910353636" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1288" width="20" height="20"><path d="M512 322c-104.92 0-190 85.08-190 190s85.08 190 190 190 190-85.06 190-190-85.08-190-190-190z" p-id="1289" fill="#d81e06"></path></svg>');
var loginIcon = $('<svg t="1639910353636" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1288" width="20" height="20"><path d="M512 322c-104.92 0-190 85.08-190 190s85.08 190 190 190 190-85.06 190-190-85.08-190-190-190z" p-id="1289" fill="#1afa29"></path></svg>');
var logoutBtn = $('<svg t="1639910784321" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2265" width="20" height="20"><path d="M990.410486 511.991814 990.410486 511.991814 990.410486 511.991814 990.410486 511.991814zM488.481865 1022.310521 488.481865 1022.310521c-251.226788 0-454.892351-207.077266-454.892351-462.47812 0-193.325054 116.707049-358.866321 282.341437-427.981445l0 0.154519c4.923126-1.77339 10.184967-2.740414 15.69854-2.740414 25.977651 0 47.031153 21.429055 47.031153 47.840588 0 20.836561-13.0799 38.527478-31.363312 45.099151l0 0.063445c-129.070634 55.844889-219.614813 185.943946-219.614813 337.563132 0 202.576765 161.52786 366.796944 360.800369 366.796944 199.215204 0 360.739994-164.220179 360.739994-366.796944 0-151.620209-90.512457-281.719266-219.582067-337.563132l0-0.063445c-18.252713-6.571672-31.365358-24.26259-31.365358-45.099151 0-26.412556 21.086248-47.840588 47.062875-47.840588 5.480828 0 10.774391 0.964978 15.665795 2.740414l0-0.154519c165.66918 69.115124 282.343483 234.657414 282.343483 427.981445C943.346587 815.232233 739.7107 1022.310521 488.481865 1022.310521zM488.481865 527.937994c-26.00528 0-47.060829-21.428032-47.060829-47.839565L441.421037 197.038632l0 0L441.421037 100.329033l0 0L441.421037 49.529043c0-26.41358 21.055548-47.840588 47.060829-47.840588 25.977651 0 47.033199 21.428032 47.033199 47.840588l0 143.522788 0 95.681176 0 191.364399C535.515065 506.509962 514.459516 527.937994 488.481865 527.937994z" p-id="2266" fill="#d81e06"></path></svg>');
var delIcon = $('<svg t="1639920413277" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4110" width="20" height="20"><path d="M607.897867 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L575.903242 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 351.94087C639.892491 753.593818 625.61532 768.043004 607.897867 768.043004z" p-id="4111" fill="#d81e06"></path><path d="M415.930119 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L383.935495 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625 17.717453 0 31.994625 14.277171 31.994625 31.994625l0 351.94087C447.924744 753.593818 433.647573 768.043004 415.930119 768.043004z" p-id="4112" fill="#d81e06"></path><path d="M928.016126 223.962372l-159.973123 0L768.043004 159.973123c0-52.980346-42.659499-95.983874-95.295817-95.983874L351.94087 63.989249c-52.980346 0-95.983874 43.003528-95.983874 95.983874l0 63.989249-159.973123 0c-17.717453 0-31.994625 14.277171-31.994625 31.994625s14.277171 31.994625 31.994625 31.994625l832.032253 0c17.717453 0 31.994625-14.277171 31.994625-31.994625S945.73358 223.962372 928.016126 223.962372zM319.946246 159.973123c0-17.545439 14.449185-31.994625 31.994625-31.994625l320.806316 0c17.545439 0 31.306568 14.105157 31.306568 31.994625l0 63.989249L319.946246 223.962372 319.946246 159.973123 319.946246 159.973123z" p-id="4113" fill="#d81e06"></path><path d="M736.048379 960.010751 288.123635 960.010751c-52.980346 0-95.983874-43.003528-95.983874-95.983874L192.139761 383.591466c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 480.435411c0 17.717453 14.449185 31.994625 31.994625 31.994625l448.096758 0c17.717453 0 31.994625-14.277171 31.994625-31.994625L768.215018 384.795565c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 479.231312C832.032253 916.835209 789.028725 960.010751 736.048379 960.010751z" p-id="4114" fill="#d81e06"></path></svg>');
var banIcon = $('<svg t="1639920551968" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4505" width="20" height="20"><path d="M960 160h32c17.7 0 32-14.3 32-32V68c0-2.2-1.8-4-4-4H4c-2.2 0-4 1.8-4 4v60c0 17.7 14.3 32 32 32h32c8.8 0 16 7.2 16 16v672c0 8.8-7.2 16-16 16H32c-17.7 0-32 14.3-32 32v60c0 2.2 1.8 4 4 4h1016c2.2 0 4-1.8 4-4v-60c0-17.7-14.3-32-32-32h-32c-8.8 0-16-7.2-17-16V176c1-8.8 8.2-16 17-16z m-304 16c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v176c0 8.8-7.2 16-16 16H672c-8.8 0-16-7.2-16-16V176zM272 848c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v672z m288 0c0 8.8-7.2 16-16 16H384c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v672z m288 0c0 8.8-7.2 16-16 16H672c-8.8 0-16-7.2-16-16V704c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v144z m-17-281.4c-0.5 0.7-1 1.4-1.4 2-0.1 0.1-0.1 0.2-0.2 0.3-0.5 0.7-1 1.3-1.5 2-0.5 0.6-0.9 1.2-1.4 1.7-0.3 0.4-0.6 0.8-0.9 1.1-0.2 0.2-0.4 0.5-0.6 0.7-0.3 0.4-0.6 0.7-0.9 1.1-0.7 0.9-1.5 1.7-2.3 2.5-1.4 1.5-2.8 2.9-4.2 4.2-0.4 0.4-0.8 0.8-1.2 1.1l-0.4 0.4c-0.3 0.3-0.7 0.6-1.1 1-0.5 0.4-1 0.8-1.5 1.3l-1.5 1.2c-0.4 0.3-0.8 0.7-1.2 1-0.6 0.4-1.2 0.9-1.7 1.3-0.6 0.5-1.3 0.9-1.9 1.4-0.2 0.1-0.4 0.3-0.5 0.4-0.4 0.3-0.9 0.6-1.3 0.9l-0.9 0.6c-0.6 0.4-1.3 0.8-1.9 1.2-0.7 0.4-1.3 0.8-2 1.2-0.1 0.1-0.2 0.1-0.3 0.2-10 5.8-16 16.7-16 28.2v0.6c0 0.9 0 1.8-0.1 2.6-0.1 0.7-0.1 1.5-0.3 2.2-0.1 0.8-0.3 1.6-0.5 2.4-0.1 0.5-0.2 0.9-0.4 1.4-0.5 1.8-1.2 3.6-2 5.2-0.2 0.4-0.4 0.8-0.7 1.3-0.2 0.5-0.5 0.9-0.8 1.3-0.1 0.2-0.3 0.4-0.4 0.7-0.1 0.2-0.3 0.4-0.4 0.7-0.1 0.2-0.3 0.4-0.4 0.6l-0.9 1.2c-0.2 0.2-0.3 0.4-0.5 0.6-0.5 0.6-1 1.2-1.5 1.7-0.2 0.2-0.3 0.4-0.5 0.6-0.2 0.2-0.3 0.4-0.5 0.5-0.4 0.3-0.7 0.7-1.1 1-0.4 0.3-0.8 0.7-1.2 1-0.2 0.1-0.4 0.3-0.5 0.4-0.4 0.3-0.9 0.7-1.3 1-0.2 0.1-0.4 0.3-0.6 0.4-0.9 0.6-1.7 1.1-2.7 1.6l-0.6 0.3c-0.5 0.2-1 0.5-1.4 0.7-0.2 0.1-0.4 0.2-0.7 0.3-0.1 0-0.2 0.1-0.3 0.1-0.2 0.1-0.5 0.2-0.7 0.3-0.4 0.1-0.8 0.3-1.2 0.4-0.3 0.1-0.5 0.2-0.7 0.2-0.1 0-0.2 0.1-0.4 0.1-0.2 0.1-0.4 0.1-0.6 0.2-1.9 0.5-3.8 0.8-5.8 1h-4.2c-0.5 0-1.1-0.1-1.6-0.1-16.1-1.6-28.7-15.3-28.7-31.8v-0.7c0-11.7-6.3-22.4-16.3-28.3-0.1-0.1-0.1-0.1-0.2-0.1-0.7-0.4-1.4-0.8-2.1-1.3-0.2-0.1-0.5-0.3-0.7-0.4-0.6-0.4-1.2-0.8-1.8-1.1l-2.1-1.5c-0.3-0.2-0.6-0.4-0.9-0.7-0.4-0.3-0.9-0.6-1.3-1l-2.4-1.8c-0.3-0.3-0.7-0.5-1-0.8-0.3-0.3-0.7-0.6-1-0.8-0.3-0.3-0.7-0.6-1-0.9-1.4-1.2-2.7-2.4-4-3.7L684 580c-0.7-0.7-1.4-1.4-2-2.1-0.4-0.4-0.7-0.8-1.1-1.2l-0.6-0.6c-0.3-0.3-0.6-0.7-0.9-1.1-0.4-0.5-0.9-1-1.3-1.5-0.3-0.4-0.6-0.7-0.9-1.1l-1.2-1.5c-0.5-0.6-1-1.2-1.4-1.9l-0.2-0.2c-0.2-0.3-0.4-0.6-0.6-0.8-0.4-0.5-0.7-1-1-1.4-0.1-0.1-0.2-0.3-0.3-0.5-0.5-0.7-1-1.4-1.4-2.2-9.5-14.9-15-32.6-15-51.6s5.5-36.7 15-51.6c17-26.7 47-44.4 81-44.4 32.8 0 61.7 16.4 79 41.4 10.7 15.5 17 34.3 17 54.6s-6.4 38.8-17.1 54.3z" p-id="4506" fill="#2c2c2c"></path><path d="M784 512c0 8.3-3 14.4-5.6 18.1-3.8 5.5-9.4 9.8-15.6 12-3.3 1.2-6.9 1.8-10.6 1.8s-7.3-0.6-10.6-1.8c-6.7-2.4-12.5-7-16.4-13-3.3-5.2-5-10.9-5-17.1 0-6.2 1.7-12 5-17.1 5.9-9.3 16-14.9 27-14.9 10.5 0 20.4 5.2 26.4 13.9 2.4 3.7 5.4 9.8 5.4 18.1z" p-id="4507" fill="#2c2c2c"></path></svg>')

$(document).ready(function () {
    getUserStateData();
    getCommentData();
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

function getCommentData() {
    $.ajax({
        url: "php/getComment.php",
        type: "GET",
        dataType: "json",
        success: function (data) {
            if (data.code == 200) {
                initComment(data.data);
            } else {
                showTipModal("发生错误, code: " + data.code + ", message: " + data.message);
            }
            $(".modal-close").click(function () {
                closeTipModal();
            });

            //移除加载
            $("#comment-loading").remove();
        },
        error: function (jqXHR, textStatus, error) {
            showTipModal("初始化用户状态时发生不可预计的错误: " + error);
            $(".modal-close").click(function () {
                closeTipModal();
            });

            //移除加载
            $("#comment-loading").remove();
        }
    })
}

function initUserstate(items) {
    states = items;

    for (var i in items) {
        var item = items[i];
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
    $(".isLogin").append(loginIcon);
    $(".isLogout").append(logoutIcon);
    $(".logoutBtn").append(logoutBtn);
}

function initComment(items) {
    comments = items;

    for (var i in items) {
        var item = items[i];
        var tmpComment;

        var username = $('<span class="comment-username col-item"></span>').text(item["username"]);
        var title = $('<span class="comment-title col-item"></span>').text(item["ownPost"]);
        var comment = $('<span class="comment-cotent col-item"></span>');
        var time = $('<span class="comment-time col-item"></span>').text(item["timestamp"]);
        var del = $('<a class="delBtn" style="text-decoration: none; padding: 5px; margin-right: 10px; cursor: pointer;"></a>');
        var ban = $('<a class="banBtn" style="text-decoration: none; padding: 5px; cursor: pointer;"></a>');

        del.attr("onclick", "askOp('" + item["id"] + "', 'delComment', false, '删除')");
        if (item["comment"].length > 25) {
            comment.text(item["comment"].substr(0, 25) + "...");
            comment.css("color", "#6777db");
            comment.attr("id", "comment-" + i);
            comment.click(function(){
                var id = $(this).attr("id");
                var text = items[id.split("-")[1]]["comment"];
                $(this).text(text);
                $(this).css("color", "");
            })
        } else {
            comment.text(item["comment"]);
        }

        var username_container = $('<div class="col-2"></div>').append(username);
        var title_contianer = $('<div class="col-2"></div>').append(title);
        var comment_container = $('<div class="col-4"></div>').append(comment);
        var time_container = $('<div class="col-2"></div>').append(time);
        var tool_container = $('<div class="col-2"></div>').append(del, ban);

        var all_container = $('<div class="list-group-item list-group-item-action"></div>')
            .append($('<div class="row"></div>')
                .append(username_container, title_contianer,
                    comment_container, time_container, tool_container));

        $("#comment-container").append(all_container);

    }
    $(".delBtn").append(delIcon);
    $(".banBtn").append(banIcon);
}

