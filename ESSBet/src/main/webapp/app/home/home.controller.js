(function () {
    'use strict';

    angular
        .module('essBettingHouse')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', '$state', '$rootScope', 'UserService']

    function HomeController($scope, Principal, $state, $rootScope, UserService) {
        var vm = this;
        $scope.userExistsError = "";


        $scope.login = function (email, password) {
            console.log("Email: " + email + " Password: " + password);
            var dataUser = UserService.existUser(email, password);
            var resUserState = dataUser.$$state.value;
            dataUser.then(function (resUserState) {
                console.log(resUserState);
                if (resUserState === "") {
                    $scope.userExistsError = "Something is wrong! Please check your credentials.";
                    $state.go('home');
                } else
                    $state.go('main');
            });

        }

        $scope.function2 = function () {
            $state.go('registo');
        }

    }

})();