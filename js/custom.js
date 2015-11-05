$(document).ready(function() {





	navbar = $('#navbar');
	navbarToggle = $('#navbar-toggle');


	$('#testimonial').each(function(i, obj) {
		console.log(obj);
    	
	});

	navbarCheck(navbar);


	// navbar transform on scroll

	$(window).scroll(function() {
			navbarAnimation(navbar, navbarToggle);
		}).scroll();


	function navbarCheck() {
				if (navbar.hasClass('navbar-transparent')) {
					navbarTrans = true;
				} else {
					navbarTrans = false;
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


function hover(techIcon) {
    element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
}
function unhover(techIcon) {
    element.setAttribute('src', 'http://dummyimage.com/100x100/000/fff');
}