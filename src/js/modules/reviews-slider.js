import Swiper from 'swiper/bundle';

if (document.querySelector('.reviews__slider')) {
    var newsSlider = new Swiper('.reviews__slider .swiper-container', {
        speed: 400,
        spaceBetween: 25,
        autoHeight: true,
        loop: true,
        slidesPerView: 1,

        breakpoints: {
            320: {
                pagination: {
                    el: '.reviews__slider .slider-nav__bullets',
                    type: 'bullets',
                },

                navigation: {
                    nextEl: '.reviews__slider .slider-nav__arrow_next',
                    prevEl: '.reviews__slider .slider-nav__arrow_prev',
                },
            },
            580: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },

                navigation: {
                    nextEl: '.reviews__slider .reviews__btn_next',
                    prevEl: '.reviews__slider .reviews__btn_prev',
                },

            },
        },

    });
}

$(document).ready(function() {
    $(".reviews__item .fancybox").fancybox({
        type: "iframe",
    });
});
