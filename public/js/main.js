
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".loader").fadeOut("fast",function(){
			$("#intro .intro-text h1").addClass('fadeInDown animated')
		});

	});

