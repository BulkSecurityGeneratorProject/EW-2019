(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('AdmineventController', AdmineventController);

    AdmineventController.$inject = ['$scope', 'Principal', '$state', '$rootScope', 'UserService']

    function AdmineventController($scope, Principal, $state, $rootScope, UserService) {
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
    }

})();