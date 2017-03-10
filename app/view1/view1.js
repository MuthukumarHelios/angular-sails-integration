console.log("view1.js");
'use strict';
angular.module('myApp.view1', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/view1', {
     templateUrl: 'view1/view1.html',
     controller: 'View1Ctrl'
   });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    console.log("controller view1")
       //'$scope' is used for the hash and array declaration 
       $scope.Manager_List = [{Id:1, Salary: 200, Name: "Manager1"},{Id:2, Salary: 300, Name: "Manager2"}];
        $scope.Manager_Model = {  
              Id: $scope.Manager_List.length+1 ,  
              Salary: null,  
              Name: '',  
            };  
            $scope.check = function(){
                console.log($scope.Manager_List);
            }
            $scope.AddData = function () {  
                $scope.Manager_List.push($scope.Manager_Model);                      
          }    
            $scope.DeleteData = function (manager) {  
                console.log(manager);
                var _index = $scope.Manager_List.indexOf(manager);  
                $scope.Manager_List.splice(_index, 1);  
            }  
  
            $scope.BindSelectedData = function (man) { 
              console.log("bind data"); 
              console.log(man);
                $scope.Manager_Model.Id     =  man.Id;  
                $scope.Manager_Model.Name   =  man.Name;  
                $scope.Manager_Model.Salary =  man.Salary;  
            }  
  
            $scope.UpdateData =  function () {
              //console.log("update action")  
                $.grep($scope.Manager_List, function (e) {  
                  console.log(e)
                    if (e.Id == $scope.Manager_Model.Id) {  
                        console.log("upadtion finish")
                        e.Name = $scope.Manager_Model.Name;  
                        e.Salary = $scope.Manager_Model.Salary;  
                    }  
                });  
                
            }            
        }]);   