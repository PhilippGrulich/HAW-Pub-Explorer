'use strict';

/**
 * @ngdoc service
 * @name pubExplorerApp.fileService
 * @description
 * # fileService
 * Service in the pubExplorerApp.
 */
angular.module('pubExplorerApp')
    .service('fileService', function ($http) {
        function endsWith(str, suffix) {
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        }
        function getType(fileName)
        {
            switch (true) {
                case endsWith(fileName,"/"):
                    return "folder";
                default:
                   return "file";
            }
        }

        var parseData = function (data) {
            var links = $(data).find("a")
            var files = [];
            links.each(function (index, item) {
                if (index > 4) {
                    var link = $(item).html();
                    var name = link;
                    files.push({
                        link: link,
                        name:name,
                        type:getType(name)
                    });
                }

            });
            return files;
        };
        var getFiles = function (folder,callback) {

            $http.get("https://pub.informatik.haw-hamburg.de/home/pub/All/"+folder).
                success(function (data, status, headers, config) {
                    var files = parseData(data);

                    callback(files);

                }).
                error(function (data, status, headers, config) {
                    console.log(data);
                });


        };


        return {
            getFiles: getFiles
        }
    });
