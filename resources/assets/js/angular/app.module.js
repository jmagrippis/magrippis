var angular = require('angular');

angular
    .module("magrippis", [require('angular-material'), 'magrippis.controllers'])
    .config(['$mdThemingProvider', function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('orange');
    }]);