var BioSlider = {
	elem:{
		sel:$('.bxslider'), 
		clk:$(".bios-block li .information .icon"),
		videoIframe:$(".video-block iframe"),
		bx_pager:$(".bx-pager-link"),
		bx_prev:$(".bx-prev"),
		bx_next:$(".bx-next")
	},
	bxslider:false,
	options:{responsive:true,infiniteLoop:false,onSlideBefore:function(){ BioSlider.stopVideo(); }, onSlideAfter:function(){ BioSlider.handleNav(); }},
	init:function(){
		$(".bx-prev").hide();
		BioSlider.bxslider = BioSlider.elem.sel.bxSlider(BioSlider.options);
		BioSlider.bind();
		BioSlider.onDisappear();
		BioSlider.handleNav();
//		BioSlider.scroll();
	},
	handleNav:function(){
		if($(".bx-pager-link").first().hasClass("active")){
			$(".bx-prev").hide();
		}else{
		  $(".bx-prev").show();
		}
		
		if($(".bx-pager-link").last().hasClass("active")){
			$(".bx-next").hide();
		}else{
		  $(".bx-next").show();
		}
	},
	onDisappear:function(){
		
		$(".video-block").appear({interval:1000});
		var $disappeared = $(".video-block");
		$(document.body).on('disappear',".video-block", function(e, $affected) {
			console.log("hiding block");
//			$disappeared.empty();
			BioSlider.stopVideo();
		});
	},
	stopVideo:function(){
		BioSlider.elem.videoIframe.each(function(){
			var iframe = $(this)[0].contentWindow;
			iframe.postMessage('{"event":"command","func":"stopVideo","args":""}','*');
		});
	},
	bind:function(){
		BioSlider.elem.clk.click(function(){
			var $this = $(this);
			var index = $this.closest("li").index();
			var next = index + 1;
			BioSlider.goto(next);
		});
	},
	goto:function(slide){
		BioSlider.bxslider.goToSlide(slide);
	},
	scroll:function(){
		BioSlider.elem.sel.on('mousewheel', function(event) {
			if(event.deltaY == 1){
				if($(".bx-pager-item:first-child").find('a').hasClass('active')){
					//do nothing if first is alreay active
				}else{
					BioSlider.bxslider.goToPrevSlide();
					event.preventDefault();
					event.stopPropagation();
				}
			}else{
				if($(".bx-pager-item:last-child").find('a').hasClass('active')){
					//do nothing if first is alreay active
				}else{
					BioSlider.bxslider.goToNextSlide();
					event.preventDefault();
					event.stopPropagation();
				}
			}
			
		});
	}
}

var Tab = {
	elem:{slides:$(".tab_content"),clk:$(".bios-block li .information .icon"), videoIframe:$(".video-block iframe")},
	onDisappear:function(){
		$(".video-block").appear({interval:1000});
		var $disappeared = $(".video-block");
		$(document.body).on('disappear',".video-block", function(e, $affected) {
			Tab.stopVideo();
		});
	},
	stopVideo:function(){
		Tab.elem.videoIframe.each(function(){
			var iframe = $(this)[0].contentWindow;
			iframe.postMessage('{"event":"command","func":"stopVideo","args":""}','*');
		});
	},
	init:function(){
		Tab.onDisappear();
		Tab.elem.slides.hide();
		Tab.elem.clk.click(function(e){
			Tab.stopVideo();
			var $this = $(this);
			Tab.elem.slides.hide();
			var slide = $("li#"+$this.attr('id'));
			slide.show();
			setTimeout(function(){
				$('html, body').animate({scrollTop:slide.offset().top + 517 +"px"}, 1000, "linear");
			},20);
		});
		Tab.elem.slides.eq(0).show();
		
	}
}

$(document).ready(function(){
	var break_point = 767;
	if($(window).width() > break_point){
		BioSlider.init();
	}else{
		Tab.init();
	}
});
