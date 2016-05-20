menu = {
	el:{_sc:$(".scroll-active")},
	midHeight:false,
	init:function(){
		menu.goto();
		menu.scroll();
	},
	scroll:function(){
		var scrollPos = $(document).scrollTop();
		$("[data-type]").each(function () {
			var currLink = $(this);
			var refElement = $("#"+currLink.data('type'));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$("[data-type]").removeClass("active");
				currLink.addClass("active");
			}
			else{
				currLink.removeClass("active");
			}
		});           
	},
	
	goto:function(){
		$(document).on("scroll", menu.scroll);  
		$("[data-type]").on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
			$("[data-type]").removeClass('active');
			$(this).addClass('active');

			var target = $(this).data('type');
							menu = target;
			$target = $("#"+target);
			$('html, body').stop().animate({
							'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
					window.location.hash = "#"+target;
					$(document).on("scroll", menu.scroll);
			});
		});
				
	}
}
  
                      
