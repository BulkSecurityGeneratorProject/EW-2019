(function() {
    'use strict';

    angular.
    module('essBettingHouse').
    factory('ExcelService', ExcelService);

    ExcelService.$inject = ['$resource', '$http', '$q'];

    function ExcelService($resource, $http, $q) {

        var service = {
            getDownload: getDownload
        };

        return service;

        function getDownload(mpPn) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/tabelaExcel/' + mpPn + '/2019-01-02/8150')
                .success(function(data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };
    }
})();