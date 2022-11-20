// 이미지 넘기기
var num = 1;

function imgNext() {
    num++;
    if (num > 3) num = 1;
    document.getElementById("photo").setAttribute("src","./img/nemo/nemo" + num + ".png");
}

function imgPrev() {
    num--;
    if (num < 1) num = 3;
    document.getElementById("photo").setAttribute("src","./img/nemo/nemo" + num + ".png");
}

// ======================== 이미지 넘기기 마스터카드홀 ========================
$(function () {
  $('.sub-tab li').click(function(e) {
    e.preventDefault();
    let idx = $(this).index();

    $('section > div').removeClass('active');
    $('section > div').eq(idx).addClass('active');

    $('.sub-tab li a').removeClass('sub-tab-clicked');
    $('.sub-tab li a').eq(idx).addClass('sub-tab-clicked');
  })


});
