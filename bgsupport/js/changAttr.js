function forceLogoutUser(username) {
    $.ajax({
        url: "php/forceLogout.php",
        type: "POST",
        data: {
            "username": username
        },
        dataType: "JSON",
        success: function (data) {
            if (data.code == 200) {
                showTipModal("强制登出成功");
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            } else {
                showTipModal("发生错误, code: " + data.code + ", message: " + data.message);
            }
            $(".modal-close").click(function () {
                closeTipModal();
            });
        },
        error: function (jqXHR, textStatus, error) {
            showTipModal("强制登出用户时发生不可预料的错误: " + error);
            $(".modal-close").click(function () {
                closeTipModal();
            });
        }
    })
}

function delComment(id) {
    $.ajax({
        url: "php/delComment.php",
        type: "POST",
        data: {
            "id": id
        },
        dataType: "JSON",
        success: function (data) {
            if (data.code == 200) {
                showTipModal("删除评论成功");
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            } else {
                showTipModal("发生错误, code: " + data.code + ", message: " + data.message);
            }
            $(".modal-close").click(function () {
                closeTipModal();
            });
        },
        error: function (jqXHR, textStatus, error) {
            showTipModal("删除评论时发生不可预料的错误: " + error);
            $(".modal-close").click(function () {
                closeTipModal();
            });
        }
    })
}

function banUser(param) {
    $.ajax({
        url: "php/banUser.php",
        type: "POST",
        data: param,
        dataType: "JSON",
        success: function (data) {
            if (data.code == 200) {
                showTipModal("关小黑屋成功");
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            } else {
                showTipModal("发生错误, code: " + data.code + ", message: " + data.message);
            }
            $(".modal-close").click(function () {
                closeTipModal();
            });
        },
        error: function (jqXHR, textStatus, error) {
            showTipModal("关小黑屋时发生不可预料的错误: " + error);
            $(".modal-close").click(function () {
                closeTipModal();
            });
        }
    })
}

function unbanUser(username) {
    $.ajax({
        url: "php/unbanUser.php",
        type: "POST",
        data: {
            "username": username
        },
        dataType: "JSON",
        success: function (data) {
            if (data.code == 200) {
                showTipModal("解除禁言成功");
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            } else {
                showTipModal("发生错误, code: " + data.code + ", message: " + data.message);
            }
            $(".modal-close").click(function () {
                closeTipModal();
            });
        },
        error: function (jqXHR, textStatus, error) {
            showTipModal("解除禁言时发生不可预料的错误: " + error);
            $(".modal-close").click(function () {
                closeTipModal();
            });
        }
    })
}

function delPost(id){
    $.ajax({
        url: "php/delPost.php",
        type: "POST",
        data: {
            "postID": id
        },
        dataType: "JSON",
        success: function (data) {
            if (data.code == 200) {
                showTipModal("删除成功");
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            } else {
                showTipModal("发生错误, code: " + data.code + ", message: " + data.message);
            }
            $(".modal-close").click(function () {
                closeTipModal();
            });
        },
        error: function (jqXHR, textStatus, error) {
            showTipModal("删除帖子时发生不可预料的错误: " + error);
            $(".modal-close").click(function () {
                closeTipModal();
            });
        }
    })
}