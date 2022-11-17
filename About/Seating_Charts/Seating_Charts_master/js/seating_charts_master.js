$(function() {

    $('.sub-tab-menu ul > li').click(function(e) {
        e.preventDefault();
        let idx = $(this).index();
        console.log(idx);     

        // 스탠딩, 그라운드 on, off
        $('.master-hall > div').removeClass('show');
        $('.master-hall > div').eq(idx).addClass('show');

        // 서브탭 메뉴 현재 클릭된 메뉴
        $('.sub-tab-menu li a').removeClass('sub-tab-clicked');
        $('.sub-tab-menu li a').eq(idx).addClass('sub-tab-clicked');
    });

    // 마스터 스탠딩 층 별 on, off
    $(".seat-img-tab ul > li").click(function(e) {
        let idx1 = $(this).index();

        $(".F_wrap > div").removeClass('img_tab_on');
        $(".F_wrap > div").eq(idx1).addClass('img_tab_on');
    });

    // 마스터 그라운드 층 별 on, off
    $(".seat-img-tab ul > li").click(function(e) {
        let idx1 = $(this).index();

        $(".F_wrap2 > div").removeClass('img_tab_on2');
        $(".F_wrap2 > div").eq(idx1).addClass('img_tab_on2');
    });
});