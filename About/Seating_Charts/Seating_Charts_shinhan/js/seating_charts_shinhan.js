$(function() {
    $(".seat-img-tab ul > li").click(function(e) {
        let idx = $(this).index();
        console.log(idx);

        $(".F_wrap > div").removeClass('img_tab_on');
        $(".F_wrap > div").eq(idx).addClass('img_tab_on');

        $(".seat-img-tab ul > li > img").removeClass('color');
        $(".seat-img-tab ul > li > img").eq(idx).addClass('color');

        $(".seat-img-tab ul > li").removeClass('black_txt');
        $(".seat-img-tab ul > li").eq(idx).addClass('black_txt');
    });

});