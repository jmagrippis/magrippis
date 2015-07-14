var angular = require('angular');

angular
    .module('magrippis.controllers', [])
    .controller('HomeController', require('./home/homeController.js'));