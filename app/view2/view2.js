'use strict';
console.log("view2.js");

angular.module('myApp.view2', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view2', {
//     templateUrl: 'view2/view2.html',
//     controller: 'View2Ctrl',
//     data: {
//       authorisation: true,
//       redirectTo: 'view3/view3.html'
//     }
//     //controller: 'View1Ctrl'
//   });
// }])

.controller('View2Ctrl', ['$scope', function($scope) {
    //" '$scope' is used for hash declaration of the main function in model"-->denotes the injector
        $scope.EmpList = [{Id:1, Salary: 200, Name: "muthu"},
                                              {Id:2, Salary: 300, Name: "vel"}];

            $scope.AddData = function () {
               var _employee = {
                  Id: $scope.EmpList.length+1,
                  Salary: $scope.EmpList.Salary,
                  Name: $scope.EmpList.Name,
                }

             $scope.EmpList.push(_employee);
               //$scope.Authorisation.go('private');
            }
            $scope.DeleteData = function (emp) {
                console.log(emp);
                var _index = $scope.EmpList.indexOf(emp);
                $scope.EmpList.splice(_index, 1);
            }
            $scope.BindSelectedData = function (Emp) {
              console.log("bind data");

               console.log(Emp);
                $scope.EmpList.Id = Emp.Id;
                $scope.EmpList.Name = Emp.Name;
                $scope.EmpList.Salary = Emp.Salary;

            }
             $scope.UpdateData =  function () {
                 console.log("update action")
                  $.grep($scope.EmpList, function (e) {
                    console.log(e)
               if (e.Id == $scope.EmpList.Id) {
                        e.Name = $scope.EmpList.Name;
                        e.Salary = $scope.EmpList.Salary;
                    }
                });
            }
        }]);
