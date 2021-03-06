(function() {
    'use strict';

    angular
        .module('essBettingHouse')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('adminuser', {
            parent: 'app',
            url: '/admin/adminuser',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/adminuser/adminuser.html',
                    controller: 'AdminuserController',
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