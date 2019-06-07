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
            newBetTie : newBetTie
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
    }


})();
