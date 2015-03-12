'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  })
  .directive('showDuringResolve',function($rootScope){
  	return{
  		link: function(scope,element){
  			element.addClass('hide');
  			element.find('i').removeClass('fa fa-paw loading-icon');
  			var unregister = $rootScope.$on('$routeChangeStart',function(){
  				element.removeClass('hide');
  				element.find('i').addClass('fa fa-paw loading-icon');

  			});
  			scope.$on('$destroy',unregister);
  		}
  	};
  })
