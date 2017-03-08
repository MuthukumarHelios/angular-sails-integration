'use strict';

angular.module('myApp.view1', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/view1', {
     templateUrl: 'view1/view1.html',
     controller: 'View1Ctrl'
   });
}])

.controller('View1Ctrl', ['$scope', function ($scope) {
//only ment for manager controller
   $scope.Manager_Model = {  
                Id: null,  
                Salary: null,  
                Name: '',  
            };  
  
            $scope.Manager_List = [];  
            $scope.AddData = function () {  
                var _manager = {  
                    Id: $scope.Manager_List.length + 1,  
                    Name: $scope.Manager_Model.Name,  
                    Salary: $scope.Manager_Model.Salary  
                };  
                $scope.Manager_List.push(_manager);  
                 //$scope.ManagerModel = null;//it is used to dis appear the value that you have entered
                 //this  model affect the bind data function
            }  
  
            $scope.DeleteData = function (manager) {  
                console.log(manager)
                var _index = $scope.Manager_List.indexOf(manager);  
                $scope.Manager_List.splice(_index, 1);  
            }  
  
            $scope.BindSelectedData = function (manager) { 
              console.log("bind data"); 
              console.log(manager);
                $scope.Manager_Model.Id     =   manager.Id;  
                $scope.Manager_Model.Name   =   manager.Name;  
                $scope.Manager_Model.Salary =   manager.Salary;  
            }  
  
            $scope.UpdateData =  function () {
              //console.log("update action")  
                $.grep($scope.Manager_List, function (e) {  
                  console.log("update")
                    if (e.Id == $scope.manager_Model.Id) {  
                        e.Name = $scope.manager_Model.Name;  
                        e.Salary = $scope.manager_Model.Salary;  
                    }  
                });  
                
            }            
        }]);   