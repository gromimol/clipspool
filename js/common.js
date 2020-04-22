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