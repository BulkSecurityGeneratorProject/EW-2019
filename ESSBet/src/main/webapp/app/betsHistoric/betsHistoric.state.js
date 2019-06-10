(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('betsHistoric', {
            parent: 'app',
            url: '/betsHistoric',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/betsHistoric/betsHistoric.html',
                    controller: 'BetsHistoricController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('main');
                    return $translate.refresh();
                }]
            }
        });
    }
})();