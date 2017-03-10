'use strict';
console.log("app.js")
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
   $locationProvider.hashPrefix('!');
  //  state('view1',{
  //         url:'/view1',
  //         templateUrl: 'view1.html'
  //  })
                                
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
