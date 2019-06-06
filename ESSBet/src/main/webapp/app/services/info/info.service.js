(function() {
    'use strict';

    angular.
    module('essBettingHouse').
    factory('InfoService', InfoService);

    InfoService.$inject = ['$resource'];

    function InfoService($resource) {
        var partNumber = 'none';

        var service = {
            setPartNumber: setPartNumber,
            getPartNumber: getPartNumber
        };

        return service;


        function setPartNumber(newPN) {
            partNumber = newPN;
        };

        function getPartNumber() {
            return partNumber;
        };

    }

})();