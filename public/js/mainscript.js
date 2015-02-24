'use strict';

var $isMobile,
	windowHeight,
	windowWidth;

$(document).ready(function(){
	$isMobile=navigator.userAgent.match(/(Phone|iPod|iPad|Android|BlackBerry)/);
	windowWidth=$(window).width();
	windowHeight=$(window).height();
	windowResize()
  document.addEventListener("scroll", headerScroll, false);
  document.addEventListener("touchmove", headerScroll, false);
  $(window).scroll(function(){
      headerScroll();
  })
})

function layoutResize(){
	$('#homeCover').css('height',windowHeight);
}

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

function hoverEffect(parent, child){
	$(parent).hover(
    function(){
      $(this).find(child).removeClass("hideBottom");
    },
    function(){
      $(this).find(child).addClass("hideBottom");
    }
  )
}

function logoAnimation(){
  window.setTimeout(function(){
    $("#logoText").css("top",0);
    window.setTimeout(function(){
      $("#logoDog1").css({"opacity":1,"top":0});
      window.setTimeout(function(){
        $("#logoDog2").css({"opacity":1,"top":0});
        window.setTimeout(function(){
          $("#logoDog3").css({"opacity":1,"top":0});
        },800);
      },800);
    },800);
  },800);
}

function headerScroll(){
  
  // if ($(window).scrollTop() < windowHeight){
  //   $("nav").addClass("seeThrough");
  // }
  // else{
  //   $("nav").removeClass("seeThrough");
  // }
}