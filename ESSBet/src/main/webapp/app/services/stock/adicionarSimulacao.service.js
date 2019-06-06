//adiciona a simulaçao das deliveries
(function() {
    'use strict';

    angular.
    module('essBettingHouse').
    factory('AdicionarSimulacaoService', AdicionarSimulacaoService);

    AdicionarSimulacaoService.$inject = ['$resource', '$http', '$q'];

    function AdicionarSimulacaoService($resource, $http, $q) {

        var service = {
            getData: getData
        };

        return service;

        function getData(mpPn, quantidade, fabrica, dia, week, backlog, demands) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/adicionarStock/' + mpPn + '/' + quantidade + '/' + fabrica + '/' + dia + '/' + week + '/' + backlog + '/' + demands)
                .success(function(data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };
    }
})();