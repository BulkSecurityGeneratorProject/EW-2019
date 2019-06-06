//atualiza os dados das demands
(function() {
    'use strict';

    angular.
    module('essBettingHouse').
    factory('OrdemSimulacaoService', OrdemSimulacaoService);

    OrdemSimulacaoService.$inject = ['$resource', '$http', '$q'];


    //0 sem backlog, 1 com backlog
    //0 pedidos, 1 confirmados
    function OrdemSimulacaoService($resource, $http, $q) {

        var service = {
            getData: getData
        };

        return service;

        function getData(mpPn, week, backlog, typeDemand) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/tabelaCoverage/' + mpPn + '/' + week + '/' + backlog + '/' + typeDemand)
                .success(function(data) {
                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };
    }
})();