var tag = document.createElement('script');

	var player;
	var seletor = "player", elem = $("#player");
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


	function onYouTubeIframeAPIReady() {
	  player = new YT.Player(seletor, {
		height: '600',
		width: '100%',
		videoId: 'o1MK-zkM3qk',
		playerVars: { autoplay:0,modestbranding:1,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3 },
		events: {
		  onReady: onPlayerReady,
		  onStateChange: function(){ }
		}
	  });
	}

	function onPlayerReady(event) {
		var $appeared = elem;
		var $disappeared = elem;
		elem.appear({interval:1000});
		$(document.body).on('appear', '#'+seletor, function(e, $affected) {
			event.target.playVideo();
			$appeared.empty();
		});
		$(document.body).on('disappear', '#'+seletor, function(e, $affected) {
			$disappeared.empty();
			event.target.pauseVideo();
		});
	}
