$(document).ready(function() {


	navbar = $('#navbar');
	navbarToggle = $('#navbar-toggle');
	console.log(navbar)
	navbarCheck(navbar);


	$(window).scroll(function() {
			navbarAnimation(navbar, navbarToggle);
		}).scroll();


	function navbarCheck() {
				if (navbar.hasClass('navbar-transparent')) {
					navbarTrans = true;
					console.log(navbarTrans);
				} else {
					navbarTrans = false;
					console.log(navbarTrans);
				}
			}

	function navbarAnimation(navbar, navbarToggle) {
		var topScroll = $(window).scrollTop();
		if (navbarTrans === true) {
			if (topScroll >= 1) {
				navbar.removeClass('navbar-transparent');
				navbarToggle.removeClass('navbar-toggle-transparent');
			} else {
				navbar.addClass('navbar-transparent');
				navbarToggle.addClass('navbar-toggle-transparent')
			}
		}
	}
});