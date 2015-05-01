// $(function(){
// 	"use strict"; 

// 	var wheight = $(window).height();

// 	//replace height with window height
// 	$('.fullheight').css('height',wheight);

// 	//adjust height of ful height elements when window resize
// 	$(window).resize(function(){
// 		wheight = $(window).height();
// 		$('fullheight').css('height', wheight);
// 	});
// })

//paste this code under head tag or in a seperate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});