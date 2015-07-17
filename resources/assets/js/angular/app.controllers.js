var angular = require('angular');

angular
    .module('magrippis.controllers', ['magrippis.factories'])
    .controller('HomeController', require('./home/homeController.js'));