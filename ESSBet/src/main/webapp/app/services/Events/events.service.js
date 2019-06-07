(function () {
    'use strict';

    angular.
        module('essBettingHouse').
        factory('EventsService', EventsService);

        EventsService.$inject = ['$resource', '$http', '$q'];

    function EventsService($resource, $http, $q) {
        var userRegisted = [];


        var service = {
            allEvents : allEvents,
            openEvents:  openEvents,
            privateEvents: privateEvents,
            publicEvents: publicEvents
        
        };

        return service;



        function allEvents() {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/eventos')
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function openEvents() {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/eventos/abertos')
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        
        function privateEvents() {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/eventos/privados')
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

    
        function publicEvents() {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/eventos/publicos')
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        
    }


})();
