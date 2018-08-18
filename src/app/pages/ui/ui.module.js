/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('InnSuites.pages.ui', [
    'InnSuites.pages.ui.typography',
    'InnSuites.pages.ui.buttons',
    'InnSuites.pages.ui.icons',
    'InnSuites.pages.ui.modals',
    'InnSuites.pages.ui.grid',
    'InnSuites.pages.ui.alerts',
    'InnSuites.pages.ui.progressBars',
    'InnSuites.pages.ui.notifications',
    'InnSuites.pages.ui.tabs',
    'InnSuites.pages.ui.slider',
    'InnSuites.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
