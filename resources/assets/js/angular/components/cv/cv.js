angular.module('magrippis.cv', [])
    .controller('CVController', require('./cvController.js'))
    .factory('Jobs', ['$resource', function ($resource) {
        return $resource("/api/v1/jobs/:id");
    }])
    .factory('Diplomas', ['$resource', function ($resource) {
        return $resource("/api/v1/diplomas/:id");
    }]);

module.exports = 'magrippis.cv';