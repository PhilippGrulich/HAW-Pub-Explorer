'use strict';

/**
 * @ngdoc function
 * @name pubExplorerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pubExplorerApp
 */
angular.module('pubExplorerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
