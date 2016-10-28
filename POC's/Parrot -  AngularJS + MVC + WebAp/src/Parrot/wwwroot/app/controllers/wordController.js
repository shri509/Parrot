(function () {
    'use strict';

    var controllerId = 'wordController';

    angular.module('ParrotApp').controller(controllerId,
        ['$scope', 'wordFactory', wordController]);

    function wordController($scope, wordFactory) {
        $scope.words = [];

        wordFactory.getRelatedWords().then(function successCallback(data) {
            debugger;
            $scope.words = data.data;
        }, function errorCallback(error) {
            // log errors
        });
    }
})();