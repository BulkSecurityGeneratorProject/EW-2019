//vai buscar as contas, as linhas da tabela coverage.html
(function() {
    'use strict';

    angular.
    module('essBettingHouse').
    factory('CoverageService', CoverageService);

    CoverageService.$inject = ['$resource', '$http', '$q'];

    function CoverageService($resource, $http, $q) {

        var service = {
            getData: getData
        };

        return service;

        function getData(mpPn, week, backlog, demands) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/tabelasCobertura/' + mpPn + '/' + week + '/' + backlog + '/' + demands)
                .success(function(data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };
    }
})();