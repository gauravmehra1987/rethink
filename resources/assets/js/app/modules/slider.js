var BioSlider = {
	elem:{sel:$('.bxslider'), clk:$(".bios-block li .information .icon")},
	bxslider:false,
	options:{responsive:true,infiniteLoop:false},
	init:function(){
		BioSlider.bxslider = BioSlider.elem.sel.bxSlider(BioSlider.options);
		BioSlider.bind();
//		BioSlider.scroll();
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
	elem:{slides:$(".tab_content"),clk:$(".bios-block li .information .icon")},
	init:function(){
		Tab.elem.slides.hide();
		Tab.elem.clk.click(function(e){
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
