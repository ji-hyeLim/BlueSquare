$(function() {
    $('.tab-menu li').click(function(e) {
        e.preventDefault();
        let idx = $(this).index();          
        $('section').removeClass('show');
        $('section').eq(idx).addClass('show');
    });

    $('.sub-tab-menu li').click(function(e) {
        e.preventDefault();
        let idx = $(this).index();          
        $('.sub-tab').removeClass('show');
        $('.sub-tab').eq(idx).addClass('show');
    });
});