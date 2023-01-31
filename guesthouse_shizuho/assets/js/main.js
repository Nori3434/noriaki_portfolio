
var btn = document.querySelector('.btn-menu');
var nav = document.querySelector('nav');

btn.addEventListener('click', () => {
  btn.classList.toggle('active')
  nav.classList.toggle('open-menu')
});

//メニューボタンの固定
$(function () {
  var scrollStart = $('.hd-bar').offset().top;
  var distance = 0;

  $(document).scroll(function () {
    distance = $(this).scrollTop();

    if (scrollStart <= distance) {
      $('.btn-menu').addClass('fixed');
    } else if (scrollStart >= distance) {
      $('.btn-menu').removeClass('fixed');
    }
  });
});

//サブページロゴの固定
$(function () {
  var scrollStart = $('#Sb-logo').offset().top;
  var distance = 0;

  $(document).scroll(function () {
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
for (let i = 0; i < smoothScrollTrigger.length; i++) {
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
