//jQuery(function($){
//
//
//  /*/=========================/*/
//  //変数定義
//  /*/=========================/*/
//  
//  /*global window */
//  /*global jQuery */
//  
//  var
//    $win = $(window),
//    $header = $('header');
//
//  /*/=========================/*/
//  //関数呼び出し
//  /*/=========================/*/
//  smoothScroll();
//
//  /*/=========================/*/
//  //イベント
//  /*/=========================/*/
//  $win.on('scroll', function(){
//  });
//  $win.on('load', function(){
//    faqToggle();
//    carousel();
//  });
//
//
//  /*/=========================/*/
//  //smooth scroll
//  /*/=========================/*/
//  function smoothScroll(){
//    $('a[href^="#"]').click(function() {
//      var offset = $header.innerHeight();
//      var speed = 500;//スクロール時間[ms]
//      var href= $(this).attr("href");
//      var target = $(href === "#" || href === "" ? 'html' : href);
//      var position;
//      if(target.offset().top > 100 && window.innerWidth <= 756){
//        position = target.offset().top - 0;
//      }else{
//        position = target.offset().top - 0;
//      }
//      $('body,html').stop().animate({scrollTop:position}, speed, "swing");
//      return false;
//    });
//  }
//  
//  $( '.drawer' ).drawer();
//  
//  // メニュークリックでメニュー閉じる
//  $('.drawer-nav li a').on('click', function() {
//      $('.drawer').drawer('close');
//  });
//
//  function faqToggle(){
//    $('.section .qa .q').click(function(){
//      $(this).next('.a').slideToggle();
//      $(this).toggleClass("open");
//      $('.section .qa .q').not($(this)).next('.a').slideUp();
//      $('.section .qa .q').not($(this)).removeClass("open");
//      $('.section .qa .q.stay').not($(this)).toggleClass("open");
//    });
//  }
//  
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
//	
//	$(window).on('scroll', function() {
//		if ($(window).scrollTop() > 717) {
//			$('.totop').fadeIn(400);
//		} else {
//			$('.totop').fadeOut(400);
//		}
//	});
//	
//
//	
//$(document).ready(function() {
//	$('.bxslider').bxSlider({
//			startSlide: 1,
//			speed: 1000,
//			pause: 5000,
//			auto: true
//	});
//});
//});

//メニュー開閉とボタンの変形
var btn = document.querySelector('.btn-menu');
var nav = document.querySelector('nav');

btn.addEventListener('click', () => {
	btn.classList.toggle('active')
	nav.classList.toggle('open-menu')
});



//メニューボタンの固定
$(function(){
  var scrollStart = $('.hd-bar').offset().top;
  var distance = 0;
 
  $(document).scroll(function(){
    distance = $(this).scrollTop();
		
    if (scrollStart <= distance) { 
      $('.btn-menu').addClass('fixed'); 
    } else if (scrollStart >= distance) { 
      $('.btn-menu').removeClass('fixed'); 
    }
	});
});

//サブページロゴの固定
$(function(){
  var scrollStart = $('#Sb-logo').offset().top;
  var distance = 0;
 
  $(document).scroll(function(){
    distance = $(this).scrollTop();
		
    if (scrollStart <= distance) { 
      $('.sb-logo').addClass('logo-fixed'); 
    } else if (scrollStart >= distance) { 
      $('.sb-logo').removeClass('logo-fixed'); 
    }
	});
});


//スムーススクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
       let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 0;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }

