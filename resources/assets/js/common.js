
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
			
  			$(".scroll-active").appear();
  			$(document.body).on('appear', '.scroll-active', function(e, $affected) {
  				$("[data-type]").removeClass('active');
			    // this code is executed for each appeared element
			    $("[data-type='"+ $(this).attr('id')+"']").addClass('active');
			   
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