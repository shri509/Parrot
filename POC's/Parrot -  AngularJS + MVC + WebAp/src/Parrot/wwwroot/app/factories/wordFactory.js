(function () {
    'use strict';

    var serviceId = 'wordFactory';

    angular.module('ParrotApp').factory(serviceId,
        ['$http', wordFactory]);

    function wordFactory($http) {

        function getRelatedWords() {
            return $http.get('/api/word/getrelatedwords');
        }

        var service = {
            getRelatedWords: getRelatedWords
        };

        return service;
    }
})();
