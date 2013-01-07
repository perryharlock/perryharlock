$(document).ready(function(){

	// Remove no-javascript class if js is enabled
	$("body").removeClass("no-javascript")

	// form validation
	$("[data-role='contact-form']").validate();


	// Function to animate sections
	var animateSection = function(sectionName, offset){
		$('html,body').animate({
		      scrollTop: $(sectionName).offset().top + offset
		  	}, 1000);
	}

	// What happens when a show more / see less trigger ic clicked
	$("[data-role='portfolio-trigger']").click(function(event){
		var target = $("[data-role='portfolio-target']");
		var trigger = $(this);

		// Open and close the more work section
		event.preventDefault();
		target.slideToggle();

		// Amend trigger text and slide to section
		if (trigger.text() === "See less") {
			$("[data-role='portfolio-trigger']").text("See more");
			// Slide to section
		  	animateSection($(".recent-work"),-140);
		}
		else {
			$("[data-role='portfolio-trigger']").text("See less");
			// Slide to section
		  	animateSection($(target),0);
		};

		// Show all triggers then hide one just clicked on
		$("[data-role='portfolio-trigger']").show();
		$(this).hide();

		// Toggle class of trigger
		$("[data-role='portfolio-trigger']").toggleClass("is-open");

		// remove decorated section styling from contact form when portfolio is shown
	  	$(".contact-form").toggleClass("decorated-section");

	});

});