'use strict';

var $isMobile,
	windowHeight,
	windowWidth;

$(document).ready(function(){
	$isMobile=navigator.userAgent.match(/(Phone|iPod|iPad|Android|BlackBerry)/);
	windowWidth=$(window).width();
	windowHeight=$(window).height();

	// mainResize();
	layoutResize();
	windowResize()
})

function layoutResize(){
	$('#homeCover').css('height',windowHeight);
	$
}

// function mainResize(){
// 	windowWidth=$(window).width();
// 	windowHeight=$(window).height();
// 	$('#main').css('height',windowHeight)
// }

function windowResize(){
	$(window).resize(function(){
		if($(window).width() != windowWidth || $(window).height() != windowHeight ){
			// mainResize();
			layoutResize();
		}
	});
}
/*
 *	Video
 */

function setVideoID(id){
	videoID = id;
}

var player, videoID, iframeLoaded = false;
function onYouTubeIframeAPIReady() {
  console.log("API ready")
  player = new YT.Player('player', {
    height: '500',
    width: '840',
    videoId: videoID,
    events: {
      'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerReady(event) {
  event.target.playVideo();
}
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}