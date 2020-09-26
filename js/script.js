$(function() {
  'use strict';
  // 關閉左選單
  $(document).on('click', '.close-panel', function() {
    $.closePanel();
  });
  // 首頁輪播
  $(document).ready(function() {
    var swiperHome = new Swiper('.swiper-home', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination'
      }
    });
  });
  // 產品輪播
  $(document).ready(function() {
    var swiperBanner = new Swiper('.swiper-banner', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination'
      }
    });
    var swiperDetail = new Swiper('.swiper-detail', {
      loop: true,
      pagination: {
        el: '.pag_detail'
      }
    });
  });
  $('.countNum').click(function(e) {
    e.preventDefault();
    if (e.target.id == 'numPlus') {
      let num = parseInt($('#totalNum')[0].value);
      num += 1;
      $('#totalNum')[0].value = num;
    } else if ((e.target.id == 'numMinus') & ($('#totalNum')[0].value > 0)) {
      let num = parseInt($('#totalNum')[0].value);
      num -= 1;
      $('#totalNum')[0].value = num;
    }
  });
  $('.add_count a').click(function(e) {
    e.preventDefault();
    let act = $(this).attr('class');
    if (act == 'add') {
      let num =
        parseInt(
          $(this)
            .siblings('span')
            .text()
        ) + 1;
      $(this)
        .siblings('span')
        .text(num);
    } else if (
      act == 'less' &&
      $(this)
        .siblings('span')
        .text() != 0
    ) {
      let num =
        parseInt(
          $(this)
            .siblings('span')
            .text()
        ) - 1;
      $(this)
        .siblings('span')
        .text(num);
    }
  });
});
