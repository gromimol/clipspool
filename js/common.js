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
	})

})