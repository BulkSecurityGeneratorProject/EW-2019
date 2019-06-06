(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('RegistoController', RegistoController);

    RegistoController.$inject = ['$scope', 'Principal', '$state', '$rootScope']

    function RegistoController($scope, Principal, $state, $rootScope) {
        var vm = this;

        //vai para a pagina home para efetuar login
        $scope.function1 = function() {
            $state.go('home');
        }

        //volta para a pagina home
        $scope.function2 = function() {
            $state.go('home');
        }








        /*Verifica se o PartNumber existe
        $scope.function1 = function(partNumber) {
            var fabrica = '';
            var data = StockService.getData(partNumber, fabrica);
            var resState = data.$$state.value;

            data.then(function(resState) {
                $scope.input.length = resState.length;
                if ($scope.input.length == 0) {
                    $scope.input.invalid = "That 10 digit part number is invalid or does not exist!";
                } else {
                    $state.go('stock');
                }
            });




        }

        //Guarda o PartNumber
        $scope.savePartNumber = function(partNumber) {
            InfoService.setPartNumber(partNumber);
            localStorage.setItem("partNumber", partNumber);
        }*/
    }
})();