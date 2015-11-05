
$(document).ready(function() {

	navbar = $('#navbar');
	navbarToggle = $('#navbar-toggle');
	techIcons = [
					"icons/html5-original.svg",
					"icons/css3-original.svg", 
					"icons/javascript-original.svg",
					"icons/meteor-original.svg",
					"icons/photoshop-plain.svg",
					"icons/illustrator-plain.svg"];

	console.log(techIcons);

	/*
	techIcons = [
					["icons/html5-plain.svg", "icons/html5-original.svg"],
					["icons/css3-plain.svg", "icons/css3-original.svg"],
					["icons/javascript-plain.svg", "icons/javascript-original.svg"],
					["icons/meteor-plain.svg", "icons/meteor-original.svg"],
					["icons/photoshop-line.svg", "icons/photoshop-plain.svg"],
					["icons/illustrator-line.svg", "icons/illustrator-plain.svg"]
	];
	*/


	$('#icons div img').each(function(i, obj) {
		var hold = [];
		hold.push(this.src);
		console.log(hold);
		obj.addEventListener("mouseover",function(){
		    this.src = techIcons[i];
		});
		obj.addEventListener("mouseout",function(){
		    this.src = hold[i];
		});
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


