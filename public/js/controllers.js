'use strict';

/* Controllers */
function HomeCtrl($scope){
  window.scrollTo(0,0);
  layoutResize();
  logoAnimation();
  
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
  hoverEffect("#contact .grid-half:last-child .panel","p");
}
function ServicesCtrl($scope){
  window.scrollTo(0,0);
  $scope.a=$scope.b=$scope.c=$scope.d=false;
  hoverEffect("#services .grid-third .panel:first-child", "p");
  $("#services .grid-third .panel:first-child").hover(
    function(){
      $(this).find("h1").css("top","47%");
    },
    function(){
      $(this).find("h1").css("top","50%");
    }
  );
  $scope.showProgram = function(program){
    if($("body").scrollTop() > $("#consultation").offset().top-80){
      $("html body").animate({scrollTop:$("#consultation").offset().top-80}, '500', 'swing');
    }
    if (program == 'a'){
      $scope.a=!$scope.a;$scope.b=false;$scope.c=false;$scope.d=true;
    }
    else if (program == 'b'){
      $scope.b=!$scope.b;$scope.a=false;$scope.c=false;$scope.d=true;
    }
    else if (program == 'c'){
      $scope.c=!$scope.c;$scope.a=false;$scope.b=false;$scope.d=true;
    }
    if ($scope.a==false && $scope.b==false && $scope.c==false){
      $scope.d=false;
    }
  }
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