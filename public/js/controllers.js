'use strict';

/* Controllers */
function HomeCtrl($scope){
  window.scrollTo(0,0);
}
function AboutCtrl($scope){
  window.scrollTo(0,0);
  $scope.ReadMore=false;
}
function PhilosophyCtrl($scope){
  window.scrollTo(0,0);
}
function ContactCtrl($scope){
  window.scrollTo(0,0);
}
function ServicesCtrl($scope){
  window.scrollTo(0,0);
  $scope.a=$scope.b=$scope.c=$scope.d=false;
  hoverEffect(".panel:first-child", "p");
  $(".panel:first-child").hover(
    function(){
      $(this).find(".price").css("top","45%");
    },
    function(){
      $(this).find(".price").css("top","50%");
    })
}
function VideosCtrl($scope){
  window.scrollTo(0,0);
  hoverEffect(".panelContainer", "p");
  $scope.playVideo = function (id){
    $("#playerLayer").removeClass("invisible").css("opacity",1);
    if(iframeLoaded) player.loadVideoById(id);
    else{
      iframeLoaded = true;
      setVideoID(id);
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[1];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }
  $scope.closeVideo = function(){
    stopVideo();
    $("#playerLayer").css("opacity",0).addClass("invisible");
  }
}