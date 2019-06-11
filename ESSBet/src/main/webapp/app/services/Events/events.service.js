(function () {
    'use strict';

    angular.
        module('essBettingHouse').
        factory('EventsService', EventsService);

    EventsService.$inject = ['$resource', '$http', '$q'];

    function EventsService($resource, $http, $q) {
        var userRegisted = [];


        var service = {
            allEvents: allEvents,
            openEvents: openEvents,
            privateEvents: privateEvents,
            publicEvents: publicEvents,
            closedEvents: closedEvents,
            registParticipant: registParticipant,
            registNewEv: registNewEv

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


        function closedEvents() {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/eventos/fechados')
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function registNewEv(timeB, timeE, nParticipants, teamEv, oddVen, sportEv, publicEv) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/eventos/adicionarEvento/' + timeB + '/' + timeE + '/' + 
            nParticipants + '/aberto/ /' + teamEv + '/' + oddVen + '/' + sportEv + '/' + publicEv)
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function registParticipant(name, team, country, odd, event_id) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/participantes/registar/' + event_id + '/' + name + '/' +
                odd + '/' + team + '/' + country)
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
            
        };


    }


})();
