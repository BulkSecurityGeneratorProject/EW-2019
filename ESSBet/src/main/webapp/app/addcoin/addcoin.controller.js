(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('AddcoinController', AddcoinController);

    AddcoinController.$inject = ['$scope', 'Principal', '$state', '$rootScope']

    function AddcoinController($scope, Principal, $state, $rootScope) {
        var vm = this;

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
