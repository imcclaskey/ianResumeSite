$(document).ready(function() {


	navbar = $('#navbar');
	navbarToggle = $('#navbar-toggle');
	techIcons = [
					"icons/html5-original.svg",
					"icons/css3-original.svg", 
					"icons/javascript-original.svg",
					"icons/meteor-original.svg",
					"icons/bootstrap-original.svg",
					"icons/python-original.svg"
	];
	techHolds = [
					"icons/html5-plain.svg", 
					"icons/css3-plain.svg", 
					"icons/javascript-plain.svg",
					"icons/meteor-plain.svg", 
					"icons/bootstrap-plain.svg", 
					"icons/python-plain.svg",
	];

	//fade in effect

	$(".fader").each(function(i) {
	  	$(this).delay(i * 200).fadeIn();
	});
	
	$('.dropfade').each(function(i, obj) {
		setTimeout($obj.removeClass("dropfade")
   		, 800);
		
	});



	// navbar transform on scroll

	navbarCheck(navbar);


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
			if (topScroll >= 25) {
				navbar.removeClass('navbar-transparent');
				navbarToggle.removeClass('navbar-toggle-transparent');
			} else {
				navbar.addClass('navbar-transparent');
				navbarToggle.addClass('navbar-toggle-transparent')
			}
		}
	}


	//resume icon hover effect

	

		/* $(this).hover(function() {
		   $(this).hide( function(){
		      $(this).attr('src', techIcons[i]).bind('onreadystatechange load', function(){
		         if (this.complete) $(this).fadeIn(300);
		      });
		   });
		}); 

		obj.addEventListener("mouseover",function(){
		    this.src = techIcons[i];
		});
		obj.addEventListener("mouseout",function(){
		    this.src = techHolds[i];
		}); 
	}); */

});


