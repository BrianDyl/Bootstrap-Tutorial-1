var doc = jQuery(document);



doc.ready(function(){

	"use strict";

	var typed = new Typed(".mytext", {
	  strings: ["Alex Doe", "Web Developer","Graphics Designer"],
	  smartBackspace: true, // Default value
	  loop:true,
	  backDelay: 1000,
	  typeSpeed: 10
	});

	if($(window).scrollTop()<200){
		$('.navbar-nav').addClass('navbar-nav-bg');
	}
	// $('.navbar-nav').onePageNav({
	// 	currentClass: 'active'
	// });

	$(window).scroll(function(){

		var top = $(window).scrollTop();

		if(top>=100)
		{
			$('header').addClass('overlay');
			$('.navbar-nav').removeClass('navbar-nav-bg');
		}

		else if($('header').hasClass('overlay'))
		{
			$('header').removeClass('overlay');
		}
		else
		{
			$('.navbar-nav').addClass('navbar-nav-bg');
		}
	});

	
});