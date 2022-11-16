$(document).ready(function () {
    AOS.init ({
        duration : 1000,
        easing : 'linear',
        once: true
    });

    var hdtxtWrap = $('.hdtxt-wrap');
    setTimeout(function() {
        hdtxtWrap.removeClass('content-hidden');
    }, 3000);
});