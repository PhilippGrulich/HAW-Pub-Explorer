'use strict';

/**
 * @ngdoc function
 * @name pubExplorerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pubExplorerApp
 */
angular.module('pubExplorerApp')
    .controller('MainCtrl', function ($scope, userService,favService) {
        $scope.limit = 100;
        $scope.addMoreItems = function () {
            $scope.limit = $scope.limit + 2;

        };

        $scope.addToFav =   favService.add;
        $scope.removeFav =   favService.remove;
        $scope.hasFavItem = favService.hasItem;

        userService.getUser(function (user) {
            $scope.users = user;
        });
    });
