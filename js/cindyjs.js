

$(function () {
    $('.gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');  
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.gotop').fadeIn(300);
        } else {
            $('.gotop').fadeOut(300);
        }
    });

});



