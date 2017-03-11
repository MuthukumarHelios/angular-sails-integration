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
         .otherwise({redirectTo: '/view1'})
//}])
// .run(['$rootscope', '$location' function($rootscope, $location){
//    $rootscope.$on("$routeChange" , function(event, next, current){
//     if($rootscope.lenght < 0 ){
//       if(next.templateUrl == "view1/view1.html"){
//         //login
//       }else{
//         $location.path("/view1");
//       }
//     }
//    })
}]);
