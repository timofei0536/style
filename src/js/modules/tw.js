import Swiper from 'swiper/bundle';

window.twSlider = new Swiper('.tw__slider .swiper-container', {
	loop: true,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 3,
	loopedSlides: 4,
	autoHeight: true,
	slideToClickedSlide: true,
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 0,
		stretch: 80,
		depth: 200,
		modifier: 1,
		slideShadows : false,
	},
	observer: true, 
	observeParents: true,
	pagination: {
		el: '.tw__slider .slider-nav__bullets',
		type: 'bullets',
	},
	navigation: {
		nextEl: '.tw__slider .tw__slider-btn_next',
		prevEl: '.tw__slider .tw__slider-btn_prev',
	},
	
	breakpoints: {
		320: {
			effect: 'slide',
			spaceBetween: 25,
			slidesPerView: 1,
			navigation: {
				nextEl: '.tw__slider .slider-nav__arrow_next',
				prevEl: '.tw__slider .slider-nav__arrow_prev',
			}

		},

		580: {
			effect: 'coverflow',
			navigation: {
				nextEl: '.tw__slider .tw__slider-btn_next',
				prevEl: '.tw__slider .tw__slider-btn_prev',
			},
			slidesPerView: 2,
			spaceBetween: -80,
		},


		1024: {
			slidesPerView: 3,
		},

	},

	on: {
		slideChange: function () {
			var activeIndex = this.activeIndex;
			var realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
			$('.tw__slider .swiper-slide').removeClass('swiper-slide-prev-prev swiper-slide-next-next');
			$('.tw__slider .swiper-slide[data-swiper-slide-index="'+realIndex+'"]').prev().prev().addClass('swiper-slide-prev-prev');
			$('.tw__slider .swiper-slide[data-swiper-slide-index="'+realIndex+'"]').next().next().addClass('swiper-slide-next-next');
		}
	}
});


$(document).ready(function() {
	$(".tw__item .fancybox").fancybox({
		type: "iframe",
	});
});