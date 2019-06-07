(function () {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'Principal', '$state', '$rootScope', 'EventsService']

    function MainController($scope, Principal, $state, $rootScope, EventsService) {
        var vm = this;

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
            $scope.publicEvents = JSON.parse(JSON.stringify(resEventsOpenState));
        });


        $scope.function1 = function () {
            $state.go('main');
        }

        $scope.profile = function () {
            $state.go('profile');
        }

        //vai para a pagina home para efetuar login
        $scope.logout = function () {
            $state.go('home');
        }

        $scope.premium = function () {
            $state.go('premium');
        }

        $scope.addcoin = function () {
            $state.go('addcoin');
        }

        $scope.bet = function () {
            $state.go('aposta');
        }

    }
})();