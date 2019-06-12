$('.single-item').slick({
    draggable: true,
    autoplay: true, /* this is the new line */
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 1000,
});

// $(document).ready(function(){
//     $("#sticker").sticky({topSpacing:0});
// });

// sticky header and main content start
$(window).scroll(function(){
    var sticky = $('.header-menu-bar');
    var section_main = $('.section-main');
    scroll = $(window).scrollTop();
    if (scroll >= 40) {
        sticky.addClass('fixed');
        section_main.addClass('custom_margin_top');
    }
    else {
        sticky.removeClass('fixed');
        section_main.removeClass('custom_margin_top');
    }
});

// sticky header and mein content end