<!DOCTYPE html>
<?php 
	require_once("../utils/conn.php");
	if(!isset($_COOKIE['username'])){
		echo("<script type='text/javascript'>");
		echo("alert('请先登录');");
		echo("</script>");
	}else{
?>
<html>
<head>
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta charset="utf-8">
<title>修改个人信息</title>
<link href="css/style.css" rel="stylesheet" />
</head>
<body>
<script type="text/javascript">
	
	function modify_username(){
		var elem = document.getElementById("userName");
		elem.removeAttribute("readOnly");
		var modi = document.getElementById("modi_userName");
		modi.style.visibility = "hidden";
	}
	function modify_email(){
		var elem = document.getElementById("email");
		elem.removeAttribute("readOnly");
		var modi = document.getElementById("modi_email");
		modi.style.visibility = "hidden";
	}
	
</script>
<div id="wrap">
	<div id="left">
		<div id="photo" class="img"> <a href="index.html"><img src="images/me.jpg" alt="image" /></a> </div>
		<div id="blogtitle">
			<h1><a href="my_post.html">Hi</a></h1>
		</div>
		<div class="clear"></div>
		<div id="nav">
			<li><a href="home.php">返回首页</a></li>
			<li><a href="my_post.html">我的帖子</a></li>
			<li><a href="about.php">修改信息</a></li>
		</div>
	</div>
	<?php 
		$sql = "SELECT * FROM user WHERE username='{$_COOKIE['username']}'";
		$result = mysqli_fetch_array(mysqli_query($conn, $sql));
		$id = $result['userID'];
		$email = $result['email'];
	?>
	<div id="right">
		<div class="post"> <span class="time">修改个人信息</span>
			<p class="img"><img src="images/tuc.jpg" width="100%"/></p>
			<form method="post" action="">
				<table id="centerTable" border="0"  cellspacing="15" >
					<tr style='display: none'>
						<td><input type='text' value='<?php echo($id); ?>' name='id'></td>
					</tr>
					<tr align="center">
						<td>用户名</td>
						<td><input name="userName" id='userName' type="text" readOnly value="<?php echo($_COOKIE['username']) ?>"></td>
						<td><a onclick='modify_username();' style="cursor: pointer; color: #B4B4B4;" id="modi_userName">修改</a></td>
					</tr>
					<tr align="center">
						<td>密码</td>
						<td><input name="password1" type="password"  ></td>
					</tr>
					<tr align="center">
						<td>重复密码</td>
						<td><input name="password" type="password"   ></td>
					</tr>
					<tr align="center">
						<td>邮箱</td>
						<td><input name="email" type="text" id="email" value='<?php echo($email); ?>' readOnly></td>
						<td><a onclick='modify_email();' id="modi_email" style="cursor: pointer; color: #B4B4B4">修改</a></td>
					</tr>
				</table>
				<div align="center" id="comment" style="padding-top:15px">
					<input type="submit" name="submit" id="submit" value="确认更改" style="cursor: pointer;"/>
				</div>
			</form>
		</div>
	</div>
</div>
</body>
</html>
<?php 
	if(isset($_POST['submit'])){
		if($_POST['password1'] == null || $_POST['userName'] == null || $_POST['email'] == null){
			echo("<script type='text/javascript'>");
			echo("alert('用户名、密码和邮箱不能为空');");
			echo("</script>");
		}else{
			if($_POST['password1'] != $_POST['password']){
				echo("<script type='text/javascript'>");
				echo("alert('两次输入的密码不一致');");
				echo("</script>");
			}else{
				$username = $_COOKIE['username'];
				//判断是否重名
				$sql = "SELECT * FROM user WHERE username='{$_POST['userName']}'";
				$num = mysqli_num_rows(mysqli_query($conn, $sql));
				if($num != 0){
					echo("<script type='text/javascript'>");
					echo("alert('用户名已存在');");
					echo("</script>");
				}else{
					//更新user表
					$sql = "UPDATE user SET userName='{$_POST['userName']}', password='{$_POST['password']}', email='{$_POST['email']}' WHERE userID='{$id}'";

					mysqli_query($conn, $sql);

					//更新form表
					$sql = "UPDATE form SET userName='{$_POST['userName']}' WHERE userName='{$username}'";

					mysqli_query($conn, $sql);

					//更新post表
					$sql = "UPDATE post SET ownUser='{$_POST['userName']}' WHERE ownUser='$username'";
					mysqli_query($conn, $sql);
					$sql = "UPDATE post SET recentUser='{$_POST['userName']}' WHERE recentUser='{$_COOKIE['username']}'";
					mysqli_query($conn, $sql);

					setcookie("username", $_POST['userName']);

					//刷新页面
					echo("<script type='text/javascript'>");
					echo("alert('修改成功');");
					echo("window.location.href='pagea.html';");
					echo("</script>");
				}
			}
		}
	}
}
?>