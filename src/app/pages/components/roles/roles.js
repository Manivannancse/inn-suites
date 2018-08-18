/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('InnSuites.pages.components.roles', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('components.roles', {
        url: '/roles',
        templateUrl: 'app/pages/components/roles/roles.html',
          title: 'Roles',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
  }
})();