//TODO: 公有模块应该分离
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

// get请求参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

// 根据user-id查询个人帖子
function requestData() {
    var page = getQueryString("page");
    if (page == null) {
        window.location.href = "my_post.html?page=1";
    }
    var uname = getCookie("username");
    var items = [];
    
    $.ajax({
        url: "./self_comment.php",
        method: "GET",
        data: {
            "page": page,
            "uname":uname,
        },

        success: function (data, textStatus, jqXHR) {
            if (data.code == "200") {
                var pageNum = data.pageNum;
                for (var i in data.data) {
                    if (data.data[i].content.length > 100) {
                        data.data[i].content = data.data[i].content.substr(0, 100) + "...";
                    }
                    var item = data.data[i];
                    items.push(item);
                }
                showTopic(items);
                initPageSwitcher(pageNum);
            } else {
                alert("页面出错: " + data.message);
            }
        },
        error: function (jqXHR, textStatus, error) {
            alert("发生服务器错误，请联系网站管理员。\n错误详情: " + error);
        },

        dataType: "json"
    })
    return items;


}

function showTopic(items){
    //item初始化
    for (var i in items) {
        var item = items[i];

        //根元素
        var a_container = $('<a class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true" style="justify-content: space-between;">');
        a_container.attr("href", "../post/post.html?page=1&postID=" + item['postID']);

        //枝元素
        var postContainer = $('<span class="post_contain"></span>');
        var postMember = $('<span class="post_member"></span>');

        //叶元素
        var postNum = $('<span class="post_num"></span>');
        postNum.text(item['postCount']);
        var postTitle = $('<h5 class="post_title"></h5>');
        postTitle.text(item['title']);
        var postDetail = $('<p class="post_detail"></p>');
        postDetail.text(item['content']);
        var poster = $('<span class="poster block" data-bs-toggle="tooltip" data-bs-placement="left" title="发帖人" style="margin-bottom: 5px"></span>');
        var posterSmall = $('<small></small>').text(item['ownUser']);
        var posterImg = $("<img src='../images/poster.png' style='width: 15px; height: fit-content; margin-right: 10px'>");
        poster.append(posterImg, posterSmall);
        var reporter = $('<span class="reporter block" data-bs-toggle="tooltip" data-bs-placement="left" title="最近回复" style="margin-bottom: 5px"></span>');
        var recentImg = $("<img src='../images/message.png' style='width: 15px; height: fit-content; margin-right: 10px'>");
        var reporterSmall = $('<small></small>').text(item['recentUser']);
        reporter.append(recentImg, reporterSmall);
        var recentTime = $('<span class="recent_time block" data-bs-toggle="tooltip" data-bs-placement="left" title="最近回复时间"></span>');
        var recentTimeSmall = $('<small></small>').text(item['timestamp']);
        recentTime.append(recentTimeSmall);

        //嵌套
        postContainer.append(postTitle);
        postContainer.append(postDetail);
        postMember.append(poster);
        postMember.append(reporter);
        postMember.append(recentTime);

        a_container.append(postNum);
        a_container.append(postContainer);
        a_container.append(postMember);

        //嵌入html
        var group = $("#list-group");
        group.append(a_container);
    }
}


// 分页
function initPageSwitcher(pageNum) {
    var nowPage = getQueryString("page");

    //上一页
    var itemContainer = $('#page_container');
    var previousItem = $('<li class="page-item"></li>');
    var previous = $('<a class="page-link">上一页</a>');
    previous.attr("href", "my_post.html?page=" + (nowPage - 1));
    if (nowPage == 1) {
        previousItem.addClass("disabled");
    }
    previousItem.append(previous);
    itemContainer.append(previousItem);

    for (var i = nowPage - 3; i < nowPage + 3; i++) {
        if (i > 0 && i <= pageNum) {
            var switcherItem = $('<li class="page-item"></li>');
            var pageSwitcher = $('<a class="page-link"></a>');
            pageSwitcher.text(i);
            pageSwitcher.attr("href", "my_post.html?page=" + i);
            switcherItem.append(pageSwitcher);
            itemContainer.append(switcherItem);
            if (i == nowPage) {
                switcherItem.addClass("active");
            }
        }
    }

    //下一页
    var nextItem = $('<li class="page-item"></li>');
    var next = $('<a class="page-link">下一页</a>');
    next.attr("href", "my_post.html?page=" + (Number(nowPage) + 1));
    if (nowPage == pageNum) {
        nextItem.addClass("disabled");
    }
    nextItem.append(next);
    itemContainer.append(nextItem);
}
