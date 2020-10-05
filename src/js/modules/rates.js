import Swiper from 'swiper/bundle';
window.ratesSlider = new Swiper('.rates__slider .swiper-container', {
	speed: 400,
	spaceBetween: 10,
	autoHeight: true,
	slidesPerView: 1,
	loopedSlides: 4,
	observer: true, 
	observeParents: true,
	grabCursor: true,
	slideToClickedSlide: true,
	loop: true,
	navigation: {
		nextEl: '.rates__slider .slider-nav__arrow_next',
		prevEl: '.rates__slider .slider-nav__arrow_prev',
	},

	breakpoints: {
		320: {
			spaceBetween: 10,
		},
		580: {
			spaceBetween: 20,
		}
	},
});


var ratesSlide = document.querySelectorAll('.rates-item__btns > p');
var rates = document.querySelectorAll('.rates-item');

for (var i = 0; i < ratesSlide.length; i++) {
	ratesSlide[i].addEventListener('click', function(){
		if ( this.closest('.rates-item').classList.contains('rates-item_active') ) {
				document.querySelector('#rates').scrollIntoView();
		}
		for (var j = 0; j < rates.length; j++) {
			rates[j].classList.toggle('rates-item_active');
			setTimeout(function(){
				window.ratesSlider.update();
			},50)
		}
	})
}



var sales = document.querySelectorAll('.tooltip__text_sale .sale-date');
var date = new Date();
var lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
var lastDay = lastDayDate.toLocaleString('RU', {day: 'numeric'});
var monthes = ['января','февраля','марта', 'апреля','мая','июня','июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
var result = lastDay+' '+monthes[date.getMonth()];

for (var i = 0; i < sales.length; i++) {
	sales[i].innerText = result;
}