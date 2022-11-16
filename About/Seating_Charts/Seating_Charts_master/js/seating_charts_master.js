$(function() {

    $('.sub-tab-menu li').click(function(e) {
        e.preventDefault();
        let idx = $(this).index();          
        $('.sub-tab').removeClass('show');
        $('.sub-tab').eq(idx).addClass('show');

        $('.sub-tab li a').removeClass('sub-tab-clicked');
        $('.sub-tab li a').eq(idx).addClass('sub-tab-clicked');
    });
});