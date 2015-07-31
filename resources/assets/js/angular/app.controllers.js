var angular = require('angular');

angular
    .module('magrippis.controllers', ['magrippis.factories'])
    .controller('CoreController', require('./components/core/coreController.js'))
    .controller('HomeController', require('./components/home/homeController.js'))
    .controller('ContactController', require('./components/contact/contactController.js'))
    .controller('CVController', require('./components/cv/cvController.js'))
    .controller('PortfolioController', require('./components/portfolio/portfolioController.js'));