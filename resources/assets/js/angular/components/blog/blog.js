angular.module('magrippis.blog', [require('./post/post.js')])
    .controller('BlogController', require('./blogController.js'))
    .factory('Posts', ['$resource', function ($resource) {
        return $resource('/api/v1/posts/:slug', null, {
            query: {
                method: "GET",
                cache: true,
                isArray: true
            }
        });
    }])
    .factory('Tags', ['$resource', function ($resource) {
        return $resource('/api/v1/tags/:id', null, {
            query: {
                method: "GET",
                cache: true,
                isArray: true
            }
        });
    }])
    .filter('inCategory', function () {
        return function (posts, categories) {

            return posts.filter(post => {
                let inCategory = false;
                categories.some(function (category) {
                    inCategory = category.id == post.category_id;
                    return inCategory;
                });
                return inCategory;
            });

        };
    })
    .filter('hasTag', function () {
        return function (posts, tags) {

            if (tags.length === 0) return posts;

            return posts.filter(post => {
                let tagIds = [];
                post.tags.forEach(tag => {
                    tagIds.push(tag.id);
                });
                let hasTag = false;
                tags.some(function (tag) {
                    hasTag = tagIds.indexOf(tag.id) > -1;
                    return hasTag;
                });
                return hasTag;
            });

        };
    });

module.exports = 'magrippis.blog';