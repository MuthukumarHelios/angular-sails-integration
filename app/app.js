'use strict';

console.log("app.js")
// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute',
  'myApp.admin',
  'myApp.manager',
  'myApp.employee',
  'myApp.admin_login',
  'myApp.manager_login',
  'myApp.version',

]).

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
   $locationProvider.hashPrefix('!');
  console.log("config inside app.js");
  $routeProvider
         .when("/admin",{
         templateUrl: "admin/admin.html",
         controller: "View1Ctrl"//used to access the controller from view1controller only
          //templateUrl: "view2/view2.html"
         })

         .when("/manager",{
         templateUrl: "manager/manager.html",
         controller: "View2Ctrl"
         })

        .when("/employee",{
          templateUrl: "employee/employee.html",
          controller: "View2Ctrl"
          })
          .when("/Admin_login",{
          templateUrl: "Admin_login/admin_login.html",
          controller: "login"
          })
          .when("/Manager_login",{
            templateUrl: "Manager_login/manager_login.html",
            controller: "login"
          })


         .otherwise({redirectTo: '/admin'})
}]);
