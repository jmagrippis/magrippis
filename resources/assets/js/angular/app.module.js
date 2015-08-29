var angular = require('angular');

angular
    .module("magrippis", [
        require('angular-material'), require('angular-animate'), require('angular-messages'), require('angular-sanitize'), require('./app.routes.js'), require('./app.modules.js')
    ])
    .config(['$mdThemingProvider', function ($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('orange');
    }]);