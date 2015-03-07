'use strict';

var $isMobile,
	windowHeight,
	windowWidth,
  preload;

var home,services,philosophy,video,about,contact;

home=services=philosophy=video=about=contact=true;

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
  $('html body').css("opacity",1);
})

function layoutResize(){
  windowWidth=$(window).width();
  windowHeight=$(window).height();
	$('.splash').css('height',windowHeight);
  $('.pageEnd').css('height',windowHeight*0.54);
  $('#footerSpace').css('height',$('footer').height()+40);
  if (windowWidth >= 2000){
    loadHighRes();
    window.setTimeout(function(){
      if (windowWidth >= 3000){
        loadHighRes();
      }
    },500);
  }
}

function windowResize(){
	$(window).resize(function(){
		if($(window).width() != windowWidth || $(window).height() != windowHeight ){
			layoutResize();
		}
	});
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
  
/*  if ($(window).scrollTop() < windowHeight){
    $("nav").addClass("seeThrough").css("width","100%");
  }
  else{
    $("nav").removeClass("seeThrough").css("width","840px");
  }*/  

  //hides if pass sessions
  // if($('#categoryInner').hasClass('fixed') && $('#categoryInner').offset().top < $('.package').offset().top+100){
  //   $('#categoryInner').css("width","0");
  // }
  // else{
  //   $('#categoryInner').css("width","840px");
  // }

  //button within view
  var pattern = /.+\/([^\/]+)/;
  var regexpMatches = pattern.exec(window.location.href);
  if (regexpMatches[1] == "services"){
    if ($('#categoryOutter').offset().top < windowHeight){
      $('#categoryInner').removeClass("fixed");
    }
    //
    else if($(window).scrollTop()+windowHeight+$('#categoryOutter').height()*0.7-$('#categoryOutter').height() < $('#categoryOutter').offset().top){
      fixedCategory();
    }
    else{
      $('#categoryInner').removeClass("fixed");
      console.log("else")
      if($(window).scrollTop()+windowHeight-$('#categoryOutter').offset().top>=70 || $(window).scrollTop()+windowHeight-$('#categoryOutter').offset().top<=150)
        $('#categoryInner .grid-third').find('.panel').css("height",$(window).scrollTop()+windowHeight-$('#categoryOutter').offset().top);
    }
    if(!($("#categoryInner").hasClass('fixed'))){
      $("#services2 .grid-third .panel:first-child").find("p").css("display","block");
      hoverEffect("#services2 .grid-third .panel:first-child", "p");
    }
    else $("#services2 .grid-third .panel:first-child").find("p").css("display","none");
  }
 }
function fixedCategory(){
  $('#categoryInner').addClass("fixed");
  console.log($(window).scrollTop()+windowHeight-$('#categoryOutter').offset().top);
  if($(window).scrollTop()+windowHeight-$('#categoryOutter').offset().top>=70 || $(window).scrollTop()+windowHeight-$('#categoryOutter').offset().top<=150)
      $('#categoryInner .grid-third').find('.panel').css("height",$(window).scrollTop()+windowHeight-$('#categoryOutter').offset().top);
}
function loadingHome(){
  var homeCover;
  var url = "../homeCover-standard.jpg";
  homeCover= new Image();
  homeCover.src=url;
  var bgUrl="url('"+url+"')";
  homeCover.onload = function(){
    $("#homeCover").css("background-image",bgUrl );
    $('html body').css("opacity",1);
    logoAnimation();
  }
}

function loadHighRes(){
      if (preload != null) preload.onload=null;
      preload = new Array();
      var bg = $("#main").find(".bg, img");
      var i;
      for (i=0; i<bg.length;i++){
        var imageUrl;
        if ($(bg[i]).attr('src')===undefined){
          var imageUrl = $(bg[i]).attr("style").match(/background-image.+/)[0];
          var pattern = /.+\/([^\/'");]+)/;
          imageUrl = pattern.exec(imageUrl);
          imageUrl = "../"+imageUrl[1];
        }
        else{
          imageUrl = $(bg[i]).attr('src')
        }
        var res = imageUrl.match(/-.+\./);
        if (res && res[0].substring(1,res[0].length-1) != "high"){
          if (res[0].substring(1,res[0].length-1) == "low"){
            imageUrl = imageUrl.replace(/-.+\./, "-standard.");
          }
          else if(res[0].substring(1,res[0].length-1) == "standard"){
            imageUrl = imageUrl.replace(/-.+\./,"-high.");
          }
        }
        preloading(bg[i], imageUrl, i);
      }
}
function preloading(selector, url, i){
  preload[i]= new Image();
  preload[i].src=url;
  if ($(selector).attr('src')===undefined){
    var bgUrl="url('"+url+"')";
    preload[i].onload = function(){
      $(selector).css("background-image",bgUrl );
    }
  }
  else{
    preload[i].onload=function(){
      $(selector).attr('src', url);
    }
  }
}

/*
 *  Video
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