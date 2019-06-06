//limpar todas as simulaçoes das deliveries
(function() {
    'use strict';

    angular.
    module('essBettingHouse').
    factory('LimparTudoSimulacaoService', LimparTudoSimulacaoService);

    LimparTudoSimulacaoService.$inject = ['$resource', '$http', '$q'];

    function LimparTudoSimulacaoService($resource, $http, $q) {

        var service = {
            getData: getData
        };

        return service;

        function getData(mpPn, week, backlog, demands) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/cleanAllSimulation/' + mpPn + '/' + week + '/' + backlog + '/' + demands)
                .success(function(data) {
                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };
    }
})();