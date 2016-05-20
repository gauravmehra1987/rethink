var preload = {
	selector:$("img"),
	container:$(".rethink_loader"),
	percent_container:$(".loader_content span"),
	count:$("img").length,
	percent:0,
	loaded:0,
	duration:30,
	init:function(){		
		preload.loaded = 0;
		preload.percent = 0;
		preload.interval = setInterval(preload.setloop, preload.duration);
	},
	setloop:function(){
		++preload.percent;
		preload.update(preload.percent);
		if(preload.percent == 100){
			clearInterval(preload.interval);
			preload.unload();
		}
	},
	start:function(){
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
		if(percent%3==0 || percent == 100)
			preload.percent_container.text(percent + "%");
	},
	unload:function(){
		if(preload.percent == 100){
			setTimeout(function(){
				preload.container.hide();
			},1000);
		}
	}
}


$(document).ready(function(){
	preload.init();
});

