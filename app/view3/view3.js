console.log("view3")
//console.log("view1.js");
'use strict';
angular.module('myApp.view3', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/view3', {
     templateUrl: 'view3/view3.html',
     controller: 'View2Ctrl'
   });
}]);