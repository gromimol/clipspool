$(document).ready(function () {
	
	// mobile menu
	$('.mobile-btn').on('click',function (e) {
		e.preventDefault();

		$('#overlay').addClass('active');
		$('body').addClass('noscroll');
		$('.mobile-menu').addClass('active');
	});

	$('#overlay, .close').on('click',function (e) {
		e.preventDefault();

		$('#overlay, .mobile-menu').removeClass('active');
		$('body').removeClass('noscroll');
		// $('.mobile-menu').addClass('active');
	});

	// tabs
	$('.js-tab-menu').on('click', 'a', function (e) {
		e.preventDefault();

		var tabLink = $(this).attr('data-content');

		$('.js-tab-menu li').removeClass('active');
		$(this).closest('li').addClass('active');

		$('.js-tab-content').removeClass('active');
		$('#' + tabLink).addClass('active');
	})

	// slider
	$('.models-slider').slick({
		variableWidth: true,
		slidesToShow: 10,
		slidesToScroll: 2,
		prevArrow: '<span class="prev-arrow"></span>',
		nextArrow: '<span class="next-arrow"></span>'
	});

})