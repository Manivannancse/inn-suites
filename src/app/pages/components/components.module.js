/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('InnSuites.pages.components', [
    'InnSuites.pages.components.admin',
    'InnSuites.pages.components.siteAdmin',
    'InnSuites.pages.components.roles',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('components', {
          url: '/users',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Users',
          sidebarMeta: {
            icon: 'ion-person',
            order: 100,
          },
        });
  }

})();
