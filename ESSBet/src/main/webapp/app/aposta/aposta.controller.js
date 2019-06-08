(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('ApostaController', ApostaController);

    ApostaController.$inject = ['$scope', 'Principal', '$state', '$rootScope', 'BetsService', 'UserService']

    function ApostaController($scope, Principal, $state, $rootScope, BetsService, UserService) {
        var vm = this;

        $scope.erroAmount = "";
        $scope.erroPlafond = "";

        $scope.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        $scope.apostaEventoId = BetsService.getIdEvento();
        $scope.apostaOddEmpate = BetsService.getOddEvento();
        console.log($scope.apostaEventoId);

        $scope.participantsInfo;
        $scope.participantsNome = "";

        var dataParticipants = BetsService.participantsEvent($scope.apostaEventoId);
        var resParticipantsState = dataParticipants.$$state.value;
        dataParticipants.then(function(resParticipantsState) {
            console.log(resParticipantsState);

            $scope.participantsInfo = JSON.parse(JSON.stringify(resParticipantsState));

            var i;
            for (i = 0; i < resParticipantsState.length; i++) {
                if ($scope.participantsNome === "")
                    $scope.participantsNome = resParticipantsState[i].nome;
                else {
                    var strAux = ($scope.participantsNome + ' VS ').concat(resParticipantsState[i].nome);
                    $scope.participantsNome = strAux;
                }


            }
            console.log(strAux);
        });

        $scope.betParticipant = function(participant, amount) {
            if (amount === null || amount === undefined)
                $scope.erroAmount = "Please insert a amount!";
            else {
                if (amount > $scope.userInfo.plafond)
                    $scope.erroAmount = "Not enough plafond!";
            }

            if (amount != null && amount != undefined && amount <= $scope.userInfo.plafond) {
                console.log("Nova aposta");
                console.log(participant);
                console.log(amount);

                // Empate
                if (participant === null || participant === undefined) {
                    var dataBet = BetsService.newBetTie($scope.userInfo.id, $scope.apostaEventoId, amount);
                    var resBetState = dataBet.$$state.value;
                    dataBet.then(function(resBetState) {
                        console.log("Empate");
                        console.log(resBetState);
                    });

                    // Nao empate
                } else {
                    var dataBet = BetsService.newBet($scope.userInfo.id, $scope.apostaEventoId, participant, amount);
                    var resBetState = dataBet.$$state.value;
                    dataBet.then(function(resBetState) {
                        console.log("Nao Empate");
                        console.log(resBetState);
                    });
                }

                //Update Plafond
                var dataUser = UserService.updateMoney($scope.userInfo.email, ($scope.userInfo.plafond - amount));
                var resUserState = dataUser.$$state.value;
                dataUser.then(function(resUserState) {
                    console.log(resUserState);
                    localStorage.setItem("userInfo", JSON.stringify(resUserState));
                });

                alert("You made a bet!");
                $state.go('main');

            }

        }

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