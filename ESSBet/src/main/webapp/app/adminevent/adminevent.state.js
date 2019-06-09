(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('adminevent', {
            parent: 'app',
            url: '/admin/adminevent',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/adminevent/adminevent.html',
                    controller: 'AdmineventController',
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