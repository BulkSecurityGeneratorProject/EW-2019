(function () {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('AdminaddeventController', AdminaddeventController);

    AdminaddeventController.$inject = ['$scope', 'Principal', '$state', '$rootScope', '$filter', 'EventsService']

    function AdminaddeventController($scope, Principal, $state, $rootScope, $filter, EventsService) {
        var vm = this;

        var userInfo = JSON.parse(localStorage.getItem("userInfo"));



        //Info do Evento
        $scope.timeB;
        $scope.timeE;
        $scope.nParticipants;
        $scope.teamEv;
        $scope.oddVen;
        $scope.sportEv;
        $scope.publicEv;

        $scope.msgErro = "";

        //Info Participantes
        $scope.participantesInfo = [];

        $scope.partRealInfo = [];
        $scope.msgErroPart = "";


        $scope.msgErroAll = "";


        $scope.ehPremium = false;
        if (localStorage.getItem("userPremium") === "true" || localStorage.getItem("userAdmin") === "true")
            $scope.ehPremium = true;

        $scope.ehAdmin = false;

        if (localStorage.getItem("userAdmin") === "true")
            $scope.ehAdmin = true;




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

        $scope.newEv = function (timeB, timeE, nParticipants, teamEv, oddVen, sportEv, publicEv) {
            if (timeB === undefined || timeE === undefined || teamEv === undefined || oddVen === undefined ||
                sportEv === undefined || publicEv === undefined)
                $scope.msgErro = "You need to fill all the fields."
            else {
                var j;
                var _dateB = $filter('date')(new Date(timeB), 'yyyy-MM-dd HH:mm:00');
                var _dateE = $filter('date')(new Date(timeE), 'yyyy-MM-dd HH:mm:00');
                $scope.timeB = _dateB;
                $scope.timeE = _dateE;
                $scope.nParticipants = nParticipants;
                $scope.teamEv = teamEv;
                $scope.oddVen = oddVen;
                $scope.sportEv = sportEv;
                $scope.publicEv = publicEv;

                console.log($scope.timeB);
                console.log($scope.timeE);
                console.log($scope.sportEv);
                console.log($scope.teamEv);
                console.log($scope.oddVen);
                console.log($scope.publicEv);
                console.log($scope.nParticipants);

                var i;
                $scope.participantesInfo.length = 0;
                for (i = 0; i < nParticipants; i++)
                    $scope.participantesInfo[$scope.participantesInfo.length] = [];
            }
        }

        $scope.newPart = function (namePart, countryPart, teamPart, oddPart) {
            if (namePart === undefined || countryPart === undefined || teamPart === undefined || oddPart === undefined)
                $scope.msgErroPart = "You need to fill all the fields."
            else {
                var aux = { namePart, countryPart, teamPart, oddPart };
                $scope.partRealInfo[$scope.partRealInfo.length] = aux;
                alert("New participant added.");
            }
            console.log($scope.partRealInfo);
        }

        $scope.concludeRegistry = function () {
            if (($scope.partRealInfo.length == $scope.nParticipants) &&
                ($scope.timeB != undefined && $scope.timeE != undefined && $scope.teamEv != undefined &&
                    $scope.oddVen != undefined && $scope.sportEv != undefined && $scope.publicEv != undefined)) {

                console.log("Info evento");
                console.log($scope.timeB);
                console.log($scope.timeE);
                console.log($scope.sportEv);
                console.log($scope.teamEv);
                console.log($scope.oddVen);
                console.log($scope.publicEv);
                console.log($scope.nParticipants);

                var dataEvent = EventsService.registNewEv($scope.timeB, $scope.timeE, $scope.nParticipants,
                    $scope.teamEv, $scope.oddVen, $scope.sportEv, $scope.publicEv);
                var resEventState = dataEvent.$$state.value;
                dataEvent.then(function (resEventState) {
                    console.log(resEventState);

                    var a;
                    for (a = 0; a < $scope.nParticipants; a++) {
                        
                        var dataParticipant = EventsService.registParticipant($scope.partRealInfo[a].namePart, 
                            $scope.partRealInfo[a].teamPart, $scope.partRealInfo[a].countryPart, 
                            $scope.partRealInfo[a].oddPart, resEventState.id);
                        var resParticipantState = dataParticipant.$$state.value;
                        dataParticipant.then(function (resParticipantState) {
                            console.log(resParticipantState);
                        });
                    }

                });
                alert("Event and its participants registed.");
                $state.go('adminevent');
            } else {
                $scope.msgErroAll = "Please fill all the fields!!!";
            }
        }


    }



})();