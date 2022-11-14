$(function() {
    AOS.init ({
        duration : 1000,
        easing : 'linear',
        // once : 'false',
    });

    $(window).on('scroll',function() {
        var sc_top = $(this).scrollTop();
        console.log(sc_top);

        if($(this).scrollTop() > 1000) {
            $('.fix-box').addClass('on');
        } else {
            $('.fix-box').removeClass('on');
        }

        if ($(this).scrollTop() > 840) {
            $('.fixed-box').removeClass('on');
        } else {
            $('.fixed-box').addClass('on');
        }
    });

    $('.fnb-menu li').click(function (e) {
        e.preventDefault();
        let idx = $(this).index();

        $('.fnb-menu li a').removeClass('line');
        $('.fnb-menu li a').eq(idx).addClass('line');

    });
});