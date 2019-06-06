//adiciona a simulaçao das deliveries
(function() {
    'use strict';

    angular.
    module('essBettingHouse').
    factory('AddBacklogService', AddBacklogService);

    AddBacklogService.$inject = ['$resource', '$http', '$q'];

    function AddBacklogService($resource, $http, $q) {

        var service = {
            getData: getData
        };

        return service;

        function getData(mpPn, quantidade, fabrica, week, backlog, demands) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/adicionarBacklog/' + mpPn + '/' + quantidade + '/' + fabrica + '/' + week + '/' + backlog + '/' + demands)
                .success(function(data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };
    }
})();