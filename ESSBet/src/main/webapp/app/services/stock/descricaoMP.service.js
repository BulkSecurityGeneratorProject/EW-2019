//informaçao da pagina sotck.html
(function() {
    'use strict';

    angular.
    module('essBettingHouse').
    factory('DescricaoMPService', DescricaoMPService);

    DescricaoMPService.$inject = ['$resource', '$http', '$q'];

    function DescricaoMPService($resource, $http, $q) {

        var service = {
            getData: getData
        };

        return service;

        function getData(mpPn, fabrica) {
            var temp = {};
            var result = $q.defer();
            $http.get('http://localhost:8081/api/materia-primas/pn/' + mpPn + '/' + fabrica)
                .success(function(data) {

                    temp = data;
                    result.resolve(data);
                });
            return result.promise;
        };
    }
})();