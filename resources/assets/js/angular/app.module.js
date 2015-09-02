var angular = require('angular');
var duScroll = require('angular-scroll');

angular
    .module("magrippis", [
        require('angular-material'),
        require('angular-animate'),
        require('angular-messages'),
        require('angular-sanitize'),
        'duScroll',
        require('./app.routes.js'),
        require('./app.modules.js')
    ])
    .config(['$mdThemingProvider', function ($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('orange');
    }]);