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
      $scope.names.push({'name':$scope.name});
      $scope.name = '';
       };*/
    //" '$scope' is used for hash declaration of the main function in model"-->denotes the injector
        $scope.EmpList = [{Id:1, Salary: 200, Name: "muthu"},{Id:2, Salary: 300, Name: "vel"}];
        $scope.EmpModel = {  
              Id: $scope.EmpList.length+1 ,  
              Salary: null,  
              Name: '',  
            };  
           // $scope.EmpList ={ Id: 1, Salary: 200, Name: "Employee"};
           // $scope.EmpList = [{Id:0+1, Salary: 200, Name: "muthu"}];  
            $scope.AddData = function () {  
               /* var _emp = {  
                    Id: $scope.EmpList.length + 1,  
                    Name: $scope.EmpModel.Name,  
                    Salary: $scope.EmpModel.Salary 
                };*/  
         $scope.EmpList.push($scope.EmpModel);

                 //$scope.EmpModel = null;//it is used to dis appear the value that you have entered
                 //this emp model affect the bind data function
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
 

