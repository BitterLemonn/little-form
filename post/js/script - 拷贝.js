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

//获取get参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function requestData() {
    var page = getQueryString("page");
    var postID = getQueryString("postID");
    if (page == null || postID == null) {
        showTipModal("未传入page值或postID值");
        $(".modal-close").click(function () {
            closeTipModal();
        });
        setTimeout(() => {
            window.location.href = "../home/home.html";
        }, 1000);
    }
    var items = [];

    $.ajax({
        url: "../utils/getPostContent.php",
        type: "GET",
        data: {
            "page": page,
            "postID": postID
        },

        success: function (data, textStatus, jqXHR) {
            if (data.code == 200) {
                var pageCount = data.pageCount;
                for (var i in data.data) {
                    var item = data.data[i];
                    items.push(item);
                }
            } else if (data.code == 401) {
                showTipModal(data.message);
            } else {
                showTipModal("发生错误, code: " + data.code + ", message: " + data.message);
            }
            initItem(items, data.title);
            initPageSwitcher(pageCount);

            $(".modal-close").click(function () {
                closeTipModal();
            })
        },
        error: function (jqXHR, textStatus, error) {
            showTipModal("发生不可预计的错误, message: " + error);
            $(".modal-close").click(function () {
                closeTipModal();
            })
        },

        dataType: "json"
    })

    return items;
}

function initItem(items, title) {

    //设置标题
    $("#post_title").text(title);

    //设置删除帖子
    getCookie("username") == items[0]["username"] ? $("#post_del").css("display", "inline-block") : $("#post_del").css("display", "none");
    $("#post_del").attr("onclick", "askDel(" + getQueryString("postID") + ", true);");

    //设置回复ID
    var IDSetter = $('<input name="postID" type="hidden">');
    IDSetter.attr("value", getQueryString("postID"));
    $("#reply_contain").append(IDSetter);

    //计算楼数
    var main_post = (getQueryString("page") - 1) * 10 + 1;
    for (var i in items) {
        var item = items[i];
        //主贴
        if (item["type"] == 0) {
			var u_img = item['profile'] ? "../../my/" + item['profile']:"../images/img2.jpg"
            //叶节点
            var img = $('<img class="rounded-circle userImg" src="../../my/'+item["profile"]+'" alt="userIcon" style="width: 70px; height: 70px;">');
            var username = $('<span class="username" style="display: block;"></span>');
            var comment = $('<div class="comment_contain"></div>');
            var comment_time = $('<span class="comment_time"></span>');
            var floor_num = $('<span class="floor_num"></span>');

            //枝节点
            var comment_container = $('<div class="comment float-end" style="min-height: 150px; background: #fff; width: 85%;"></div>');
            var userIcon = $('<div class="userIcon float-start" style="width: 15%; text-align: center; margin: 20px auto;"></div>');
            var comment_tool = $('<div class="comment_tool float-end"></div>');
            var tool_container = $('<div class="float-end" style="margin: 5px 20px;"></div>').append(comment_time, floor_num);
            comment_container.append(comment);
            userIcon.append(img, username);
            comment_tool.append(tool_container);

            var reply_group = $('<div class="list-group" style="background: #fff; padding-bottom: 10px"></div>');
            reply_group.attr("id", "reply_ID" + item["commentID"]);
            var reply_container = $('<div class="reply_display float-end"></div>').append(reply_group);

            //根节点
            var list_item = $('<div class="list-item comment_item"></div>');
            list_item.attr("id", "commentID" + item["commentID"]);
            list_item.append(userIcon, comment_container, comment_tool, reply_container);

            username.text(item["username"]);
            comment.text(item["comment"]);
            comment_time.text(item["timestamp"]);
            floor_num.text(main_post + " 楼");

            //贴主可以删除
            if (item["username"] == getCookie("username") && main_post != 1) {
                var del_reply = $('<span class="small float-end" style="margin-left:10px; color: red; cursor: pointer; line-height: 25px">删除</span>');
                del_reply.attr("onclick", "askDel(" + item["commentID"] + ", false);");
                tool_container.append(del_reply);
            }

            main_post++;

            //添加显示
            $("#list-group").append(list_item);

            //楼中楼
            if (item["childComment"].length != 0) {

                //添加收起回复
                var hide_reply = $('<span class="small" style="color:#999; cursor: pointer; margin-left: 20px;">收起回复</span>');
                hide_reply.attr("onclick", "hideReply(" + item["commentID"] + ");");
                hide_reply.attr("id", "hide_ID" + item["commentID"]);
                tool_container.append(hide_reply);

                for (var j in item["childComment"]) {
                    var num_floor = item["childComment"][j];

                    for (var k in items) {
                        if (items[k]["commentID"] == num_floor) {
                            //叶节点
                            var img = $('<img src="../../my/'+item["profile"]+'" alt="userIcon" class="reply_userIcon img-thumbnail">');
                            var username = $('<span></span>');
                            username.text(items[k]["username"] + ": ");
                            var comment = $("<span></span>");
                            comment.text(items[k]["comment"]);
                            var comment_time = $('<span class="reply_time"></span>');
                            comment_time.text(items[k]["timestamp"]);
                            var reply = $('<span class="reply small" style="color: blue; cursor: pointer; margin-left: 10px;">回复</span>');
                            reply.attr("onclick", "showFloorReply(" + item["commentID"] + ", '" + items[k]["username"] + "');");

                            //枝节点
                            var reply_tool = $('<div class="reply_tool small" style="color: #999; text-align: end;"></div>');
                            reply_tool.append(comment_time, reply);
                            var reply_comment = $('<div class="reply_comment" style="display: inline-block;"></div>');
                            reply_comment.append(comment);
                            var user_info = $('<div class="userInfo" style="display: inline-block;"></div>');
                            user_info.append(img, username);

                            //贴主可以删除
                            if (items[k]["username"] == getCookie("username")) {
                                var del_reply = $('<span class="small float-end" style="margin-left:10px; color: red; cursor: pointer; line-height: 20px;">删除</span>');
                                del_reply.attr("onclick", "askDel(" + items[k]["commentID"] + ", false);");
                                reply_tool.append(del_reply);
                            }

                            //根节点
                            var reply_item = $('<div class="list-item reply_item mx-auto"></div>').append(user_info, reply_comment, reply_tool);

                            //添加显示
                            $("#reply_ID" + items[k]["ownContent"]).append(reply_item);
                        }
                    }

                    //大于5条先只显示5条
                    if (j == 4 && item["childComment"].length > 5) {
                        //插入查看更多
                        addShowMore(item["commentID"], 0);
                        break;
                    }
                }
                //添加回复楼中楼
                addFloorReply(item["commentID"]);
            } else {
                //没有楼中楼则在收起回复的地方添加回复
                var floor_reply = $('<span class="small float-end" style="margin-left:10px; color: blue; cursor: pointer; line-height: 25px">回复</span>');
                floor_reply.attr("onclick", "toggleFloorReply(" + item["commentID"] + ", null);");
                floor_reply.attr("id", "showFloorReply" + item["commentID"]);
                tool_container.append(floor_reply);

                //添加回复窗口
                addFloorReplyForm(item["commentID"]);
            }
        }
    }

    //个人信息按钮
    var my = $("#my_dropdown");
    my.text(getCookie("username"));
    my.mouseenter(function () {
        my.css("display", "none");
        my.fadeIn("slow");
        my.text("你好, " + getCookie("username"));
    })
    my.mouseleave(function () {
        my.css("display", "none");
        my.fadeIn("slow");
        my.text(getCookie("username"));
    })
}

//登出
function logout() {
    var time = new Date().toGMTString();
    document.cookie = "username=; expires=" + time + "; path=/";
    window.location.href = "../login/login.html";
}

function initPageSwitcher(pageCount) {
    var nowPage = getQueryString("page");

    //上一页
    var itemContainer = $('#page_container');
    var previousItem = $('<li class="page-item"></li>');
    var previous = $('<a class="page-link">上一页</a>');
    previous.attr("href", "post.html?page=" + (nowPage - 1) + "&postID=" + getQueryString("postID"));
    if (nowPage == 1) {
        previousItem.addClass("disabled");
    }
    previousItem.append(previous);
    itemContainer.append(previousItem);

    for (var i = nowPage - 3; i < nowPage + 3; i++) {
        if (i > 0 && i <= pageCount) {
            var switcherItem = $('<li class="page-item"></li>');
            var pageSwitcher = $('<a class="page-link"></a>');
            pageSwitcher.text(i);
            pageSwitcher.attr("href", "post.html?page=" + i + "&postID=" + getQueryString("postID"));
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
    next.attr("href", "post.html?page=" + (Number(nowPage) + 1) + "&postID=" + getQueryString("postID"));
    if (nowPage == pageCount) {
        nextItem.addClass("disabled");
    }
    nextItem.append(next);
    itemContainer.append(nextItem);
}

//开启模态框
function showTipModal(text) {
    var err = $("#err");
    var modal = $("#modal");
    err.text(text);
    modal.addClass("show");
    modal.attr("aria-modal", "true");
    modal.attr("role", "dialog");
    modal.removeAttr("aria-hidden");
    modal.css("display", "block");
    modal.parent().append($('<div class="modal-backdrop show" id="modal-bg"></div>'));
}

//关闭模态框
function closeTipModal() {
    var modal = $("#modal");

    modal.removeClass("show");
    modal.removeAttr("aria-modal");
    modal.removeAttr("role");
    modal.attr("aria-hidden", "true");
    modal.css("display", "none");
    $("#modal-bg").remove();
}

//查看更多
function showMore(commentID, startNum) {

    for (var i in items) {
        var item = items[i];
        if (item["commentID"] == commentID) {
            //移除原先的插入更多
            $("#moreContainer" + item["commentID"]).remove();
            //移除原先的我也说一句
            $("#floorContainer" + item["commentID"]).remove();
            //移除原先的回复框
            $("#floorFormContainer" + item["commentID"]).remove();

            for (var j = startNum; j < item["childComment"].length; j++) {
                var num_floor = item["childComment"][j];
                for (var k in items) {
                    if (items[k]["commentID"] == num_floor) {
                        //叶节点
                        var img = $('<img src="../images/img2.jpg" alt="userIcon" class="reply_userIcon img-thumbnail">');
                        var username = $('<span></span>');
                        username.text(items[k]["username"] + ": ");
                        var comment = $("<span></span>");
                        comment.text(items[k]["comment"]);
                        var comment_time = $('<span class="reply_time"></span>');
                        comment_time.text(items[k]["timestamp"]);
                        var reply = $('<span class="reply small" style="color: blue; cursor: pointer; margin-left: 10px;">回复</span>');
                        reply.attr("onclick", "showFloorReply(" + item["commentID"] + ", " + items[k]["username"] + ");");

                        //枝节点
                        var reply_tool = $('<div class="reply_tool small" style="color: #999; text-align: end;"></div>');
                        reply_tool.append(comment_time, reply);
                        var reply_comment = $('<div class="reply_comment" style="display: inline-block;"></div>');
                        reply_comment.append(comment);
                        var user_info = $('<div class="userInfo" style="display: inline-block;"></div>');
                        user_info.append(img, username);

                        //贴主可以删除
                        if (items[k]["username"] == getCookie("username")) {
                            var del_reply = $('<span class="small float-end" style="margin-left:10px; color: red; cursor: pointer; line-height: 20px;">删除</span>');
                            del_reply.attr("onclick", "askDel(" + items[k]["commentID"] + ", false);");
                            reply_tool.append(del_reply);
                        }

                        //根节点
                        var reply_item = $('<div class="list-item reply_item mx-auto"></div>').append(user_info, reply_comment, reply_tool);

                        //添加显示
                        $("#reply_ID" + items[k]["ownContent"]).append(reply_item);
                    }
                }

                //大于5条显示5条
                if (j == 4 + startNum && item["childComment"].length - startNum > 5) {
                    //插入查看更多
                    addShowMore(item["commentID"], startNum);
                    break;
                }

            }

            addFloorReply(item["commentID"]);
        }
    }
}

function hideReply(commentID) {
    var container = $("#reply_ID" + commentID);
    container.slideToggle("slow");
    var hide = $("#hide_ID" + commentID);
    hide.text() == "收起回复" ? hide.text("展开回复") : hide.text("收起回复");
}

function sendReply() {
    var formData = $("#form").serialize();

    $.ajax({
        url: "sendReply.php",
        type: "POST",
        data: formData,

        success: function (data, textStatus, jqXHR) {
            if (data.code == 200) {
                showTipModal("发表成功");
                setTimeout(() => {
                    window.location.href = "post.html?page=" + getQueryString("page") + "&postID=" + getQueryString("postID");
                }, 1000);
            } else {
                showTipModal(data.message);
            }
            $(".modal-close").click(function () {
                closeTipModal();
            })
        },
        error: function (jqXHR, textStatus, error) {
            showTipModal("发生未知错误，请联系网站管理员: " + error);
            $(".modal-close").click(function () {
                closeTipModal();
            })
        },

        dataType: "json"
    })

    return false;
}

//添加查看更多
function addShowMore(commentID, startNum) {
    var show_more_container = $('<div class="show_more mx-auto" style="background: #f7f7f7; width: 95%; padding: 0 0 10px 0;"></div>');
    show_more_container.attr("id", "moreContainer" + commentID);
    var show_more = $(' <span class="small" style="color: blue;cursor: pointer; margin-left: 20px;">查看更多</span>');
    show_more.attr("onclick", "showMore(" + commentID + "," + (startNum + 5) + ");");
    show_more.attr("id", "showMore" + commentID);
    show_more_container.append(show_more);
    $("#reply_ID" + commentID).append(show_more_container);
}

//添加楼中楼中回复楼层
function addFloorReply(commentID) {
    var floor_reply_container = $('<div class="floor_reply mx-auto" style="background: #f7f7f7; width: 95%; padding: 0 0 10px 0;"></div>');
    floor_reply_container.attr("id", "floorContainer" + commentID);
    var floor_reply = $('<span class="small float-end floor_reply_btn">我也说一句</span>');
    floor_reply.attr("onclick", "toggleFloorReply(" + commentID + ", null);");
    floor_reply.attr("id", "showFloorReply" + commentID);
    floor_reply_container.append(floor_reply);
    $("#reply_ID" + commentID).append(floor_reply_container);

    addFloorReplyForm(commentID);
}

function addFloorReplyForm(commentID) {
    //添加回复窗口
    var area = $('<textarea style="resize: none; width: 100%; height: 100%;" name="replyBody" required></textarea>');
    area.attr("id", "area" + commentID);
    var contentID = $('<input type="hidden" name="contentID">');
    contentID.attr("value", commentID);
    var replyID = $('<input type="hidden" name="replyName">');
    replyID.attr("id", "replyID" + commentID);
    var postID = $('<input type="hidden" name="postID">');
    postID.attr("value", getQueryString("postID"));

    var form_container = $('<div class="floor_reply_container mx-auto" style="background: #f7f7f7; width: 95%; display: none; padding: 5px 20px 10px 20px;"></div>');
    form_container.attr("id", "floorFormContainer" + commentID);

    var form = $('<form method="post"></form>');
    form.attr("onsubmit", "return sendReplyFloor(" + commentID + ");");
    form.attr("id", "floor_replyID" + commentID);
    form.append(area);
    form.append($('<input type="submit" name="submit" value="回复" class="small float-end" style="background: #5757ff; color: #FAFAFA; border-radius: 5px;">'));
    form.append(contentID, replyID, postID);
    form_container.append(form);
    $("#reply_ID" + commentID).append(form_container);
}

//显示回复窗口
function toggleFloorReply(commentID, user) {
    var container = $("#floorFormContainer" + commentID);
    container.slideToggle("slow");
    if (user != null) {
        $("#area" + commentID).attr("placeholder", "回复 " + user + ": ");
        $("#replyID" + commentID).attr("value", user);
    } else {
        $("#area" + commentID).attr("placeholder", "");
        $("#replyID" + commentID).attr("value", "");
    }
}

function showFloorReply(commentID, user) {
    var container = $("#floorFormContainer" + commentID);
    container.slideDown("slow");
    if (user != null) {
        $("#area" + commentID).attr("placeholder", "回复 " + user + ": ");
        $("#replyID" + commentID).attr("value", user);
    } else {
        $("#area" + commentID).attr("placeholder", "");
        $("#replyID" + commentID).attr("value", "");
    }
}


//回复楼中楼
function sendReplyFloor(commentID) {
    var formData = $("#floor_replyID" + commentID).serialize();
    $.ajax({
        url: "sendReply.php",
        type: "post",
        data: formData,
        dataType: "json",

        success: function (data, textStatus, jqXHR) {
            if (data.code == 200) {
                showTipModal("发表成功");
                setTimeout(() => {
                    window.location.href = "post.html?page=" + getQueryString("page") + "&postID=" + getQueryString("postID");
                }, 1000);
            } else if (data.code == 401) {
                showTipModal(data.message);
                setTimeout(() => {
                    window.location.href = "../login/login.html";
                }, 2000);
            } else {
                showTipModal(data.message);
            }
            $(".modal-close").click(function () {
                closeTipModal();
            })
        },
        error: function (jqXHR, textStatus, error) {
            showTipModal("发生未知错误，请联系网站管理员: " + error);
            $(".modal-close").click(function () {
                closeTipModal();
            })
        }
    })
    return false;
}

function askDel(ID, isDelPost) {
    showTipModal("是否确认删除");
    var confirm = $('<button type="button" class="btn btn-primary modal-confirm">确定</button>');
    $(".modal-footer").append(confirm);
    $(".modal-close").click(function () {
        closeTipModal();
        $(".modal-confirm").remove();
    })
    $(".modal-confirm").click(function () {
        closeTipModal();
        $(".modal-confirm").remove();
        if (isDelPost) {
            delPost(ID);
        } else {
            delReply(ID);
        }
    })
}

function delReply(commentID) {
    $.ajax({
        url: "delReply.php",
        type: "post",
        data: {
            "commentID": commentID
        },
        success: function (data, textStatus, jqXHR) {
            if (data.code = 200) {
                showTipModal("删除成功");
                setTimeout(() => {
                    window.location.href = "post.html?page=" + getQueryString("page") + "&postID=" + getQueryString("postID");
                }, 1000);
            } else {
                showTipModal("发生错误, code: " + data.code + ", message: " + data.message);
            }
            $(".modal-close").click(function () {
                closeTipModal();
            })
        },
        error: function (textStatus, jqXHR, error) {
            showTipModal("发生不可预计的错误, message: " + error);
            $(".modal-close").click(function () {
                closeTipModal();
            })
        }
    })
}

function delPost(postID) {
    $.ajax({
        url: "delPost.php",
        type: "post",
        data: {
            "postID": postID
        },
        success:function(data, textStatus, jqXHR){
            if (data.code = 200) {
                showTipModal("删除成功");
                setTimeout(() => {
                    window.location.href = "../home/home.html?page=1";
                }, 1000);
            } else {
                showTipModal("发生错误, code: " + data.code + ", message: " + data.message);
            }
            $(".modal-close").click(function () {
                closeTipModal();
            })
        },
        error: function (textStatus, jqXHR, error) {
            showTipModal("发生不可预计的错误, message: " + error);
            $(".modal-close").click(function () {
                closeTipModal();
            })
        },
        dataType: "json"
    })
}