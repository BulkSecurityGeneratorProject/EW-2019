(function () {
    'use strict';

    angular.
        module('essBettingHouse').
        factory('UserService', UserService);

    UserService.$inject = ['$resource', '$http', '$q'];

    function UserService($resource, $http, $q) {
        var userRegisted = [];


        var service = {
            registUser: registUser,
            getUser: getUser,
            setUser: setUser,
            existUser: existUser,
            subscreverPremium : subscreverPremium,
            updateMoney : updateMoney,
            allUsers : allUsers,
            deleteUser : deleteUser
        };

        return service;



        function registUser(nome, password, email, plafond) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8082/api/utilizador/registo/' + nome + '/' + password + '/' +
                email + '/' + plafond)
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function setUser(user) {
            userRegisted = user;
        };

        function getUser() {
            return userRegisted;
        };

        function existUser(email, password) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8082/api/utilizador/existe/' + email + '/' + password)
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function subscreverPremium(idUser) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8082/api/utilizador/premium/' + idUser)
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function updateMoney(email, money) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8082/api/utilizador/mudaPlafond/' + email + '/' + money)
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function allUsers() {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8082/api/utilizadors')
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };

        function deleteUser(idUser) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8082/api/utilizador/elimina/' +  idUser)
                .success(function (data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };
    }


})();
