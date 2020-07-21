// var myApp = angular.module("myModule", []);

// myApp.controller('myController1',  function($scope){
//     $scope.message = "AngularJS from controller 1";
// })


var app = angular
                .module("myModule", [])
                .controller("myController1", function($scope){
                    // var persons = [
                    //     {firstName:"John", last:"Wick", city:"NJ"},
                    //     {firstName:"John", last:"Wick", city:"NJ"},
                    //     {firstName:"John", last:"Wick", city:"NJ"},
                    //     {firstName:"John", last:"Wick", city:"NJ"}
                    // ];
                    // $scope.persons = persons;

                     var technologies = [
                        {name:"Angular", likes:0, dislikes:0},
                        {name:"React", likes:0, dislikes:0},
                        {name:"Vue", likes:0, dislikes:0},
                        {name:"C#", likes:0, dislikes:0},
                        {name:"Java", likes:0, dislikes:0},
                    ];
                    $scope.technologies = technologies;

                    $scope.incrementLikes = function(technology){
                        technology.likes++
                    }

                    
                    $scope.incrementDislikes = function(technology){
                        technology.dislikes++
                    }
                })

