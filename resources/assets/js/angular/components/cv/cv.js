angular.module('magrippis.cv', [])
    .controller('CVController', require('./cvController.js'))
    .factory('Jobs', ['$resource', function ($resource) {
        return $resource("/api/v1/jobs/:id");
    }]);

module.exports = 'magrippis.cv';