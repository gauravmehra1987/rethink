var BioSlider = {
	elem:{sel:$('.bxslider'), clk:$(".bios-block li .information .icon")},
	bxslider:false,
	init:function(){
		BioSlider.bxslider = BioSlider.elem.sel.bxSlider();
		BioSlider.bind();
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
	}
}

$(document).ready(function(){
	var break_point = 768;
	if($(window).width() > break_point){
		console.log($(window).width());
		BioSlider.init();
	}
});
