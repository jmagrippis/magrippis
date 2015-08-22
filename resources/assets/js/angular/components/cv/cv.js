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
    }]);

module.exports = 'magrippis.cv';