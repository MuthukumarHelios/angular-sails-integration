'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

  .controller('View2Ctrl', ['$scope', function($scope) {
    
    /* $scope.name = '';
       $scope.names = [{name:"Chris"}, {name:"Calvin"}];
  
      $scope.addName = function() {
      $scope.names.push( {'name':$scope.name} );
      $scope.name = '';
       };*/
       //"$scope is used for hash declaration of the main function in model"-->denotes the injector
            $scope.EmpModel = {  
                Id: null,  
                Salary: null,  
                Name: '',  
            };  
  
            $scope.EmpList = [];  
            $scope.AddData = function () {  
                var _emp = {  
                    Id: $scope.EmpList.length + 1,  
                    Name: $scope.EmpModel.Name,  
                    Salary: $scope.EmpModel.Salary  
                };  
                $scope.EmpList.push(_emp);  
                 //$scope.EmpModel = null;//it is used to dis appear the value that you have entered
                 //this emp model affect the bind data function
            }  
  
            $scope.DeleteData = function (emp) {  
              
                var _index = $scope.EmpList.indexOf(emp);  
                $scope.EmpList.splice(_index, 1);  
            }  
  
            $scope.BindSelectedData = function (empl) { 
              console.log("bind data"); 
               console.log(empl);
                $scope.EmpModel.Id = empl.Id;  
                $scope.EmpModel.Name = empl.Name;  
                $scope.EmpModel.Salary = empl.Salary;  
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
 

