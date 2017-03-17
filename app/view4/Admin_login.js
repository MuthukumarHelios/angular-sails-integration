console.log("view4.js");
 'use strict';
 angular.module('myApp.admin_login', ['ngRoute'])

 .config(['$routeProvider', function ($routeProvider) {
     $routeProvider.when('/view4', {
     templateUrl: 'view4/view4.html',
     controller: 'login'
   });
}])
 .controller('login',  ['$scope' , '$location', '$window', function($scope, $location, $window){
     console.log("login controller called");


       $scope.valid = function (){
            $scope.admin = {name     : 'admin',  //$scope.admin is used to call from model
                             password : 'admin',
                            }

           ;
                console.log($scope.admin.name);
                console.log($scope.admin.password);
          if($scope.admin.name === $scope.name && $scope.admin.password === $scope.password){
                     console.log("valid");
                     console.log($window);
                     $window.location.href = '/index.html#!/view1';
                    //it is used to navigate through next page
                  }
                else{
                 window.alert("not an valid credentials");
                 console.log("not valid")
                 }
    };
 }])
