(function () {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('RegistoController', RegistoController);

    RegistoController.$inject = ['$scope', 'Principal', '$state', '$rootScope', 'UserService']

    function RegistoController($scope, Principal, $state, $rootScope, UserService) {
        var vm = this;

        $scope.emailExistsError = "";
        

        //vai para a pagina home para efetuar login
        $scope.regist = function (email, nome, password) {
            var dataUser = UserService.registUser(nome, password, email, 0);
            var resUserState = dataUser.$$state.value;
            dataUser.then(function (resUserState) {
                console.log(resUserState);
                console.log(resUserState.email);
                if (resUserState.email === null) {
                    $scope.emailExistsError = "Ups! This email already has an account!";
                    $state.go('registo');
                } else
                    $state.go('home');
            });


        }

        //volta para a pagina home
        $scope.function2 = function () {
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