menu = {
	el:{_sc:$(".scroll-active")},
	midHeight:false,
	init:function(){
		
		menu.goto();
		menu.scroll();
	},
	addActivClass:function(selector){
		menu.deactivateScroll();
		menu.activateScroll(selector);
	},
	activateScroll:function(selector){
		$("[data-type='"+selector+"']").addClass('active');
	},
	deactivateScroll:function(){
		$("[data-type]").removeClass('active');
	},
	scroll:function(){
		$(".scroll-active").appear();
		menu.midHeight = parseInt(jQuery(window).height() / 2); //Splits screen in half
		$(document.body).on('appear', '.scroll-active', function(e, $affected) {
			
			if($affected.not(':first').length!=0){
				var eTop = parseInt($affected.length==1?$affected.offset().top:$affected.not(':first').offset().top - $(document).scrollTop());
				if(menu.midHeight>eTop){
					$affected.length==1?menu.addActivClass('laura'):menu.addActivClass($affected.not(':first').attr('id'));
				}else{
					$affected.length==1?menu.addActivClass('laura'):"";
				}
			}
			if($(document).scrollTop()<10){
				menu.addActivClass('laura');
			}
		});
	},
	anchorTo:function(selector){
		$('html,body').animate({
			scrollTop: $(selector).offset().top
		},'slow');
	},
	goto:function(){
		$("[data-type]").click(function(e){ e.preventDefault();
			var el = $(this);
			$("[data-type]").removeClass('active');
			el.addClass('active');
				menu.anchorTo("#"+$(this).data('type'));
			
		});
	}
}
