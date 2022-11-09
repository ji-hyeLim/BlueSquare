$(function() {
    $('.overlay .close-btn').hide();

    $('.right-menu ul .right').click(function() {
        $('.overlay').animate({'width': '100%'}, 300);
        $('.overlay .close-btn').show();

    })

    $('.overlay .close-btn').click(function() {
        $('.overlay').animate({'width': 0}, 300);
        $(this).hide();
    })
    
    
})