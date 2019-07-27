$(document).ready(function () {

    $('.header-right-enter').click(function(e){
        e.preventDefault();
        $(this).parent().find('.login').addClass('active')
    });

    $('.player-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    if($(window).width() < 1024) {
        $('.main-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }


    var dataSrc, textInfo;

    function changeVideo() {
        dataSrc = $('.player-slider').find('.slick-current.slick-center').data("src");
        textInfo = $('.player-slider').find('.slick-current.slick-center').find('.player-slider-name').text();
        $('.player-video-name').text(textInfo);
        $('.player-video-frame iframe').attr("src", dataSrc);
    }
    changeVideo();

    $('.player-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        changeVideo();
    });

    $('.header-right-btn').click(function(){
       $(this).toggleClass('active');
       $('.header-nav').toggleClass('active');
       $('.header').toggleClass('dark');
    });

    $('.header-nav-more').click(function(){
       $(this).parent().find('.header-sublist').slideToggle();
       $(this).parent().siblings().find('.header-sublist').slideUp();
    });

});
$(document).mouseup(function (e) {
    var container = $(".header-right-enter, .login");
    if (container.has(e.target).length === 0){
        $('.login').removeClass('active');
    }
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }
});