var angular = require('angular');

angular
    .module('magrippis.factories', [require('angular-resource')])
    .factory('Categories', require('./shared/categories/categoriesFactory.js'));