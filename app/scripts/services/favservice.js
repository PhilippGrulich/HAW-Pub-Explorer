'use strict';

/**
 * @ngdoc service
 * @name pubExplorerApp.favService
 * @description
 * # favService
 * Service in the pubExplorerApp.
 */
angular.module('pubExplorerApp')
    .service('favService', function () {
        var list = JSON.parse(localStorage.getItem("fav"));
        if (list === null) {
            list = [];
        }

        var get = function () {
            return list;
        };

        var add = function (item) {
            if (!hasItem(item)) {
                list.push(item);
                localStorage.setItem("fav", JSON.stringify(list));
            }
        };

        var remove = function (item) {
            var index = getIndex(item);
            if (index > -1) {
                list.splice(index, 1);
            }
            localStorage.setItem("fav", JSON.stringify(list));
        };

        var getIndex = function (item) {
            var index = -1;
            list.forEach(function (element, i) {
                var elementLink = element.link.replace(new RegExp("//", 'g'), '/');
                var itemLink = item.link.replace(new RegExp("//", 'g'), '/');
                if (elementLink === itemLink) {
                    index = i;
                }
            });
            return index;
        }

        var hasItem = function (item) {
            var index = getIndex(item);
            if (index > -1) {
                return true;
            }
            return false;
        };

        return {
            get: get,
            add: add,
            remove: remove,
            hasItem: hasItem
        }
    });
