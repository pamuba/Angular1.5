var app = angular.module('app', []);
app.controller('emp',['$scope', function($scope){


    $scope.emps = [
        {empno:"101", ename:"John"},
        {empno:"102", ename:"Jill"},
        {empno:"103", ename:"Jim"},
        {empno:"104", ename:"Mary"},
    ];
    $scope.addEmp = function(){
        var newEmpNo = 100 + $scope.emps.length + 1;
        var newName = "ename"+newEmpNo;

        $scope.emps.push({empno:newEmpNo, ename:newName})
    }

    $scope.modify3rdEmp = function(){
        $scope.emps[2].ename = "Test";
    }

    $scope.$watch('emps', function(newValue, oldValue){
        console.log("No. of emplyees: "+ $scope.emps.length)
    }, true)

    // $scope.$watchCollection('emps', function(newValue, oldValue){
    //     console.log("No. of emplyees: "+ $scope.emps.length)
    // })


    // $scope.$watch('emps', function(newValue, oldValue){
    //     console.log("No. of emplyees: "+ $scope.emps.length)
    // })

    // $scope.o = {
    //     a:1,
    //     b:2,
    //     c:3
    // }

    // $scope.$watch("o", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.o.c = $scope.o.a * $scope.o.b
    //     }
    // }, true)

    // $scope.$watchGroup(['o.a', 'o.b'], function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.o.c = $scope.o.a * $scope.o.b
    //     }
    // })

    // $scope.a = 1;
    // $scope.b = 2;
    // $scope.c = 3;
    // $scope.d = 4;

    // $scope.updateC = function(){
    //     $scope.c = $scope.c * 4
    // }


    // $scope.$watchGroup(['a', 'b'], function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.c = $scope.a * $scope.b
    //     }
    // })


    // $scope.$watch("b", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.c = $scope.b * 4
    //     }
    // })

    // //manully watch
    // $scope.$watch("c", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         console.log("Updated C to "+ newValue)
    //     }
    // })
}])