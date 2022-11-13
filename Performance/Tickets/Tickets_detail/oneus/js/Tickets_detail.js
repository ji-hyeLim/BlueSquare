// scroll
$(function() {
    var isVisible = false;
    var con = [".casting", ".notice", ".booking", ".seat", ".ticket", ".hall"];
    

    $(window).on('scroll',function() {
        $.each(con, function(i,o) {
            if (checkVisible($(`${con[i]} h3`))&&!isVisible) {
                $(`${con[i]}`).css("animation" , "fadeInTop 1s");
            }
        });

        
    });

    function checkVisible( elm, eval ) {
        eval = eval || "object visible";
        var viewportHeight = $(window).height(),
            scrolltop = $(window).scrollTop(),
            y = $(elm).offset().top,
            elementHeight = $(elm).height();   
        
        if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        if (eval == "above") return ((y < (viewportHeight + scrolltop)));
    }

});


