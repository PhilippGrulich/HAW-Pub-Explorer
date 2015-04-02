'use strict';

/**
 * @ngdoc function
 * @name pubExplorerApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the pubExplorerApp
 */
angular.module('pubExplorerApp')
    .controller('UserCtrl', function ($scope, fileService, $routeParams, favService) {
        var path = $routeParams.path;
        $scope.path = path;
        var breadcrumbs = path.split('/');
        $scope.breadcrumbs = [];
        breadcrumbs.forEach(function (item) {
            if (item !== "")
                $scope.breadcrumbs.push(item);
        })

        fileService.getFiles(path, function (files) {
            $scope.files = files;
        });
        var mapData = function (func) {

            return (function (param) {
                if (param.type === "folder") {
                    return func({
                        name: param.name,
                        link: path+"/"+ param.link
                    })
                }else{
                   return func({
                        name: param.name,
                        link: "https://pub.informatik.haw-hamburg.de/home/pub/All/"+path+"/" + param.link,
                        link_type:"extern"
                    })
                }


            });
        };
        $scope.addToFav = mapData(favService.add);
        $scope.removeFav = mapData(favService.remove);
        $scope.hasFavItem = mapData(favService.hasItem);


    });
