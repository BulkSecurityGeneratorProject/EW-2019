//vai buscar o stock por fabrica
(function() {
    'use strict';

    angular.
    module('essBettingHouse').
    factory('StockService', StockService);

    StockService.$inject = ['$resource', '$http', '$q'];

    function StockService($resource, $http, $q) {
        var service = {
            getData: getData
        };

        return service;

        function getData(mpPn, fabrica) {

            if (fabrica == undefined || fabrica == "ALL") {
                var temp = {};
                var result = $q.defer();
                $http.get('http://localhost:8081/api/stock-10-ds/mp/' + mpPn + '/ALL')
                    .success(function(data) {
                        temp = data;
                        result.resolve(data);
                    });
                return result.promise;
            } else {
                var temp = {};
                var result = $q.defer();
                $http.get('http://localhost:8081/api/stock-10-ds/mp/' + mpPn + '/' + fabrica)
                    .success(function(data) {
                        temp = data;
                        result.resolve(data);
                    });
                return result.promise;
            }
        };
    }
})();