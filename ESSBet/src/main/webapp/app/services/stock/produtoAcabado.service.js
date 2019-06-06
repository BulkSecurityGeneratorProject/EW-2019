//dados para a tabela produtoAcabado.html
(function() {
    'use strict';

    angular.
    module('essBettingHouse').
    factory('ProdutoAcabadoService', ProdutoAcabadoService);

    ProdutoAcabadoService.$inject = ['$resource', '$http', '$q'];

    function ProdutoAcabadoService($resource, $http, $q) {
        var service = {
            getData: getData
        };

        return service;

        function getData(mpPn, fabrica) {

            if (fabrica == undefined) {
                var temp = {};
                var result = $q.defer();
                $http.get('http://localhost:8081/api/produto-acabados/mp/' + mpPn + '/ALL')
                    .success(function(data) {
                        temp = data;
                        result.resolve(data);
                    });
                return result.promise;
            } else {
                var temp = {};
                var result = $q.defer();
                $http.get('http://localhost:8081/api/produto-acabados/mp/' + mpPn + '/' + fabrica)
                    .success(function(data) {
                        temp = data;
                        result.resolve(data);
                    });
                return result.promise;
            }
        };
    }
})();