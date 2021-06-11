$(document).ready(function() {
	$(window).on('scroll', function() {
		var scroll = $(this).scrollTop();
	    if(scroll > 691) {
	    	$(".home-navbar").addClass("colorize");
	    	$(".arrow").hide();
	    } else if (scroll < 691) {
	    	$(".home-navbar").removeClass("colorize");
	    	$(".arrow").show();
	    }
	});

	$(".track").on('mouseover', function() {
		$(this).css("animation-play-state", "paused");
	})

	$(".track").on('mouseleave', function() {
		$(this).css("animation-play-state", "running");
	})

	var a = 0;
	$(window).scroll(function() {
	  var oTop = $('.summary-box').offset().top - window.innerHeight;
	  if (a == 0 && $(window).scrollTop() > oTop) {
	    $('.summary-box h4').each(function() {
	      var $this = $(this),
	      countTo = $this.attr('data-count');
	      $({countNum: $this.text()}).animate({
	          countNum: countTo
	        },
	        {
	          duration: 2000,
	          easing: 'swing',
	          step: function() {
	            $this.text(Math.floor(this.countNum));
	          },
	          complete: function() {
	            $this.text(this.countNum);
	          }
	        });
		 });
	    a = 1;
	}});

	$(".mobile-link a").click(function() {
		$(".close-menu").click();
	})

	$(".navbar-item a, .mobile-link a").click(function() {
	var elem = $(this).attr('data-scroll');
    $('html, body').animate({
        scrollTop: $(elem).offset().top
	    }, 1000);
	});

	$(".arrow").click(function() {
	var elem = $(this).attr('data-scroll');
    $('html, body').animate({
        scrollTop: $(elem).offset().top
	    }, 1000);
	});

	$("#dark").click(function() {
		if($("#dark").is(":checked")) {
			$("html").removeClass("light-theme");
			$("html").addClass("dark-theme");
			localStorage.dark = "1";
		} else {
			$("html").removeClass("dark-theme");
			$("html").addClass("light-theme");
			localStorage.dark = "0";
		}
	})

	$("#dark-1").click(function() {
		if($("#dark-1").is(":checked")) {
			$("html").removeClass("light-theme");
			$("html").addClass("dark-theme");
			localStorage.dark = "1";
		} else {
			$("html").removeClass("dark-theme");
			$("html").addClass("light-theme");
			localStorage.dark = "0";
		}
	})

	if(localStorage.dark == "1") {
		$("#dark").prop("checked", true);
		$("#dark-1").prop("checked", true);
		$("html").removeClass("light-theme");
		$("html").addClass("dark-theme");
	} else {
		$("#dark").prop("checked", false);
		$("#dark-1").prop("checked", false);
		$("html").removeClass("dark-theme");
		$("html").addClass("light-theme");
	}

	$(".menu").click(function() {
		$(".mobile-menu").css({"display":"flex", "visibility": "visible", "opacity": "1"});
	})

	$(".close-menu").click(function() {
		$(".mobile-menu").css({"visibility": "hidden", "opacity": "0"});
	})
});