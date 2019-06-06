(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'Principal', '$state', '$rootScope']

    function MainController($scope, Principal, $state, $rootScope) {
        var vm = this;

        //vai para a pagina home para efetuar login
        $scope.function1 = function() {
            $state.go('main');
        }


        $scope.profile = function() {
            $state.go('profile');
        }


        $scope.logout = function() {
            $state.go('home');
        }

        $scope.premium = function() {
            $state.go('premium');
        }

        $scope.addcoin = function() {
            $state.go('addcoin');
        }

    }
})();