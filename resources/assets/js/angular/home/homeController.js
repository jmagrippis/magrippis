var injections = ['$scope', 'Categories'];

var controller = function ($scope, Categories) {
    $scope.categories = Categories.query();
};

var exports = injections;
exports.push(controller);

module.exports = exports;