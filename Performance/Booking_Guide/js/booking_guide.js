$(document).ready(function () {
    AOS.init ({
        duration : 700,
        easing : 'linear',
        once: true
    });

    var hdtxtWrap = $('.hdtxt-wrap');
    setTimeout(function() {
        hdtxtWrap.removeClass('content-hidden');
    }, 5000);
});