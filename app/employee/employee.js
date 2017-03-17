console.log("view3.js==>employee")
//console.log("view1.js");
'use strict';
angular.module('myApp.employee', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/employee', {
     templateUrl: 'employee/employee.html',
     controller: 'View2Ctrl'
   });


}]);
