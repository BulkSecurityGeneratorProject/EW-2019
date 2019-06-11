(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('AdminaddeventController', AdminaddeventController);

    AdminaddeventController.$inject = ['$scope', 'Principal', '$state', '$rootScope']

    function AdminaddeventController($scope, Principal, $state, $rootScope) {
        var vm = this;

        $scope.main = function() {
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

        $scope.users = function() {
            $state.go('adminuser');
        }

        $scope.events = function() {
            $state.go('adminevent');
        }

        $scope.bets = function() {
            $state.go('adminbet');
        }

        $scope.betsHistoric = function() {
            $state.go('betsHistoric');
        }

        $scope.betsRegisted = function() {
            $state.go('betsRegisted');
        }

    }

})();