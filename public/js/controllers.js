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
function ServicesCtrl($scope,$http){
  window.scrollTo(0,0);
  layoutResize();
  $("#services2 .grid-third .panel:first-child").hover(
    function(){
      $(this).find("h1").css("top","47%");
    },
    function(){
      $(this).find("h1").css("top","50%");
    }
  );

  $http.get('api/services')
    .success(function(data, status, headers, config){
      $scope.services = data.services;
      console.log(data.services);
    });
  $scope.showDetails = function(session){
    // if($("body").scrollTop() < $(".package").offset().top-80){
      $("html body").animate({scrollTop:$(".package").offset().top-80}, '500', 'swing');
    // }
    $scope.services.forEach(function(category, i){
      category.packages.forEach(function(pack, i){
        if (i == session) pack.state = true;
        else pack.state = false;
      });
    });
  }
  $scope.showProgram = function(program){
    $(".serviceInner").css({height:"100%"});
    if($("body").scrollTop() < $(".package").offset().top-80){
      $("html body").animate({scrollTop:$(".serviceInner").offset().top-80}, '500', 'swing');
    }
    $(".price").removeClass("active");
    $(".price").click(function(){
      $(".price").removeClass("active");
      $(this).addClass("active");
    })
    $scope.services.forEach(function(category, i){
      if(i==program) category.state = true;
      else category.state = false;
      category.packages.forEach(function(pack, i){
        pack.state = false;
      });
    })
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
