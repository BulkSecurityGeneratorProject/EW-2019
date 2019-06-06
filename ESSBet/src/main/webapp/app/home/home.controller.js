(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', '$state', '$rootScope']

    function HomeController($scope, Principal, $state, $rootScope) {
        var vm = this;

        $scope.function1 = function() {
            $state.go('main');
        }

        $scope.function2 = function() {
            $state.go('registo');
        }

    }

})();