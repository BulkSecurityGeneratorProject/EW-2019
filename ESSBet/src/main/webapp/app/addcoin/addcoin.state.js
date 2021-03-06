(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('addcoin', {
            parent: 'app',
            url: '/user/addcoin',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/addcoin/addcoin.html',
                    controller: 'AddcoinController',
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