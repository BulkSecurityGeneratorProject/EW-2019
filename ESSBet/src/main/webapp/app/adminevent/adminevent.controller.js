(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('AdmineventController', AdmineventController);

    AdmineventController.$inject = ['$scope', 'Principal', '$state', '$rootScope', 'EventsService', 'BetsService']

    function AdmineventController($scope, Principal, $state, $rootScope, EventsService, BetsService) {
        var vm = this;

        $scope.ehPremium = false;
        if (localStorage.getItem("userPremium") === "true" || localStorage.getItem("userAdmin") === "true")
            $scope.ehPremium = true;

        $scope.ehAdmin = false;
        if (localStorage.getItem("userAdmin") === "true")
            $scope.ehAdmin = true;

        $scope.eventsOpenInfo;
        $scope.eventsOpenPart = [];
        $scope.eventsClosedInfo;
        $scope.eventsClosedPart = [];

        var dataEventsOpen = EventsService.openEvents();
        var resEventsOpenState = dataEventsOpen.$$state.value;
        dataEventsOpen.then(function(resEventsOpenState) {
            console.log(resEventsOpenState);

            //Participantes
            var i;
            for (i = 0; i < resEventsOpenState.length; i++) {
                var dataParticipants = BetsService.participantsEvent(resEventsOpenState[i].id);
                var resParticipantsState = dataParticipants.$$state.value;
                dataParticipants.then(function(resParticipantsState) {
                    console.log(resParticipantsState);
                    $scope.eventsOpenPart[$scope.eventsOpenPart.length] = JSON.parse(JSON.stringify(resParticipantsState));

                });
            }

            $scope.eventsOpenInfo = JSON.parse(JSON.stringify(resEventsOpenState));
        });



        var dataEventsClosed = EventsService.closedEvents();
        var resEventsClosedState = dataEventsClosed.$$state.value;
        dataEventsClosed.then(function(resEventsClosedState) {
            console.log(resEventsClosedState);

            var i;
            for (i = 0; i < resEventsClosedState.length; i++) {
                var dataParticipants = BetsService.participantsEvent(resEventsClosedState[i].id);
                var resParticipantsState = dataParticipants.$$state.value;
                dataParticipants.then(function(resParticipantsState) {
                    console.log(resParticipantsState);
                    $scope.eventsClosedPart[$scope.eventsClosedPart.length] = JSON.parse(JSON.stringify(resParticipantsState));

                });
            }

            $scope.eventsClosedInfo = JSON.parse(JSON.stringify(resEventsClosedState));
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

        $scope.betsHistoric = function() {
            $state.go('betsHistoric');
        }

        $scope.betsRegisted = function() {
            $state.go('betsRegisted');
        }

        $scope.maisevent = function() {
            $state.go('adminaddevent');
        }
    }

})();