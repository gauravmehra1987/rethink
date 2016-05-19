var preload = {
	selector:$("img"),
	container:$(".rethink_loader"),
	percent_container:$(".loader_content span"),
	count:$("img").length,
	percent:0,
	loaded:0,
	init:function(){
		preload.selector.each(function(i){
			$(this).load(function(){
				++preload.loaded;
				preload.percent = parseInt(preload.loaded/preload.count*100);
				preload.update(preload.percent);
				preload.unload();
			});
		});
	},
	update:function(percent){
		preload.percent_container.text(percent + "%");
		console.log(percent);	
	},
	unload:function(){
		if(preload.percent == 100){
			setTimeout(function(){
				preload.container.hide();
			},2000);
		}
	}
}


$(document).ready(function(){
	preload.init();
});

