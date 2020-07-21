//1.create a module

// var myApp = angular.module("myModule", []);

// var myController = function($scope){
//     $scope.message = "AngularJS";
//     $scope.id = 1234;

// }

// myApp.controller('myController', myController)


var myApp = angular.module("myModule", []);

myApp.controller('myController1',  function($scope){
    $scope.message = "AngularJS from controller 1";
})


myApp.controller('myController2',  function($scope){
    $scope.message = "AngularJS from controller 2";
})

myApp.controller('myController3',  function($scope){

    var employee = {
        firstName:"John",
        lastName:"Wick",
        city:"NJ",
        flag:'flag.jpg'
    }

    $scope.emp = employee;
})


//$rootScope





