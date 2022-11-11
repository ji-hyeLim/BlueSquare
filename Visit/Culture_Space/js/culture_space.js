$(function() {
    $('.tab li').click(function (e) {
        e.preventDefault();
        let idx = $(this).index();

        $('.space-header').removeClass('show');
        $('.space-header').eq(idx).addClass('show');

        $('section').removeClass('show');
        $('section').eq(idx).addClass('show');
    });



    // var scroll_top;
    // // 인트로 타이틀 위치 조정
    // function checkIntroTitle() {
    //     if($('.sodam-intro').outerHeight() < window.innerHeight) {
    //         $('.sodam-intro').addClass('fixed');
    //     } else {
    //         $('.sodam-intro').removeClass('fixed');
    //     }
    // }

    $(window).on("scroll", function() {
        
        var h = $(window).scrollTop();
        console.log(h);

        if(h >= 1100) {
            $('.sodam-intro').addClass('fixed');

        } else {
            $('.sodam-intro').removeClass('fixed');

        }

    });

});