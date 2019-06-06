(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'Principal', '$state', '$rootScope']

    function MainController($scope, Principal, $state, $rootScope) {
        var vm = this;


        $scope.function1 = function() {
            $state.go('main');
        }

        $scope.profile = function() {
            $state.go('profile');
        }

        //vai para a pagina home para efetuar login
        $scope.logout = function() {
            $state.go('home');
        }

        $scope.premium = function() {
            $state.go('premium');
        }

        $scope.addcoin = function() {
            $state.go('addcoin');
        }

        $scope.bet = function() {
            $state.go('aposta');
        }

    }
})();