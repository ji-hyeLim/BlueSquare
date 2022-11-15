$(function () {
  $('.sub-tab li').click(function(e) {
    e.preventDefault();
    let idx = $(this).index();

    $('section > div').removeClass('active');
    $('section > div').eq(idx).addClass('active');

    $('.sub-tab li a').removeClass('sub-tab-clicked');
    $('.sub-tab li a').eq(idx).addClass('sub-tab-clicked');
  })

  // ======================== 이미지 넘기기 연습실 ========================
  $('.prev').click(function (e) {
    e.preventDefault();
    let imgOn = $('#practice .slide-img').find('.on').index(); // 현재 이미지 위치
    let imgLen = $('#practice .slide-img .item').length;
    // console.log('이미지 위치:', imgOn);
    // console.log('이미지 개수:', imgLen);

    $("#practice .slide-img .item").eq(imgOn).removeClass("on");
    $("#practice .slide-img .item").eq(imgOn).css("opacity", 0);

    imgOn = imgOn - 1;

    if (imgOn < 0) {
      $("#practice .slide-img .item").eq(imgLen - 1).css("opacity", 1);
      $("#practice .slide-img .item").eq(imgLen - 1).addClass("on");
    } else {
      $("#practice .slide-img .item").eq(imgOn).css("opacity", 1);
      $("#practice .slide-img .item").eq(imgOn).addClass("on");
    }
  });

  $('.next').click(function (e) {
    e.preventDefault();
    let imgOn = $('#practice .slide-img').find('.on').index(); // 현재 이미지 위치
    let imgLen = $('#practice .slide-img .item').length; // 4

    $("#practice .slide-img .item").eq(imgOn).removeClass("on");
    $("#practice .slide-img .item").eq(imgOn).css("opacity", 0);

    imgOn = imgOn + 1;

    if (imgOn === imgLen) {
      $("#practice .slide-img .item").eq(0).css("opacity", 1);
      $("#practice .slide-img .item").eq(0).addClass("on");
    } else {
      $("#practice .slide-img .item").eq(imgOn).css("opacity", 1);
      $("#practice .slide-img .item").eq(imgOn).addClass("on");
    }
  });
});
