jQuery(function($){


  /*/=========================/*/
  //変数定義
  /*/=========================/*/
  
  /*global window */
  /*global jQuery */
  
  var
    $win = $(window),
    $header = $('header');

  /*/=========================/*/
  //関数呼び出し
  /*/=========================/*/
  smoothScroll();

  /*/=========================/*/
  //イベント
  /*/=========================/*/
  $win.on('scroll', function(){
  });
  $win.on('load', function(){
    faqToggle();
    carousel();
  });


  /*/=========================/*/
  //smooth scroll
  /*/=========================/*/
  function smoothScroll(){
    $('a[href^="#"]').click(function() {
      var offset = $header.innerHeight();
      var speed = 1200;//スクロール時間[ms]
      var href= $(this).attr("href");
      var target = $(href === "#" || href === "" ? 'html' : href);
      var position;
      if(target.offset().top > 100 && window.innerWidth <= 756){
        position = target.offset().top - 0;
      }else{
        position = target.offset().top - 0;
      }
      $('body,html').stop().animate({scrollTop:position}, speed, "swing");
      return false;
    });
  }
  
  $( '.drawer' ).drawer();
  
  // メニュークリックでメニュー閉じる
  $('.drawer-nav li a').on('click', function() {
      $('.drawer').drawer('close');
  });

  function faqToggle(){
    $('.section .qa .q').click(function(){
      $(this).next('.a').slideToggle();
      $(this).toggleClass("open");
      $('.section .qa .q').not($(this)).next('.a').slideUp();
      $('.section .qa .q').not($(this)).removeClass("open");
      $('.section .qa .q.stay').not($(this)).toggleClass("open");
    });
  }
  
//  function carousel(){
//    var windowWidth = $win.width();
//    var width = windowWidth * 1.072;
//    $('.carousel').bxSlider({
//      startSlide:4,
//      speed: 1000,
//      pause: 5000,
//      controls: false,
//      slideWidth: width,
//      auto: true
//    });
//  }
	
//	$(window).on('scroll', function() {
//		if ($(window).scrollTop() > 717) {
//			$('.totop').fadeIn(400);
//		} else {
//			$('.totop').fadeOut(400);
//		}
//	});
//	
$(document).ready(function() {
	$('.bxslider').bxSlider({
			auto: true,
			speed: 1000,
			pause: 5000,
			mode: 'fade',
			nextSelector: false
	});
});
});



$(document).ready(function () {
    $('.totop').hide();　//ボタンを非表示にする
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 716) { //ページの上から100pxスクロールした時
            $('.totop').fadeIn(400); //ボタンがフェードインする
        } else {
            $('.totop').fadeOut(400);　//ボタンがフェードアウトする
        }
        scrollHeight = $(document).height(); //ドキュメントの高さ 
        scrollPosition = $(window).height() + $(window).scrollTop(); //現在地 
        footHeight = $('footer').innerHeight(); //止めたい位置の高さ(今回はfooter)
        if (scrollHeight - scrollPosition <= footHeight) { //ドキュメントの高さと現在地の差がfooterの高さ以下の時
            $('.totop').css({
                "position": "absolute", //pisitionをabsoluteに変更
								"bottom": "2.5%",
            });
        } else { //それ以外の場合は
            $('.totop').css({
                "position": "fixed", //固定表示
								"bottom": "2.5%",
            });
        }
    });
});

