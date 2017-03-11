console.log("view1.js");
'use strict';
angular.module('myApp.view1', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/view1', {
     templateUrl: 'view1/view1.html',
     controller: 'View1Ctrl'
   });
}])

.controller('View1Ctrl', ['$scope','$http', function($scope, $http) {
    console.log("controller view1")
       //'$scope' is used for the hash and array declaration 
       $scope.Manager_List = [{Id:1, Salary: 200, Name: "Manager1"},{Id:2, Salary: 300, Name: "Manager2"}];
        $scope.Manager_Model = {  
              Id: null ,  
              Salary: null,  
              Name: '',  
            };  
            $scope.check = function(){
                console.log($scope.Manager_List);
            }
            $scope.AddData = function () {  
               
                    var _manager = {  
                      Id: $scope.Manager_List.length +1 ,  
                      Salary:$scope.Manager_List.Salary,  
                      Name: $scope.Manager_List.Name,  
                    };      
              $scope.Manager_List.push(_manager);                                   
             }    
            
            $scope.DeleteData = function (manager) {  
                console.log(manager);
                var _index = $scope.Manager_List.indexOf(manager);  
                $scope.Manager_List.splice(_index, 1);  
            }  
  
            $scope.BindSelectedData = function (man) { 
              console.log("bind data"); 
              console.log(man);
                $scope.Manager_List.Id     =  man.Id;  
                $scope.Manager_List.Name   =  man.Name;  
                $scope.Manager_List.Salary =  man.Salary;  
            }  
  
            $scope.UpdateData =  function () {
              //console.log("update action")  
                $.grep($scope.Manager_List, function (e) {  
                  console.log(e)
                    if (e.Id == $scope.Manager_List.Id) {  
                        console.log("upadtion finish")
                        e.Name = $scope.Manager_List.Name;  
                        e.Salary = $scope.Manager_List.Salary;  
                    }  
                });  
                
            }            
            $http.get("index.html#!/view3.js").then(function(response){
              console.log("http called")
              $scope.myWelcome = response.data.records;
              
            });                   

        }]);   