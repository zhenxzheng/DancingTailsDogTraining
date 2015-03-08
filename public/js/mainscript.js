'use strict';

var $isMobile,
	windowHeight,
	windowWidth,
  preload,
  cover;

var showMenu=false;

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
  $('#mobileMenu').click(function(){
    if(!showMenu){
      showMenu=true;
      $('.navItem').addClass('showMenu');
      $('nav').css({height:$(window).height(),"overflow-y":"scroll"});
    }
    else{
      showMenu=false;
      $('.navItem').removeClass('showMenu');
      $('nav').css({height:"77px","overflow-y":"hidden"});
    }
  })
  $('.navItem').click(function(){
    showMenu=false;
    $('.navItem').removeClass('showMenu');
    $('nav').css({height:"77px","overflow-y":"hidden"});
  });
})

function checkMobile(){
  if($isMobile != null){
    $('body').addClass("mobileMode");
    $('.bg').css("background-attachment","scroll");
  }
}


function layoutResize(){
  windowWidth=$(window).width();
  windowHeight=$(window).height();
  checkMobile();
	$('.splash').css('height',windowHeight);
  $('#footerSpace').css('height',$('footer').height()+40);

  if (windowWidth <= 400) $('.pageEnd').css('height',windowHeight*0.8);
  else $('.pageEnd').css('height',windowHeight*0.54);

  if (windowWidth < 701) $('#video .panelContainer p').removeClass('hideBottom');
  else $('#video .panelContainer p').addClass('hideBottom');

  if (windowWidth > 520){
    showMenu=false;
    $('.navItem').removeClass('showMenu');
    $('nav').css({height:"77px","overflow-y":"hidden"});
  }
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
    $("#homeCover").find(".hideBottom").removeClass("hideBottom");
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
  if($(window).scrollTop()+windowHeight-$('#categoryOutter').offset().top>=70 || $(window).scrollTop()+windowHeight-$('#categoryOutter').offset().top<=150)
      $('#categoryInner .grid-third').find('.panel').css("height",$(window).scrollTop()+windowHeight-$('#categoryOutter').offset().top);
}
function loadingHome(){
  if(cover != null) cover.onload=null;
  var url = "../homeCover-standard.jpg";
  cover= new Image();
  cover.src=url;
  var bgUrl="url('"+url+"')";
  cover.onload = function(){
    $("#homeCover").css("background-image",bgUrl );
    $('html body').css("opacity",1);
    logoAnimation();
  }
}
function loadingContact(){
  if(cover != null) cover.onload=null;
  var url = "../contact-standard.jpg";
  cover= new Image();
  cover.src=url;
  var bgUrl="url('"+url+"')";
  cover.onload = function(){
    $(".splash").css("background-image",bgUrl );
    $(".splash").find(".hideBottom").removeClass("hideBottom");

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

function validate(selector){
  var pattern, input, match, validated;
  var $input;
  //user name, dog name, and breed [LETTERS ONLY]
  if ($(selector).attr('id') == $('#userName').attr('id') || $(selector).attr('id') == $('#dogName').attr('id') || $(selector).attr('id') == $('#dogBreed').attr('id')){
    pattern = /[a-zA-Z ]+/;
    $input = $(selector).find('input');
    input = $input.val().toUpperCase();
    match = input.match(pattern);
    validated = (match == input ? true : false);
  }
  //user phone [10-11 NUMBERS ONLY]
  else if ($(selector).attr('id') == $('#userPhone').attr('id')){
    $input = $(selector).find('input');
    input = $input.val();
    if (input.match(/[a-zA-Z]/)){
      validated = false;
    }
    else{
      input = input.replace(/[^0-9]/g,"");
      validated = input.length==10 || input.length==11 ? true:false;
    }
  }
  //user email [dancing@tails.com]
  else if ($(selector).attr('id') == $('#userEmail').attr('id')){
    pattern = /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b/;
    $input = $(selector).find('input');
    input = $input.val().toLowerCase();
    match = input.match(pattern);
    validated = (match == input ? true : false);
  }
  //content and age [!empty]
  else if ($(selector).attr('id') == $('#messageContent').attr('id') || $(selector).attr('id') == $('#dogAge').attr('id')){
    $input = $(selector).find('textarea').length?$(selector).find('textarea'):$(selector).find('input');
    input = $input.val();
    validated = (input != '' ? true : false);
  }

  if (validated){
    $(selector).find('.validation').removeClass("glyphicon glyphicon-remove red").addClass("glyphicon glyphicon-ok green");
    $input.css("border-color","#1BA39C");
  }
  else{
    $(selector).find('.validation').removeClass("glyphicon glyphicon-ok green").addClass("glyphicon glyphicon-remove red");
    $input.css("border-color","red");
  }
  return validated;
}