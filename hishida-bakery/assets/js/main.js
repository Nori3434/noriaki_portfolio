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
    carousel();
  });


  /*/=========================/*/
  //smooth scroll
  /*/=========================/*/
  function smoothScroll(){
    $('a[href^="#"]').click(function() {
      var offset = $header.innerHeight();
      var speed = 500;//スクロール時間[ms]
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
  
  /*/=========================/*/
  //bxslider 
  /*/=========================/*/
  function carousel(){
    var windowWidth = $win.width();
    var width = windowWidth;
    $('.carousel').bxSlider({
      startSlide:1,
      speed: 500,
      pause: 3000,
      pager: false,
      slideWidth: width,
      prevText: "",
      nextText: "",
      auto: true
    });
  }
	
  $( '.drawer' ).drawer();
  
  // メニュークリックでメニュー閉じる
  $('.drawer-nav li a').on('click', function() {
      $('.drawer').drawer('close');
  });
  
});