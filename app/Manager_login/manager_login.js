console.log("view5.js ==>manager_login");
 angular.module('myApp.manager_login', ['ngRoute'])

 .config(['$routeProvider', function ($routeProvider) {
     $routeProvider.when('/Manager_login', {
     templateUrl: 'Manager_login/manager_login.html',
     controller: 'loginManager'
   });
}])
 .controller('loginManager',  ['$scope' , '$location', '$window', function($scope, $location, $window){
     console.log("login_manager controller called");

 				$scope.manager = [
           {name: "manager1" , password: 'manager1'},
           {name: "manager2", password: 'manager2'}
           ];

       $scope.valid_manager = function (){
           // $scope.manager = [
           // {name: "manager1" , password: 'manager1'},
           // {name: "manager2", password: 'manager2'}
           // ];
                console.log($scope.manager[0].name);
                console.log($scope.manager.length);
       var flag = 0;
           for( var i = 0; i < $scope.manager.length; i++){

                if($scope.manager[i].name == $scope.name &&
                	$scope.manager[i].password == $scope.password)
                {
                     console.log("valid");
                     $window.location.href = '/index.html#!/view2';
                      //it is used to navigate through next page
                     flag++;
                  }
               }
           if(!flag){
             window.alert("not valid credential");
           }

    };
 }])
