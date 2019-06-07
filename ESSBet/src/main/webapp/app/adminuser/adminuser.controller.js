(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('AdminuserController', AdminuserController);

    AdminuserController.$inject = ['$scope', 'Principal', '$state', '$rootScope', 'UserService']

    function AdminuserController($scope, Principal, $state, $rootScope, UserService) {
        var vm = this;


        $scope.logout = function() {
            $state.go('home');
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