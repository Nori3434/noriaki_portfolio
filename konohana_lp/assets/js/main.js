//フェイドインメニュー
$(function() {
  $("#Menu").on("click", function() {
		$(".gnav").fadeToggle(300);
		return false;
	});
});

//スクロールトップ
$(function() {
	$(".to-top").on("click", function() {
		$("html,body").animate({scrollTop: 0});
	});
});

//ギャラリー
$(function(){
  $(".small-img").click(function(){
    url = $(this).attr("src");
    $(".big-img").attr("src", url);    
  });
})