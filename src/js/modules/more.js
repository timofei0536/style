import Swiper from 'swiper/bundle';
if( document.querySelector('body').clientWidth < 580 ) {
	window.moreSlider = new Swiper('.more__slider .swiper-container', {
		loop: true,
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 2,
		loopedSlides: 4,
		autoHeight: true,
		coverflowEffect: {
			rotate: 0,
			stretch: 100,
			depth: 350,
			modifier: 1,
			slideShadows : false,
		},
		spaceBetween: -20,
		observer: true, 
		observeParents: true,
		navigation: {
			nextEl: '.more__slider .slider-nav__arrow_next',
			prevEl: '.more__slider .slider-nav__arrow_prev',
		},

		pagination: {
			el: '.more__slider .slider-nav__bullets',
			type: 'bullets',
		},

		on: {
			slideChange: function () {
				var activeIndex = this.activeIndex;
				var realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
				$('.more__slider .swiper-slide').removeClass('swiper-slide-prev-prev swiper-slide-next-next');
				$('.more__slider .swiper-slide[data-swiper-slide-index="'+realIndex+'"]').prev().prev().addClass('swiper-slide-prev-prev');
				$('.more__slider .swiper-slide[data-swiper-slide-index="'+realIndex+'"]').next().next().addClass('swiper-slide-next-next');
			}
		},
		breakpoints: {
			320: {

				coverflowEffect: {
					rotate: 0,
					stretch: 80,
					depth: 350,
					modifier: 1,
					slideShadows : false,
				},

			},

			400: {
				coverflowEffect: {
					rotate: 0,
					stretch: 100,
					depth: 350,
					modifier: 1,
					slideShadows : false,
				},
			}
		}

	});

}


window.peoplesPopup2 = new Swiper('.peoples__slider_more .swiper-container', {
	speed: 200,
	spaceBetween: 25,
	autoHeight: true,
	slidesPerView: 1,
	observer: true, 
	observeParents: true,
	grabCursor: true,
	loop: true,
	navigation: {
		nextEl: '.peoples_more .peoples__btn_next',
		prevEl: '.peoples_more .peoples__btn_prev',
	},

});


var peoples2 = document.querySelectorAll('.more__people-img');
for ( var i = 0; i < peoples2.length; i++) {
	peoples2[i].addEventListener('click', function(){
		show_popup('popup3');
		window.peoplesPopup2.slideTo(this.getAttribute('data-peoples'));
		window.peoplesPopup2.update();
	});
}