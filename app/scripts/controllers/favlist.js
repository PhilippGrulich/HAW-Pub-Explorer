'use strict';

/**
 * @ngdoc function
 * @name pubExplorerApp.controller:FavlistCtrl
 * @description
 * # FavlistCtrl
 * Controller of the pubExplorerApp
 */
angular.module('pubExplorerApp')
  .controller('FavlistCtrl', function ($scope,favService) {
    $scope.favorits = favService.get();

    $scope.removeFav= favService.remove;
  });
