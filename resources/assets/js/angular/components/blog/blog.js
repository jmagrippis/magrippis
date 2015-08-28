angular.module('magrippis.blog', [require('./post/post.js')])
    .controller('BlogController', require('./blogController.js'))
    .factory('Posts', ['$resource', function ($resource) {
        return $resource('/api/v1/posts/:slug', null, {
            query: {
                method: "GET",
                cache: true,
                isArray:true
            }
        });
    }]);

module.exports = 'magrippis.blog';