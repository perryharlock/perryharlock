$(document).ready(function(){

	// Remove no-javascript class if js is enabled
	$("body").removeClass("no-javascript");

    // Variables and Cached Selectors
    var navLink = $('.js-nav__link'),
    $window = $(window),
    $animation_elements = $('.animated');;

    // Functions
    function goToByScroll(id){
        $('html,body').animate({
            scrollTop: $(id).offset().top
        }, 700);
        scrolled = true;
    }

    // Scroll to section of page
    navLink.click(function(e) {
        e.preventDefault();
        var link = $(this).attr('href');
        goToByScroll(link);
    });

    /*== Load content while in viewport ==*/
    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            }
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});