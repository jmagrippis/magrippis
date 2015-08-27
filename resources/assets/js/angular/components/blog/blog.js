angular.module('magrippis.blog', [])
    .controller('BlogController', require('./blogController.js'))
    .factory('Posts', ['$resource', function ($resource) {
        return $resource('/api/v1/posts/:id', null, {
            query: {
                method: "GET",
                cache: true,
                isArray:true
            }
        });
    }]);

module.exports = 'magrippis.blog';