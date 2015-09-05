angular.module('magrippis.cv', [])
    .controller('CVController', require('./cvController.js'))
    .factory('Jobs', ['$resource', function ($resource) {
        return $resource('/api/v1/jobs/:id', null, {
            query: {
                method: "GET",
                cache: true,
                isArray:true
            }
        });
    }])
    .factory('Diplomas', ['$resource', function ($resource) {
        return $resource('/api/v1/diplomas/:id', null, {
            query: {
                method: "GET",
                cache: true,
                isArray:true
            }
        });
    }])
    .directive('jmaExpander', function() {
        return {
            restrict: 'E',
            scope: {
                section: '=',
                controller: '='
            },
            templateUrl: '/angular/components/cv/directives/expander.html'
        };
    });

module.exports = 'magrippis.cv';