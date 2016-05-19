
$(document).ready(function(){

	$("html").niceScroll();
	$(window).stellar();
	$('.bxslider').bxSlider();
	$(".player").mb_YTPlayer();

			// grab the initial top offset of the navigation 
		   	var stickyNavTop = $('.nav').offset().top;
		   	
		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			         
			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
			    // otherwise change it back to relative
			    if (scrollTop > stickyNavTop) { 
			        $('.nav').addClass('sticky');
			    } else {
			        $('.nav').removeClass('sticky'); 
			    }
			};

			stickyNav();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyNav();
			});
			// var $appeared = $('.scroll-active');
  			// var $disappeared = $('.scroll-active');
			$('.scroll-active').appear();
			$('.scroll-active').on('appear', function(event, $all_appeared_elements) {
				alert(all_appeared_elements);
		      // this element is now inside browser viewport
		    });
		    $('.scroll-active').on('disappear', function(event, $all_disappeared_elements) {
		      // this element is now outside browser viewport
		    });
			var activeDiv = function(selector){
				$('html,body').animate({
				        scrollTop: $(selector).offset().top},
				        'slow');
			}
			$("[data-type]").click(function(){
				var el = $(this);
				$("[data-type]").removeClass('active');
				el.addClass('active');
				if(el.data('type')=="laura"){
					activeDiv("#laura");
				}
				if(el.data('type')=="sharni"){
					activeDiv("#sharni");
				}if(el.data('type')=="video"){
					activeDiv("#video");
				}if(el.data('type')=="slider"){
					activeDiv("#slider");
				}
			})

});