angular.module('magrippis.portfolio', [])
    .controller('PortfolioController', require('./portfolioController.js'))
    .factory('Projects', ['$resource', function ($resource) {
        return $resource('/api/v1/projects/:id', null, {
            query: {
                method: "GET",
                cache: true,
                isArray:true
            }
        });
    }]);

module.exports = 'magrippis.portfolio';