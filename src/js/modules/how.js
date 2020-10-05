import Swiper from 'swiper/bundle';

if ( document.querySelector('.how__nav') ) {
	var howBtns = document.querySelectorAll('.how__nav-item');
	for ( var i = 0; i < howBtns.length; i++) {
		howBtns[i].addEventListener('click', function(){
			document.querySelector('.how__nav-item_active').classList.remove('how__nav-item_active');
			this.classList.add('how__nav-item_active');
			document.querySelector('.how').classList.toggle('how_open');
		});
	}
}

if ( document.querySelector('.how__slider') ) {
window.howSlider = new Swiper('.how__slider .swiper-container', {
	speed: 200,
	spaceBetween: 25,
	autoHeight: true,
	slidesPerView: 1,
	observer: true, 
	observeParents: true,
	grabCursor: true,
	loop: true,
	navigation: {
		nextEl: '.how__slider .slider-nav__arrow_next',
		prevEl: '.how__slider .slider-nav__arrow_prev',
	},
	pagination: {
		el: '.how__slider .slider-nav__bullets',
		type: 'bullets'
	},
});

document.querySelector('.how__slider-close').addEventListener('click', function(){
			document.querySelector('.how').classList.toggle('how_mobile');
});

}
if ( document.querySelector('.how__item-more') ) {
	var howMore = document.querySelectorAll('.how__item-more');
	for ( var i = 0; i < howMore.length; i++) {
		howMore[i].addEventListener('click', function(){
			document.querySelector('.how').classList.toggle('how_mobile');
			window.howSlider.slideTo(this.getAttribute('data-how'));
		});
	}

}
