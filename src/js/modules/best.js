import Swiper from 'swiper/bundle';

window.bestSlider = new Swiper('.best__slider .swiper-container', {
	speed: 400,
	spaceBetween: 25,
	autoHeight: true,
	slidesPerView: 1,
	observer: true, 
	observeParents: true,
	grabCursor: true,
     navigation: {
    nextEl: '.best__slider .slider-nav__arrow_next',
    prevEl: '.best__slider .slider-nav__arrow_prev',
  },

  pagination: {
    el: '.best__slider .slider-nav__bullets',
    type: 'bullets',
  },

});