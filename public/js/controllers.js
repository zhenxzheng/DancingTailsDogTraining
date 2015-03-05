'use strict';

/* Controllers */
function HomeCtrl($scope, $http){
  window.scrollTo(0,0);
  loadingHome();
  layoutResize();
  $http.get('api/reviews')
    .success(function(data, status, headers, config){
      $scope.reviews = data.reviews;
    });
  $scope.moveDown = function(){
      $("html, body").animate({scrollTop:$("#customer").offset().top-80}, '500', 'swing');
  }
}
function AboutCtrl($scope){
  window.scrollTo(0,0);
  $scope.ReadMore=false;
  layoutResize();
}
function PhilosophyCtrl($scope){
  window.scrollTo(0,0);
  layoutResize();
}
function ContactCtrl($scope){
  window.scrollTo(0,0);
  layoutResize();
  hoverEffect("#contact .contactInfo .grid-half:last-child .panel","p");
  $scope.moveDown = function(){
      $("html, body").animate({scrollTop:$(".contactInfo").offset().top-80}, '500', 'swing');
  }
}
function ServicesCtrl($scope){
  window.scrollTo(0,0);
  layoutResize();
  $scope.a=$scope.b=$scope.c=$scope.d=false;
  $scope.aa=$scope.ab=$scope.ac=false;
  $scope.ba=$scope.bb=$scope.bc=false;
  $scope.ca=$scope.cb=$scope.cc=false;
  hoverEffect("#services .grid-third .panel:first-child", "p");
  $("#services .grid-third .panel:first-child").hover(
    function(){
      $(this).find("h1").css("top","47%");
    },
    function(){
      $(this).find("h1").css("top","50%");
    }
  );
  $(".price").click(function(){
    if ($(this).hasClass("active")){
      $(".price").removeClass("active");
    }
    else{
      $(".price").removeClass("active");
      $(this).addClass("active");
    }
    
  })
  $scope.showDetails = function(session){
    if($("body").scrollTop() > $("#consultation").offset().top-80){
      $("html body").animate({scrollTop:$("#consultation").offset().top-80}, '500', 'swing');
    }
    if ($scope.a == true){
      if (session == 'a'){
        $scope.aa=!$scope.aa;$scope.ab=false;$scope.ac=false;$scope.ad=true;
      }
      else if (session == 'b'){
        $scope.ab=!$scope.ab;$scope.aa=false;$scope.ac=false;$scope.ad=true;
      }
      else if (session == 'c'){
        $scope.ac=!$scope.ac;$scope.aa=false;$scope.ab=false;$scope.ad=true;
      }
      if ($scope.aa==false && $scope.ab==false && $scope.ac==false){
        $scope.ad=false;
      }
    }
    else if($scope.b == true){
      if (session == 'a'){
        $scope.ba=!$scope.ba;$scope.bb=false;$scope.bc=false;$scope.bd=true;
      }
      else if (session == 'b'){
        $scope.bb=!$scope.bb;$scope.ba=false;$scope.bc=false;$scope.bd=true;
      }
      else if (session == 'c'){
        $scope.bc=!$scope.bc;$scope.ba=false;$scope.bb=false;$scope.bd=true;
      }
      if ($scope.ba==false && $scope.bb==false && $scope.bc==false){
        $scope.bd=false;
      }
    }
    else if($scope.c == true){
      if (session == 'a'){
        $scope.ca=!$scope.ca;$scope.cb=false;$scope.cc=false;$scope.cd=true;
      }
      else if (session == 'b'){
        $scope.cb=!$scope.cb;$scope.ca=false;$scope.cc=false;$scope.cd=true;
      }
      else if (session == 'c'){
        $scope.cc=!$scope.cc;$scope.ca=false;$scope.cb=false;$scope.cd=true;
      }
      if ($scope.ca==false && $scope.cb==false && $scope.cc==false){
        $scope.cd=false;
      }
    }
  }
  $scope.showProgram = function(program){
    if($("body").scrollTop() > $("#consultation").offset().top-80){
      $("html body").animate({scrollTop:$("#consultation").offset().top-80}, '500', 'swing');
    }
    $(".price").removeClass("active");
    $scope.aa=$scope.ab=$scope.ac=$scope.ad=false;
    $scope.ba=$scope.bb=$scope.bc=$scope.bd=false;
    $scope.ca=$scope.cb=$scope.cc=$scope.cd=false;
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
function VideosCtrl($scope,$http){
  window.scrollTo(0,0);
  layoutResize();
  $http.get('api/videos')
    .success(function(data, status, headers, config){
        $scope.channel = data.channel;
        $scope.videos = data.videos;
        console.log(data);
      });

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
  $scope.hoverEffect = function(){
    hoverEffect(".panelContainer", "p");
    $("#video .grid-half .panelContainer").hover(
      function(){
        $(this).find(".viewButton").css("top","47%");
      },
      function(){
        $(this).find(".viewButton").css("top","50%");
      }
    );
    $("#video .viewButton").hover(function(){
      $(this).find("path").css("fill","#1BA39C");
      $(this).find("polygon").css("stroke","#1BA39C")
    },function(){
      $(this).find("path").css("fill","#ffffff");
      $(this).find("polygon").css("stroke","#ffffff")
    });
  }
}
