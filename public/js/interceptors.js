'use strict';

/* Interceptors */

angular.module('myApp.intereptors', []).
  .config(function ($httpProvider){
  $httpProvider.interceptors.push(function ($q, $location){
    return {
      // request: function(config){
      //   console.log(config);
      //   return config;
      // }
      response:function(response){
        console.log(response);
        
        return response;
      },
      responseError:function(response){
        if(response.status === 401) $location.url('/login');
        return $q.reject(response);
      }
    }
  });
})
