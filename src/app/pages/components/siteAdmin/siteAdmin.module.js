/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('InnSuites.pages.components.siteAdmin', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('components.siteAdmin', {
        url: '/site-admin',
        templateUrl: 'app/pages/components/siteAdmin/siteAdmin.html',
          title: 'Site Admin',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
  }
})();