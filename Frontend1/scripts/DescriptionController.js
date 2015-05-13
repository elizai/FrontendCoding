/**
 * Created by Calaretu fara cap on 12/05/2015.
 */
angular.module("hrApp").controller('DescriptionController', function($scope) {
    $scope.descriptionShow = true;
    $scope.toggleDescriptionShow = function toggleDescriptionShow() {
        if ($scope.descriptionShow == true) {
            $scope.descriptionShow = false;
        }
        else {
            $scope.descriptionShow = true
        }

    };
    console.log("descriptionController");
});