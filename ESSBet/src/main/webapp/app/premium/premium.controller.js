(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('PremiumController', PremiumController);

    PremiumController.$inject = ['$scope', 'Principal', '$state', '$rootScope', 'UserService']

    function PremiumController($scope, Principal, $state, $rootScope, UserService) {
        var vm = this;

        var userInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log(userInfo);
        console.log(localStorage.getItem("userAdmin"));
        console.log(localStorage.getItem("userPremium"));
        console.log(localStorage.getItem("userNormal"));

        $scope.ehPremium = false;
        if (localStorage.getItem("userPremium") === "true" || localStorage.getItem("userAdmin") === "true")
            $scope.ehPremium = true;

        $scope.ehAdmin = false;
        if (localStorage.getItem("userAdmin") === "true")
            $scope.ehAdmin = true;

        $scope.erroCheckBox = "";
        $scope.erroPassword = "";
        $scope.erroPlafond = "";
        $scope.erroPremium = "";


        $scope.subscrivePremium = function(checkBox, password) {
            //Erros
            if (localStorage.getItem("userPremium") === "true")
                $scope.erroPremium = "You already subscribed to premium!";
            else {
                if (userInfo.plafond < 100) {
                    $scope.erroPlafond = "Sorry! Plafond not enough!";
                } else {
                    if ((checkBox === undefined) || (checkBox === false))
                        $scope.erroCheckBox = "If you want to subscrive please click the checkbox.";
                    if (checkBox != undefined)
                        $scope.erroCheckBox = "";
                    if (password != userInfo.password)
                        $scope.erroPassword = "Wrong password. Please try again.";
                    if (password === userInfo.password)
                        $scope.erroPassword = "";
                }
            }


            //Subscrever
            if (password === userInfo.password && checkBox === true &&
                userInfo.plafond >= 100 && localStorage.getItem("userPremium") != true) {
                console.log("Subscreveu!");
                var dataUser = UserService.subscreverPremium(userInfo.id);
                var resUserState = dataUser.$$state.value;
                dataUser.then(function(resUserState) {
                    console.log(resUserState);
                    localStorage.setItem("userInfo", JSON.stringify(resUserState));
                    localStorage.setItem("userPremium", true);
                });
                alert("You subscrived to premium!");
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

        $scope.betsHistoric = function () {
            $state.go('betsHistoric');
        }

        $scope.betsRegisted = function () {
            $state.go('betsRegisted');
        }
    }

})();