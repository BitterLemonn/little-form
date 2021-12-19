var position = "post";

$(document).ready(function () {
    //检测链接跳转卡片
    var position = getFormattedString();
    if (position != null) {
        var btn = $("#" + position + "-btn");

        $(".active").removeClass("active");
        $("svg.sidebar-icon").children("path").attr("fill", "#999")
        $("svg.sidebar-icon").siblings("span").css("color", "#999");

        btn.addClass("active");
        var svg = btn.children("svg");
        svg.children("path").attr("fill", "#EEE");
        svg.siblings("span").css("color", "#EEE");

        showCard(position + "-content-card");
    }

    $(".option").click(function () {
        $(".active").removeClass("active");
        $("svg.sidebar-icon").children("path").attr("fill", "#999")
        $("svg.sidebar-icon").siblings("span").css("color", "#999");
        $(this).addClass("active");
        var svg = $(this).children("svg");
        svg.children("path").attr("fill", "#EEE");
        svg.siblings("span").css("color", "#EEE");
    })
})

//缩放侧边栏
var isShowSideBar = false;

function toggleSideBar() {
    var sideBar = $(".side-bar");
    var text = $(".icon-text");
    var mainContainer = $(".main-wrapper");

    sideBar.stop(true, true);
    mainContainer.stop(true, true);

    if (!isShowSideBar) {
        setTimeout(() => {
            text.toggle("slow");
        }, 280);
        isShowSideBar = true;
        sideBar.animate({ width: "230px", position: "fixed" }, "slow");
        mainContainer.animate({ marginLeft: "230px" }, "slow");
    } else {
        text.toggle();
        isShowSideBar = false;
        sideBar.animate({ width: "65px", position: "absolute" }, "slow");
        mainContainer.animate({ marginLeft: "65px" }, "slow");
    }
}

//切换管理卡片
function showCard(cardName) {
    var title;
    switch (cardName) {
        case 'state-content-card': title = "状态管理"; break;
        // case 'catalogue-content-card': title = "分类管理"; break;
        // case 'tag-content-card': title = "标签管理"; break;
        // case 'page-content-card': title = "页面管理"; break;
        // case 'comment-content-card': title = "评论管理"; break;
    }

    var titleContent = $("#content-title");
    var allCard = $(".content-card");
    var displayCard = $("." + cardName);

    titleContent.stop(true, true);
    allCard.stop(true, true);
    displayCard.stop(true, true);

    allCard.fadeOut(200);
    titleContent.fadeOut(200);
    setTimeout(() => {
        titleContent.text(title);
        displayCard.fadeIn("slow");
        titleContent.fadeIn("slow");
    }, 200);
}   
