import Swiper from 'swiper/bundle';

window.peoplesMain = new Swiper('.peoples_main .swiper-container', {
	speed: 200,
	spaceBetween: 25,
	autoHeight: true,
	slidesPerView: 4,
	observer: true, 
	observeParents: true,
	grabCursor: true,
	loop: true,
	navigation: {
		nextEl: '.peoples_main .peoples__btn_next',
		prevEl: '.peoples_main .peoples__btn_prev',
	},
	
});



window.peoplesBot = new Swiper('.peoples_bot .swiper-container', {
	speed: 200,
	spaceBetween: 25,
	autoHeight: true,
	slidesPerView: 4,
	observer: true, 
	observeParents: true,
	grabCursor: true,
	loop: true,
	navigation: {
		nextEl: '.peoples_bot .peoples__btn_next',
		prevEl: '.peoples_bot .peoples__btn_prev',
	},

});


window.peoplesPopup = new Swiper('.peoples_stars .swiper-container', {
	speed: 200,
	spaceBetween: 25,
	autoHeight: true,
	slidesPerView: 1,
	observer: true, 
	observeParents: true,
	grabCursor: true,
	loop: true,
	navigation: {
		nextEl: '.peoples_stars .peoples__btn_next',
		prevEl: '.peoples_stars .peoples__btn_prev',
	},

});


	var peoples = document.querySelectorAll('.peoples:not(.peoples_popup) .peoples__item-img');
	for ( var i = 0; i < peoples.length; i++) {
		peoples[i].addEventListener('click', function(){
			show_popup('popup1');
			window.peoplesPopup.slideTo(this.getAttribute('data-people'));
			window.peoplesPopup.update();
		});
	}