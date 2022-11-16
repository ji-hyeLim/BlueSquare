$(function () {
    $('.prev').click(function() {
        // $('.slide-img-shin img').stop(true,true).fadeIn(1000);
    });

    $('.next').click(function() {
        // $('.slide-img-shin img').stop(true,true).fadeIn(1000);  
    });

    $('.prev2').click(function() {
        // $('.slide-img-mas img').stop(true,true).hide().fadeIn(1000);
    });

    $('.next2').click(function() {
        // $('.slide-img-mas img').stop(true,true).hide().fadeIn(1000);
    });
});

var num = 1;
function imgNextS() {
    num++;
    if (num > 3) num = 1;
    document.getElementById("photo_s").setAttribute("src","./img/shinhan/shinhan-hall" + num + ".png");
}

function imgPrevS() {
    num--;
    if (num < 1) num = 3;
    document.getElementById("photo_s").setAttribute("src","./img/shinhan/shinhan-hall" + num + ".png");
}

function imgNextM() {
    num++;
    if (num > 4) num = 1;
    document.getElementById("photo_m").setAttribute("src","./img/master/master-hall" + num + ".png");
}

function imgPrevM() {
    num--;
    if (num < 1) num = 4;
    document.getElementById("photo_m").setAttribute("src","./img/master/master-hall" + num + ".png");
}