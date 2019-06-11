(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('adminaddevent', {
            parent: 'app',
            url: '/adminevent/adminaddevent',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/adminaddevent/adminaddevent.html',
                    controller: 'AdminaddeventController',
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