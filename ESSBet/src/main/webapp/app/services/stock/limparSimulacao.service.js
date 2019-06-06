//limpa as simulaçoes das deliveries
(function() {
    'use strict';

    angular.
    module('essBettingHouse').
    factory('LimparSimulacaoService', LimparSimulacaoService);

    LimparSimulacaoService.$inject = ['$resource', '$http', '$q'];

    function LimparSimulacaoService($resource, $http, $q) {
        var service = {
            getData: getData
        };

        return service;

        function getData(mpPn, fabrica, week, backlog, demands) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/cleanSimulation/' + mpPn + '/' + fabrica + '/' + week + '/' + backlog + '/' + demands)
                .success(function(data) {
                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };
    }
})();