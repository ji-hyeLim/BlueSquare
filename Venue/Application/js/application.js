$(function() {

    let swiper = new Swiper('.swiper', {
        slidesPerView: spaceNumber(),
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
        
    });
    
    function spaceNumber() {
        let space = 0;
        
        let windowWidth = $(window).width();

        if(windowWidth >= 600 && windowWidth < 1024) {
            space = 3;
        } else if(windowWidth >= 1024 && windowWidth < 1400) {
            space = 4;
        } else if(windowWidth >= 1400) {
            space = 5;
        } else if(windowWidth < 600) {
            space = 2;
        }
        return space;
    }
})

