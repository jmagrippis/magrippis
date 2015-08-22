angular.module('magrippis.portfolio', [])
    .controller('PortfolioController', require('./portfolioController.js'))
    .factory('Projects', ['$resource', function ($resource) {
        return $resource("/api/v1/projects/:id");
    }]);

module.exports = 'magrippis.portfolio';