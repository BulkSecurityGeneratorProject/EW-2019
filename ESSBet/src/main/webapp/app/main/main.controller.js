(function () {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'Principal', '$state', '$rootScope', 'EventsService', 'BetsService']

    function MainController($scope, Principal, $state, $rootScope, EventsService, BetsService) {
        var vm = this;

        $scope.ehAdmin = false;
        if (localStorage.getItem("userAdmin") === "true")
            $scope.ehAdmin = true;

        $scope.ehPremium = false;
        if (localStorage.getItem("userPremium") === "true" || localStorage.getItem("userAdmin") === "true")
            $scope.ehPremium = true;

        $scope.publicEvents;
        $scope.allOpenEvents;

        $scope.userGroup = "";
        $scope.seePrivateEvents;
        if (localStorage.getItem("userAdmin") === "true") {
            $scope.userGroup = "Admin";
            $scope.seePrivateEvents = true;
        } else {
            if (localStorage.getItem("userPremium") === "true") {
                $scope.userGroup = "Premium";
                $scope.seePrivateEvents = true;
            } else {
                $scope.userGroup = "Normal";
                $scope.seePrivateEvents = false;
            }
        }

        var dataEventsPublic = EventsService.publicEvents();
        var resEventsPublicState = dataEventsPublic.$$state.value;
        dataEventsPublic.then(function (resEventsPublicState) {
            console.log(resEventsPublicState);

            $scope.publicEvents = JSON.parse(JSON.stringify(resEventsPublicState));
        });

        var dataEventsOpen = EventsService.openEvents();
        var resEventsOpenState = dataEventsOpen.$$state.value;
        dataEventsOpen.then(function (resEventsOpenState) {
            console.log(resEventsOpenState);
            console.log(resEventsOpenState[0].id);

            $scope.allOpenEvents = JSON.parse(JSON.stringify(resEventsOpenState));
        });


        $scope.main = function () {
            $state.go('main');
        }

        $scope.profile = function () {
            $state.go('profile');
        }

        //vai para a pagina home para efetuar login
        $scope.logout = function () {
            $state.go('home');
        }

        $scope.betsHistoric = function () {
            $state.go('betsHistoric');
        }

        $scope.betsRegisted = function () {
            $state.go('betsRegisted');
        }

        $scope.premium = function () {
            $state.go('premium');
        }

        $scope.addcoin = function () {
            $state.go('addcoin');
        }

        $scope.bet = function (idEvento, oddEvento) {
            BetsService.setIdEvento(idEvento);
            BetsService.setOddEvento(oddEvento);
            $state.go('aposta');
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