(function() {
    'use strict';

    angular.
    module('essBettingHouse').
    factory('FabricasInfoService', FabricasInfoService);

    FabricasInfoService.$inject = ['$resource', '$http', '$q'];

    function FabricasInfoService($resource, $http, $q) {
        var fabricaSelecionada = [];


        var service = {
            getDataInfoFabricas: getDataInfoFabricas,
            setFabricaSelecionada: setFabricaSelecionada,
            getFabricaSelecionada: getFabricaSelecionada,
            getFabricas: getFabricas
        };

        return service;



        function getDataInfoFabricas(mpPn) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/stock-10-ds/mp/' + mpPn + '/Fabricas')
                .success(function(data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function setFabricaSelecionada(newFabricaSelecionada) {
            if (newFabricaSelecionada == undefined) {

                fabricaSelecionada = { fabrica: "ALL", nome_fabrica: "ALL", pais_fabrica: "ALL" };

            } else {

                fabricaSelecionada = JSON.parse(JSON.stringify(newFabricaSelecionada));

            }
        };

        function getFabricaSelecionada() {
            return fabricaSelecionada;
        };

        function getFabricas() {
            return fabricaSelecionada;
        };
    }


})();