'use strict';

/* Filters */

angular.module('myApp.filters', [])
	// .filter('interpolate', function (version) {
	// 	return function (text) {
	// 		return String(text).replace(/\%VERSION\%/mg, version);
	// 	};
	// })
	.filter('slice', function(){
	  	return function(arr,start,end){
	  		if (!arr){
	  			return;
	  		}
	  		return arr.slice(start,end);
	  	};
  });
