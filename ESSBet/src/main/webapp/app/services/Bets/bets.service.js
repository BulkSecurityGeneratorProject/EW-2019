(function () {
    'use strict';

    angular.
        module('essBettingHouse').
        factory('BetsService', BetsService);

    BetsService.$inject = ['$resource', '$http', '$q'];

    function BetsService($resource, $http, $q) {
        var idEvento = "";
        var oddEmpate = "";


        var service = {
            setIdEvento : setIdEvento,
            getIdEvento: getIdEvento,
            setOddEvento : setOddEvento,
            getOddEvento: getOddEvento,
            participantsEvent : participantsEvent,
            newBet : newBet,
            newBetTie : newBetTie,
            closedBets : closedBets,
            openBets: openBets,
            deleteBetsFromUser : deleteBetsFromUser,
            openBetsAndRecentlyClosed :  openBetsAndRecentlyClosed,
            betsHistoric : betsHistoric
        };

        return service;


        function setIdEvento(id) {
            idEvento = id;
        }

        function getOddEvento(){
            return oddEmpate;
        }

        function setOddEvento(odd) {
            oddEmpate = odd;
        }

        function getIdEvento(){
            return idEvento;
        }
        
        function participantsEvent(idEvent) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/participantes/evento/' + idEvent)
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };
    
        function newBet(idUser,idEvent,idParticipant,amount) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8083/api/apostas/novaAposta/' + idUser + '/' + idEvent + '/' + idParticipant + '/' + amount)
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function newBetTie(idUser,idEvent,amount) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8083/api/apostas/novaApostaEmpate/' + idUser + '/' + idEvent + '/' + amount)
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function openBets() {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8083/api/apostas/todasAbertas')
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function closedBets() {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8083/api/apostas/todasFechadas')
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function deleteBetsFromUser(idUser) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8083/api/apostas/apagaApostas/utilizador/' + idUser)
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function deleteBetsFromUser(idUser) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8083/api/apostas/apagaApostas/utilizador/' + idUser)
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function openBetsAndRecentlyClosed(idUser) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8083/api/apostas/apostasAbertas/' + idUser)
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function betsHistoric(idUser) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8083/api/apostas/historico/' + idUser)
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };
    }


})();
