//获取定位字符串
function getFormattedString() {
    var locate = window.location.href.split("#$p=")[1];
    if (locate != null) return locate; else return null;
}

//获取query参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

//开关模态框
function showTipModal(text) {
    var hint = $("#hint");
    var modal = $("#modal");

    hint.text(text);
    modal.addClass("show");
    modal.attr("aria-modal", "true");
    modal.attr("role", "dialog");
    modal.removeAttr("aria-hidden");
    modal.css("display", "block");
    modal.parent().append($('<div class="modal-backdrop show modal-bg"></div>'));
}
function closeTipModal() {
    var modal = $(".modal");

    modal.removeClass("show");
    modal.removeAttr("aria-modal");
    modal.removeAttr("role");
    modal.attr("aria-hidden", "true");
    modal.css("display", "none");
    $(".modal-bg").remove();
}

//询问操作
function askOp(param, mode, isDanger, btnText) {
    var message;
    switch (mode) {
        case "state": {
            message = "是否强制该用户登出";
            break;
        }
        case "delComment": {
            message = "是否删除该评论";
            break;
        }
        case "ban": {
            var time = getDateDiff(param["time"] * 1000);
            message = "你正在进行危险操作，是否要对用户 "
                + param["username"] + " 禁言至 " + time;
            break;
        }
    }
    if (message != null) {
        showTipModal(message);
    }
    if (isDanger) {
        $(".modal-header").addClass("bg-danger");
        $(".modal-title").css("color", "#FFF");
    }
    var confirm = $('<button type="button" class="btn btn-danger modal-confirm"></button>').text(btnText);
    $(".modal-footer").append(confirm);
    $(".modal-close").click(function () {
        closeTipModal();
        $(".modal-confirm").remove();
        $(".modal-header").removeClass("bg-danger");
        $(".modal-title").css("color", "#000");
    })
    $(".modal-confirm").click(function () {
        closeTipModal();
        $(".modal-confirm").remove();
        $(".modal-header").removeClass("bg-danger");
        $(".modal-title").css("color", "#000");
        switch (mode) {
            case "state": forceLogoutUser(param); break;
            case "delComment": delComment(param); break;
            case "ban": banUser(param); break;
            // case "cata": delCata(param); break;
            // case "post": delPost(param); break;
        }
    })
}

//开关模态框
function showBanModal(dom) {
    var modal = $("#banModal");
    $(".banUsername").val($(dom).attr("id").split("-")[1]);

    modal.addClass("show");
    modal.attr("aria-modal", "true");
    modal.attr("role", "dialog");
    modal.removeAttr("aria-hidden");
    modal.css("display", "block");
    modal.parent().append($('<div class="modal-backdrop show modal-bg"></div>'));
}

//询问禁言
function askBan() {
    setTimeout(function(){
        var username = $(".banUsername").val();
        var time = $(".modal-input").val();
        var item = {
            "username": username,
            "time": time
        };
        askOp(item, "ban", true, "禁言");
    },100);
}

//转化时间戳
function getDateDiff(dateTimeStamp) {
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var diffValue = dateTimeStamp;
    if (diffValue < 0) {
        return;
    }
    var monthC = diffValue / month;
    var weekC = diffValue / (7 * day);
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;
    if (monthC >= 1) {
        result = "" + parseInt(monthC) + "个月后";
    } else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "周后";
    } else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天后";
    } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时后";
    } else if (minC >= 1) {
        result = "" + parseInt(minC) + "分钟后";
    } else
        result = "一会后";
    return result;
}