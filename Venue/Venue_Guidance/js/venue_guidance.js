$(function () {

  $('.tab li').click(function (e) {
    e.preventDefault();
    let idx = $(this).index();
    $('section').removeClass('show');
    $('section').eq(idx).addClass('show');
  });

  $('.sub-tab li').click(function (e) {
    e.preventDefault();
    let idx = $(this).index();
    console.log(idx);
    $('section div').removeClass('active');
    $('section div').eq(idx).addClass('active');
  });

  // ======================== 이미지 넘기기 신한카드홀 ========================
  $('.prev').click(function (e) {
    e.preventDefault();
    let imgOn = $('#shinhan .slide-img').find('.on').index(); // 현재 이미지 위치
    let imgLen = $('#shinhan .slide-img .item').length;
    // console.log('이미지 위치:', imgOn);
    // console.log('이미지 개수:', imgLen);

    $("#shinhan .slide-img .item").eq(imgOn).removeClass("on");
    $("#shinhan .slide-img .item").eq(imgOn).css("opacity", 0);

    imgOn = imgOn - 1;

    if (imgOn < 0) {
      $("#shinhan .slide-img .item").eq(imgLen - 1).css("opacity", 1);
      $("#shinhan .slide-img .item").eq(imgLen - 1).addClass("on");
    } else {
      $("#shinhan .slide-img .item").eq(imgOn).css("opacity", 1);
      $("#shinhan .slide-img .item").eq(imgOn).addClass("on");
    }
  });

  $('.next').click(function (e) {
    e.preventDefault();
    let imgOn = $('#shinhan .slide-img').find('.on').index(); // 현재 이미지 위치
    let imgLen = $('#shinhan .slide-img .item').length; // 4

    $("#shinhan .slide-img .item").eq(imgOn).removeClass("on");
    $("#shinhan .slide-img .item").eq(imgOn).css("opacity", 0);

    imgOn = imgOn + 1;

    if (imgOn === imgLen) {
      $("#shinhan .slide-img .item").eq(0).css("opacity", 1);
      $("#shinhan .slide-img .item").eq(0).addClass("on");
    } else {
      $("#shinhan .slide-img .item").eq(imgOn).css("opacity", 1);
      $("#shinhan .slide-img .item").eq(imgOn).addClass("on");
    }
  });

  // ======================== 이미지 넘기기 마스터카드홀 ========================
  $('.prev').click(function (e) {
    e.preventDefault();
    let imgOn = $('#master .slide-img').find('.on').index(); // 현재 이미지 위치
    let imgLen = $('#master .slide-img .item').length;
    // console.log('이미지 위치:', imgOn);
    // console.log('이미지 개수:', imgLen);

    $("#master .slide-img .item").eq(imgOn).removeClass("on");
    $("#master .slide-img .item").eq(imgOn).css("opacity", 0);

    imgOn = imgOn - 1;

    if (imgOn < 0) {
      $("#master .slide-img .item").eq(imgLen - 1).css("opacity", 1);
      $("#master .slide-img .item").eq(imgLen - 1).addClass("on");
    } else {
      $("#master .slide-img .item").eq(imgOn).css("opacity", 1);
      $("#master .slide-img .item").eq(imgOn).addClass("on");
    }
  });

  $('.next').click(function (e) {
    e.preventDefault();
    let imgOn = $('#master .slide-img').find('.on').index(); // 현재 이미지 위치
    let imgLen = $('#master .slide-img .item').length; // 4

    $("#master .slide-img .item").eq(imgOn).removeClass("on");
    $("#master .slide-img .item").eq(imgOn).css("opacity", 0);

    imgOn = imgOn + 1;

    if (imgOn === imgLen) {
      $("#master .slide-img .item").eq(0).css("opacity", 1);
      $("#master .slide-img .item").eq(0).addClass("on");
    } else {
      $("#master .slide-img .item").eq(imgOn).css("opacity", 1);
      $("#master .slide-img .item").eq(imgOn).addClass("on");
    }
  });
});
