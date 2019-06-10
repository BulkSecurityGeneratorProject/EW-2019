(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('betsRegisted', {
            parent: 'app',
            url: '/betsRegisted',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/betsRegisted/betsRegisted.html',
                    controller: 'BetsRegistedController',
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