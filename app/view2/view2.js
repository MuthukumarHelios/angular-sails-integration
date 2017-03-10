'use strict';
console.log("view2");

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    //controller: 'View1Ctrl'
  });
}])
  .controller('View2Ctrl', ['$scope', function($scope) {    
    //" '$scope' is used for hash declaration of the main function in model"-->denotes the injector
        $scope.EmpList = [{Id:1, Salary: 200, Name: "muthu"},{Id:2, Salary: 300, Name: "vel"}];
        $scope.EmpModel = {  
              Id: $scope.EmpList.length+1 ,  
              Salary: null,  
              Name: '',  
            };  
            $scope.AddData = function () {  
                 $scope.EmpList.push($scope.EmpModel);
            }  
            $scope.DeleteData = function (emp) {  
                console.log(emp);
                var _index = $scope.EmpList.indexOf(emp);  
                $scope.EmpList.splice(_index, 1);  
            }   
            $scope.BindSelectedData = function (emp) { 
              console.log("bind data"); 
               console.log(emp);
                $scope.EmpModel.Id = emp.Id;  
                $scope.EmpModel.Name = emp.Name;  
                $scope.EmpModel.Salary = emp.Salary;  
            }    
            $scope.UpdateData =  function () {
              console.log("update action")  
                $.grep($scope.EmpList, function (e) {  
                  console.log("update")
                    if (e.Id == $scope.EmpModel.Id) {  
                        e.Name = $scope.EmpModel.Name;  
                        e.Salary = $scope.EmpModel.Salary;  
                    }  
                });                 
            }              
        }]);   
 

