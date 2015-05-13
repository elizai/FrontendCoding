hrApp.controller('MathController', ['$scope', function($scope){
    
    $scope.calculate = function() {
        console.log("calculate");
        $scope.op1 = $scope.val1 + $scope.val2;
        $scope.op2 = $scope.val1 - $scope.val2;
        $scope.op3 = $scope.val1 * $scope.val2;
        $scope.op4 = $scope.val1 / $scope.val2;
//        TODO #8 calculate op1, op2, op3, op4

//        TODO #13 refactor your calculations using MathService

    }

}]);
