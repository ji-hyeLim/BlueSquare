// 이미지 넘기기
// var num = 1;
// function imgNext() {
//     num++;
//     if (num > 3) num = 1;
//     document.getElementById("photo").setAttribute("src","./img/shinhan/shinhan-hall" + num + ".png");
// }

// function imgPrev() {
//     num--;
//     if (num < 1) num = 3;
//     document.getElementById("photo").setAttribute("src","./img/shinhan/shinhan-hall" + num + ".png");
// }

// ======================== 제이쿼리 =========================== //
$(function () {

  // ========= 탭기능 ========= //
  $('.sub-tab li').click(function (e) {
    e.preventDefault();
    let idx = $(this).index();

    $('section > div').removeClass('active');
    $('section > div').eq(idx).addClass('active');

    $('.sub-tab li a').removeClass('sub-tab-clicked');
    $('.sub-tab li a').eq(idx).addClass('sub-tab-clicked');
  });


  // =================== 이미지 넘기기 신한카드홀 ===================

  // ===== 1번 ===== // 
  $('.slide-btn .next').click(function() {
    $('.slide-img').stop().animate({left : (-100) + "%" }, 500, function() {
        $('.slide-img').append($('.slide-img img:first-child')).css({ left : 0});
    });
  });

  $('.prev').click(function() {
      $('.slide-img').prepend($('.slide-img img:last-child')).css({left : (-100) + "%"}).stop().animate({left : 0}, 500);
  }); 
  // ===== 1번 끝  ===== // 






  // ===== 2번 ===== // 
  // var slideW = cnt = setId = 0;
  // resizeFn();

  // function resizeFn() {
  //   slideW = $('.slide-wrap').width();
  //   console.log(slideW);
  //   $(".slide-wrap").css({
  //     width: slideW
  //   });
  // };

  // $(window).resize(function() {
  //   resizeFn();
  // });

  // var cnt = $('.slide-img img').index();
  // var imgLength = $(".slide-img img").length;
  // console.log(imgLength);

  // $('.next').click(function() {
  //   cnt++;
  //   console.log(cnt);

  //   $(".slide-img").stop().animate({ left : (-100 * cnt) + "%"}, 600, 
  //   function() {
  //     if (cnt > 2) {
  //       cnt = 0;
  //       $(".slide-img").animate({
  //         left: (-100 * cnt) + "%"
  //       }, 0)
  //     }
  //   })
  // });

  // function nextCountFn() {
  //   cnt++;
  // };

  // function prevCountFn() {
  //   cnt--;
  //   mainslideFn();
  // };

  // function mainslideFn() {
  //   $(".slide-wrap").stop().animate({
  //     left: (-100 * cnt) + "%"
  //   }, 600, function() {
  //     if (cnt > 3) {
  //       cnt = 0;
  //     }
  //     if (cnt < 0) {
  //       cnt = 3
  //     }
  //     $(".slide-wrap").stop().animate({
  //       left: (-100 * cnt) + "%"
  //     }, 0)
  //   });
    // $(".pageBt").removeClass("addPageBt");
    // $(".pageBt").eq(cnt > 3 ? cnt = 0 : cnt).addClass("addPageBt");  
  // }
    // ===== 2번 끝 ===== // 


});