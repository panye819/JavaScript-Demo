document.onclick = function () {
	window.opener.document.write('子窗口让我输出一行字！');
}