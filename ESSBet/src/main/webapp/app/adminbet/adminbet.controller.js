(function () {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('AdminbetController', AdminbetController);

    AdminbetController.$inject = ['$scope', 'Principal', '$state', '$rootScope', 'BetsService']

    function AdminbetController($scope, Principal, $state, $rootScope, BetsService) {
        var vm = this;

        $scope.ehAdmin = false;
        if (localStorage.getItem("userAdmin") === "true")
            $scope.ehAdmin = true;

        $scope.betsOpenInfo;

        $scope.betsClosedInfo;

        var dataBetsOpen = BetsService.openBets();
        var resBetsOpenState = dataBetsOpen.$$state.value;
        dataBetsOpen.then(function (resBetsOpenState) {
            console.log(resBetsOpenState);

            $scope.betsOpenInfo = JSON.parse(JSON.stringify(resBetsOpenState));
        });

        
        var dataBetsClosed = BetsService.closedBets();
        var resBetsClosedState = dataBetsClosed.$$state.value;
        dataBetsClosed.then(function (resBetsClosedState) {
            console.log(resBetsClosedState);

            $scope.betsClosedInfo = JSON.parse(JSON.stringify(resBetsClosedState));
        });


        $scope.main = function () {
            $state.go('main');
        }


        $scope.profile = function () {
            $state.go('profile');
        }


        $scope.logout = function () {
            $state.go('home');
        }

        $scope.premium = function () {
            $state.go('premium');
        }

        $scope.addcoin = function () {
            $state.go('addcoin');
        }

        $scope.users = function () {
            $state.go('adminuser');
        }

        $scope.events = function () {
            $state.go('adminevent');
        }

        $scope.bets = function () {
            $state.go('adminbet');
        }
    }

})();