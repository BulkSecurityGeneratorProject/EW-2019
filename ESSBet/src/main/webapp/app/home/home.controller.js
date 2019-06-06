(function () {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', '$state', '$rootScope', 'UserService']

    function HomeController($scope, Principal, $state, $rootScope, UserService) {
        var vm = this;
        $scope.userExistsError = "";

        localStorage.clear();



        $scope.login = function (email, password) {
            //console.log("Email: " + email + " Password: " + password);
            var dataUser = UserService.existUser(email, password);
            var resUserState = dataUser.$$state.value;
            dataUser.then(function (resUserState) {
               // console.log(resUserState);
                if (resUserState === "") {
                    $scope.userExistsError = "Something is wrong! Please check your credentials.";
                    $state.go('home');
                } else {
                    //console.log("hello");
                   // console.log(resUserState.grupos.length);
                    localStorage.setItem("userInfo", JSON.stringify(resUserState));
                   
                    for (let a = 0; a < resUserState.grupos.length; a++) {
                       // console.log(a);
                       // console.log(resUserState.grupos[a].id);
                        if (resUserState.grupos[a].id === 1)
                            localStorage.setItem("userAdmin", true);
                        if (resUserState.grupos[a].id === 2)
                            localStorage.setItem("userPremium", true);
                        if (resUserState.grupos[a].id === 3)
                            localStorage.setItem("userNormal", true);

                    }

                    $state.go('main');
                }
            });

        }

        $scope.function2 = function () {
            $state.go('registo');
        }

    }

})();