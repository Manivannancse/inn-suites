/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.admin')
      .controller('adminCtrl', adminCtrl);

  /** @ngInject */
  function adminCtrl($scope, $filter, editableOptions, editableThemes) {
    $scope.smartTablePageSize = 10;

    $scope.users = [
      {
        "id": 1,
        "name": "Esther Vang",
        "status": 4,
        "group": 3,
        "password":"*******",
        "active":"Active"
      },
      {
        "id": 2,
        "name": "Leah Freeman",
        "status": 3,
        "group": 1,
        "password":"*******",
        "active":"Active"
      },
      {
        "id": 3,
        "name": "Mathews Simpson",
        "status": 3,
        "group": 2,
        "password":"*******",
        "active":"Active"
      },
      {
        "id": 4,
        "name": "Buckley Hopkins",
        "group": 4,
        "password":"*******",
        "active":"Active"
      },
      {
        "id": 5,
        "name": "Buckley Schwartz",
        "status": 1,
        "group": 1,
        "password":"*******",
        "active":"Active"
      },
      {
        "id": 6,
        "name": "Mathews Hopkins",
        "status": 4,
        "group": 2,
        "password":"*******",
        "active":"Active"
      },
      {
        "id": 7,
        "name": "Leah Vang",
        "status": 4,
        "group": 1,
        "password":"*******",
        "active":"Active"
      },
      {
        "id": 8,
        "name": "Vang Schwartz",
        "status": 4,
        "group": 2,
        "password":"*******",
        "active":"Active"
      },
      {
        "id": 9,
        "name": "Hopkin Esther",
        "status": 1,
        "group": 2,
        "password":"*******",
        "active":"Active"
      },
      {
        "id": 10,
        "name": "Mathews Schwartz",
        "status": 1,
        "group": 3,
        "password":"*******",
        "active":"Active"
      }
    ];

    $scope.statuses = [
      {value: 1, text: 'Admin'},
      {value: 2, text: 'Site Admin'},
      {value: 3, text: 'User'},
    ];

    $scope.groups = [
      {id: 1, text: '1 Start Hotel'},
      {id: 2, text: '2 Start Hotel'},
      {id: 3, text: '3 Start Hotel'},
      {id: 4, text: '5 Start Hotel'}
    ];

    $scope.showGroup = function(user) {
      if(user.group && $scope.groups.length) {
        var selected = $filter('filter')($scope.groups, {id: user.group});
        return selected.length ? selected[0].text : 'Not set';
      } else return 'Not set'
    };

    $scope.showStatus = function(user) {
      var selected = [];
      if(user.status) {
        selected = $filter('filter')($scope.statuses, {value: user.status});
      }
      return selected.length ? selected[0].text : 'Not set';
    };


    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };

    $scope.addUser = function() {
      $scope.inserted = {
        id: $scope.users.length+1,
        name: '',
        status: null,
        group: null
      };
      $scope.users.push($scope.inserted);
    };

    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';
  }
})();