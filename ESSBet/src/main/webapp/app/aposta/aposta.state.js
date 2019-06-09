(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('aposta', {
            parent: 'app',
            url: '/bet',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/aposta/aposta.html',
                    controller: 'ApostaController',
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