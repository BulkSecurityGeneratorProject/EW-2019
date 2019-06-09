(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('AdminuserController', AdminuserController);

    AdminuserController.$inject = ['$scope', 'Principal', '$state', '$rootScope', 'UserService', 'BetsService']

    function AdminuserController($scope, Principal, $state, $rootScope, UserService, BetsService) {
        var vm = this;

        $scope.ehAdmin = false;
        if (localStorage.getItem("userAdmin") === "true")
            $scope.ehAdmin = true;
            
        $scope.usersInfo;
        $scope.groupInfo = [];

        var dataUsers = UserService.allUsers();
        var resUsersState = dataUsers.$$state.value;
        dataUsers.then(function(resUsersState) {
            console.log(resUsersState);

            $scope.usersInfo = JSON.parse(JSON.stringify(resUsersState));
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

        $scope.removeUser = function(idUser) {
            var dataBets = BetsService.deleteBetsFromUser(idUser);
            var resBetsState = dataBets.$$state.value;
            dataBets.then(function(resBetsState) {
                console.log(resBetsState);
            });
           
            var dataUsers = UserService.deleteUser(idUser);
            var resUsersState = dataUsers.$$state.value;
            dataUsers.then(function(resUsersState) {
                console.log(resUsersState);
                $scope.usersInfo = JSON.parse(JSON.stringify(resUsersState));
            });

            
        }
    }

})();