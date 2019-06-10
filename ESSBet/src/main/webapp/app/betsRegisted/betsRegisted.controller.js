(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('BetsRegistedController', BetsRegistedController);

        BetsRegistedController.$inject = ['$scope', 'Principal', '$state', '$rootScope', 'BetsService', 'UserService']

    function BetsRegistedController($scope, Principal, $state, $rootScope, BetsService, UserService) {
        var vm = this;

        $scope.erroAmount = "";
        $scope.erroPlafond = "";

        $scope.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        

        $scope.ehAdmin = false;
        if (localStorage.getItem("userAdmin") === "true")
            $scope.ehAdmin = true;

        $scope.ehPremium = false;
        if (localStorage.getItem("userPremium") === "true" || localStorage.getItem("userAdmin") === "true")
            $scope.ehPremium = true;

        $scope.betsInfo;
        var dataBets = BetsService.openBetsAndRecentlyClosed($scope.userInfo.id);
        var resBetsState = dataBets.$$state.value;
        dataBets.then(function (resBetsState) {
            console.log(resBetsState);

            $scope.betsInfo = JSON.parse(JSON.stringify(resBetsState));
        });

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

        $scope.betsHistoric = function () {
            $state.go('betsHistoric');
        }

        $scope.betsRegisted = function () {
            $state.go('betsRegisted');
        }


    }

})();