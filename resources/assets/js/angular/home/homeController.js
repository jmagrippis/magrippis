var injections = ['$scope'];

var controller = function ($scope) {
    console.log('running');
    $scope.greeting = 'Hola!';
};

var exports = injections;
exports.push(controller);

module.exports = exports;