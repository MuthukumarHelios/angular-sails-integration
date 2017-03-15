'use strict';

console.log("app.js")
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.version',

]).

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
   $locationProvider.hashPrefix('!');
  console.log("config inside app.js");
  $routeProvider
         .when("/view1",{
         templateUrl: "view1/view1.html",
         controller: "View1Ctrl"//used to access the controller from view1controller only
          //templateUrl: "view2/view2.html"
         })

         .when("/view2",{
         templateUrl: "view2/view2.html",
         controller: "View2Ctrl"
         })

        .when("/view3",{
          templateUrl: "view3/view3.html",
          controller: "View2Ctrl"
          })
          .when("/view4",{
          templateUrl: "view4/view4.html",
          controller: "login"
          })
          .when("/view5",{
            templateUrl: "view5/view5.html",
            controller: "login"
          })
        
        
         .otherwise({redirectTo: '/view4'})
}]);

// .service("calcService",function(){
//      console.log("services");
//    var add = function (a) {
//      return a+a;
//    }
//    add(3);
// });
