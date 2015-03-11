'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    })
    .when('/about',{
      templateUrl: 'partials/about',
      controller: 'AboutCtrl'
    })
    .when('/philosophy', {
      templateUrl: 'partials/philosophy',
      controller: 'PhilosophyCtrl'
    })
    .when('/services',{
      templateUrl: 'partials/services',
      controller: 'ServicesCtrl'
    })
    .when('/videos', {
      templateUrl: 'partials/videos',
      controller: 'VideosCtrl'
    })
    .when('/clients',{
      templateUrl: 'partials/clients',
      controller: 'ClientsCtrl'
    })
    .when('/contact',{
      templateUrl: 'partials/contact',
      controller: 'ContactCtrl'
    })
    .when('/messages',{
      templateUrl: 'partials/messages',
      controller: 'MessagesCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
