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
    switch(mode){
        case "state": {
            message = "是否强制该用户登出";
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
            // case "tag": delTag(param); break;
            // case "cata": delCata(param); break;
            // case "post": delPost(param); break;
        }
    })
}