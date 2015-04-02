'use strict';

/**
 * @ngdoc service
 * @name pubExplorerApp.userService
 * @description
 * # userService
 * Service in the pubExplorerApp.
 */
angular.module('pubExplorerApp')
    .service('userService', function ($http) {
        var user;

        function capitalize(s) {
            if ( !angular.isUndefined(s))
                return s[0].toUpperCase() + s.slice(1);
            else
                return "";
        }

        var parseData = function (data) {
            var links = $(data).find("a")
            user = [];
            links.each(function (index, item) {
                if (index > 4) {
                    var link = $(item).html();
                    var name = link.replace("/", "").replace("_", " ");
                    name = capitalize(name.split(" ")[1]) + " " + capitalize(name.split(" ")[0]);
                    user.push({
                        link: link,
                        name: name
                    });
                }

            });
        };

        var getUser = function (callback) {

            if (!angular.isUndefined(user)) {
                callback(user);
            }
            else if (!angular.isUndefined(localStorage.getItem("user")) && localStorage.getItem("user") !== null) {
                user = JSON.parse(localStorage.getItem("user"));
                callback(user);
            }
            else {

                $http.get("https://pub.informatik.haw-hamburg.de/home/pub/All/").
                    success(function (data, status, headers, config) {
                        parseData(data);

                        localStorage.setItem("user", JSON.stringify(user));
                        callback(user);

                    }).
                    error(function (data, status, headers, config) {
                        console.log(data);
                    });

            }

        };


        return {
            getUser: getUser
        }

    });
