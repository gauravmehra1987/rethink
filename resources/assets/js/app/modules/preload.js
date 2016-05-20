var preload = {
	selector:$("img"),
	container:$(".rethink_loader"),
	percent_container:$(".loader_content span"),
	count:$("img").length,
	percent:0,
	loaded:0,
	counter:50,
	duration:20,
	interval:false,
	init:function(){		
		preload.loaded = 0;
		preload.percent = 0;
		preload.start();
	},
	setloop:function(){
		++preload.counter;
		preload.updateText(preload.counter);
		if(preload.counter == 100){
			console.log("clearing interval")
			clearInterval(preload.interval);
			preload.unload();
		}
	},
	start:function(){
		preload.selector.each(function(i){
			$("img").on('load', function() {
				++preload.loaded;
				preload.percent = parseInt(preload.loaded/preload.count*100);
				preload.update(preload.percent);
			});
		});
	},
	update:function(percent){
		if(percent<100){
			var half = parseInt(percent/2);
			preload.updateText(half);
		}
		if(percent==100){
			preload.percent = 50;
			preload.interval = setInterval(preload.setloop, preload.duration);
		}
			
	},
	updateText:function(text){
		preload.percent_container.text(text + "%");
	},
	unload:function(){
		setTimeout(function(){
			preload.container.hide();
		},1000);
	}
}