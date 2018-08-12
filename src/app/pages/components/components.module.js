/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components', [
    // 'BlurAdmin.pages.components.mail',
    'BlurAdmin.pages.components.admin',
    'BlurAdmin.pages.components.siteAdmin',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('components', {
          url: '/components',
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
