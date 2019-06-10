(function () {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope', 'Principal', '$state', '$rootScope']

    function ProfileController($scope, Principal, $state, $rootScope) {
        var vm = this;

        $scope.ehAdmin = false;
        if (localStorage.getItem("userAdmin") === "true")
            $scope.ehAdmin = true;

        $scope.ehPremium = false;
        if (localStorage.getItem("userPremium") === "true" || localStorage.getItem("userAdmin") === "true")
            $scope.ehPremium = true;

        $scope.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        $scope.userGroup = "";
        if (localStorage.getItem("userAdmin") === "true") {
            $scope.userGroup = "Admin";
        } else {
            if (localStorage.getItem("userPremium") === "true")
                $scope.userGroup = "Premium";
            else
                $scope.userGroup = "Normal";
        }




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

        $scope.betsHistoric = function () {
            $state.go('betsHistoric');
        }

        $scope.betsRegisted = function () {
            $state.go('betsRegisted');
        }
    }
})();