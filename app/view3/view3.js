console.log("view 3");

'use strict';

angular.module('myApp.view3', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/view3', {
     templateUrl: 'view3/view3.html',
     controller: 'view3Ctrl'
   });
}])

.controller('view3Ctrl', ['$scope', function($scope) {
    $scope.EmpList = [{Id:1, Salary: 200, Name: "muthu"},{Id:2, Salary: 300, Name: "vel"}];
}


])