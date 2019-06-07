(function () {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('AddcoinController', AddcoinController);

    AddcoinController.$inject = ['$scope', 'Principal', '$state', '$rootScope', 'UserService']

    function AddcoinController($scope, Principal, $state, $rootScope, UserService) {
        var vm = this;

        var userInfo = JSON.parse(localStorage.getItem("userInfo"));
        $scope.erroPassword = "";
        $scope.erroMoney = "";


        $scope.addMoney = function (money, password) {
            console.log(money);

            if (money === undefined || money === null)
                $scope.erroMoney = "Please introduce a amount!";
            else
                $scope.erroMoney = "";
            if (password != userInfo.password)
                $scope.erroPassword = "Wrong password. Please try again.";
            else
                $scope.erroPassword = "";

            if (password === userInfo.password && money != undefined && money != null) {
                var dataUser = UserService.updateMoney(userInfo.email, (userInfo.plafond + money));
                var resUserState = dataUser.$$state.value;
                dataUser.then(function (resUserState) {
                    console.log(resUserState);
                    localStorage.setItem("userInfo", JSON.stringify(resUserState));
                });
                alert("You added money to your account!");
                $state.go('main');
            }
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


    }

})();
