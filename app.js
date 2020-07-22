var app = angular.module('app',[]);

app.controller('AppCtrl', function($scope, $q){

    //async
    function add(x,y){
        var q = $q.defer();
        setTimeout(function(){
            var result = x + y;
            if(result >= 0){
                q.resolve(x+y);
            }else{
                q.reject('Negative value: '+ result)
            }
            
        }, 100);
        return q.promise;
    }

    var startTime = Date.now()

    //promise chaining
    add(5,2)
        .then(function(result){
            return add(result, 10);
        })
        .then(function(result){
            return add(result, 1); //result + 1 //
        })
        // .then(function(result){
        //     return Array(result).join('*')
        // })
        .then(function(result){
            $scope.result = result;
           
        })
        .catch(function(failure){
            $scope.failure = failure
        })
        .finally(function(){
            $scope.elapsedTime = Date.now() - startTime
        });
    


    // add(5,2, function(result){
    //     add(result, 3, function(result){
    //        add(result, 1, function(result){
    //         $scope.result = result;
    //         $scope.elapsedTime = Date.now() - startTime
    //        }, function(error){ /** handle error */});
    //     }, function(error){ /** handle error */});
    // }, function(error){ /** handle error */});
})

