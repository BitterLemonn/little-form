// JavaScript Document
function confirm() {
	var form_data = $('#form').serialize();
	$.ajax({
		url: 'confirm.php',
		type: 'post',
		data: form_data,
		success: function (data, textStatus, jqXHR) {
			if (data.code == 200) {
				$('#step1').css('color', '#AAAAAA');
				$('#step2').css('color', '#0D6EFD');
				$('#input1').attr('placeholder', '密码');
				$('#input2').attr('placeholder', '新密码');
				$('#input1').attr('name', 'password');
				$('#input2').attr('name', 'confirm');
				$('#form').attr('onsubmit', 'return resetpwd("'+ data.data[0].username +'");');
				$('#input1').attr('value', '');
				$('#input2').attr('value', '');
				$('.err_hint').text("");
			} else {
				$('.err_hint').text(data.message);
				$('.input').click(function () {
					$('.err_hint').text("");
				});
			}
		},
		error: function (textStatus, jqXHR, error) {
			$('.err_hint').text(error);
			$('.input').click(function () {
				$('.err_hint').text("");
			});
		},
		dataType: 'json'
	});

	return false;
}

function resetpwd(username) {
	$.ajax({
		url: 'reset.php',
		type: 'post',
		data: {
			'password': $('#input1').val(),
			'confirm': $('#input2').val(),
			'username': username
		},
		success: function (data, textStatus, jqXHR) {
			if (data.code == 200) {
				$('#step2').css('color', '#AAAAAA');
				$('#step3').css('color', '#0D6EFD');
				$('#input1').remove();
				$('#input2').remove();
				$('.submit').attr('value','返回');
				$('.success').attr('src','../images/success.png');
				$('#form').attr('onsubmit', 'return false;');
				$('#form').attr('onclick', 'window.location.href="../login/login.html"');
			} else {
				$('.err_hint').text(data.message);
				$('.input').click(function () {
					$('.err_hint').text("");
				});
			}
		},
		error: function (textStatus, jqXHR, error) {
			$('.err_hint').text(error);
			$('.input').click(function () {
				$('.err_hint').text("");
			});
		},
		dataType: 'json'
	});

	return false;
}
