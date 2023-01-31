//フェイドインメニュー
$(function () {
	$("#Menu").on("click", function () {
		$(".gnav").fadeToggle(300);
		return false;
	});
});

//スクロールトップ
$(function () {
	$(".to-top").on("click", function () {
		$("html,body").animate({ scrollTop: 0 });
	});
});
