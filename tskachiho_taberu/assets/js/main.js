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
  
  function carousel(){
    var windowWidth = $win.width();
    var width = windowWidth * 1.072;
    $('.carousel').bxSlider({
      startSlide:4,
      speed: 500,
      pause: 5000,
      controls: false,
      slideWidth: width,
      auto: true
    });
  }
});

