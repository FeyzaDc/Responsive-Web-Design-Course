$(document).ready(function () {
	$("#slider").bxSlider({
		auto: true,
		minSlides: 2,
		maxSlides: 2,
		slideWidth: 250,
		slideMargin: 10,
		
		randomStart: true,
		moveSlides: 1,
		minSlides: 1,
		maxSlides: 1,
		pause: 3000,
		pagerCustom: '#pager',
		pagerType: 'short'
	});
});