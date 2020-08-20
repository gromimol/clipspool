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
		e.stopPropagation();

		$('#overlay, .mobile-menu, .header .submenu, .search-block').removeClass('active');
		$('body').removeClass('noscroll');
		// $('.mobile-menu').addClass('active');
	});

	// mobile filters
	$('.filter-btn').on('click', function (e) {
		e.preventDefault();

		$(this).toggleClass('active');
		$('.filter-container').toggleClass('visible');
	})

	// mobile-search
	$('.js--search-block-btn').on('click', function () {
		$('.search-block').addClass('active');
	})

	// tabs

	$('.nav-tabs a:first').tab('show')

	// Select
	$('.select').on('click','.placeholder',function(){
		var parent = $(this).closest('.select');
		if ( ! parent.hasClass('is-open')){
			parent.addClass('is-open');
			$('.select.is-open').not(parent).removeClass('is-open');
		}else{
			parent.removeClass('is-open');
		}
	}).on('click','ul>li',function(){
		var parent = $(this).closest('.select');
		parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
		parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
	});

	// slider
	$('.models-slider').slick({
		variableWidth: true,
		slidesToShow: 10,
		slidesToScroll: 2,
		prevArrow: '<span class="prev-arrow"></span>',
		nextArrow: '<span class="next-arrow"></span>'
	});

	$('.inner-slider__main').slick({
		slidesToShow: 1,
		arrows: false,
		fade: true,
		asNavFor: '.inner-subslider'
	});

	$('.inner-subslider').slick({
		slidesToShow: 5,
		asNavFor: '.inner-slider__main',
		centerMode: true,
		focusOnSelect: true,
		prevArrow: '<span class="prev-slide"><?xml version="1.0" encoding="UTF-8"?><svg width="10" height="16" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 10 16"><defs></defs><desc>Generated with Avocode.</desc><g><g clip-path="url(#clip-17618)"><title>back button</title><path d="M1.70484,8.00286v0l8.09001,6.92242c0.26652,0.24837 0.26652,0.64999 0,0.89872c-0.26563,0.24819 -0.698,0.24819 -0.96452,0l-8.53037,-7.29883c-0.03636,-0.0236 -0.08426,-0.01556 -0.11619,-0.04524c-0.14146,-0.13214 -0.20266,-0.30649 -0.19423,-0.47886c-0.0071,-0.17005 0.05499,-0.34243 0.19468,-0.47386c0.03104,-0.02861 0.07716,-0.02092 0.1122,-0.04309l8.53392,-7.30133c0.26563,-0.24873 0.69712,-0.24873 0.96408,0c0.26652,0.24891 0.26652,0.65142 0,0.89943z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		nextArrow: '<span class="next-slide"><?xml version="1.0" encoding="UTF-8"?><svg width="10" height="16" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 10 16"><defs></defs><desc>Generated with Avocode.</desc><g><g clip-path="url(#clip-17646)"><title>back button</title><path d="M8.29521,8.00286v0l-8.09001,6.92242c-0.26652,0.24837 -0.26652,0.64999 0,0.89872c0.26563,0.24819 0.698,0.24819 0.96452,0l8.53037,-7.29883c0.03636,-0.0236 0.08426,-0.01556 0.11619,-0.04524c0.14146,-0.13214 0.20266,-0.30649 0.19423,-0.47886c0.0071,-0.17005 -0.05499,-0.34243 -0.19468,-0.47386c-0.03104,-0.02861 -0.07761,-0.02092 -0.1122,-0.04309l-8.53392,-7.30133c-0.26608,-0.24873 -0.69712,-0.24873 -0.96408,0c-0.26652,0.24891 -0.26652,0.65142 0,0.89943z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					focusOnSelect: false,
				}
			}
		]
	});

	// cta
	$('.cta-item ').on('click', function (e) {
		e.preventDefault();

		$(this).toggleClass('active');
	});

	// submenu
	$('.js-submenu').on('click',function (e) {
		e.preventDefault();
		e.stopPropagation();

		$(this).toggleClass('active').next('.submenu').toggleClass('active');
	});

	$('.js-submenu-container').on('click',function (e) {
		e.preventDefault();
		e.stopPropagation();

		$(this).find('.submenu').toggleClass('active');
	});

	// masonry
	$('.masonry-container').masonry({
		columnWidth: '.grid-sizer',
		itemSelector: '.model-item',
		percentPosition: true,
		gutter: 15
	});
	

})