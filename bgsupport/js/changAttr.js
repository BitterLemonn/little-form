function forceLogoutUser(username) {
    $.ajax({
        url: "php/forceLogout.php",
        type: "POST",
        data: {
            "username": username
        },
        dataType: "JSON",
        success: function(data){
            if(data.code == 200){
                showTipModal("强制登出成功");
                setTimeout(function(){
                    window.location.reload();
                }, 1000);
            } else {
                showTipModal("发生错误, code: " + data.code + ", message: " + data.message);
            }
            $(".modal-close").click(function () {
                closeTipModal();
            });
        },
        error: function(jqXHR, textStatus, error){
            showTipModal("强制登出用户时发生不可预料的错误: " + error);
            $(".modal-close").click(function () {
                closeTipModal();
            });
        }
    })
}