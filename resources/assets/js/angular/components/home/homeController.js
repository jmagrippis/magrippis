var injections = ['$scope', 'Categories'];

var controller = function ($scope, Categories) {
    $scope.availableSkills = [];
    $scope.categories = Categories.query({}, function () {
        $scope.categories.forEach(function (category) {
            $scope.availableSkills = $scope.availableSkills.concat(category.skills);
        });
    });

    $scope.searchTags = [];
    $scope.selectedSkill;
    $scope.searchText;

    $scope.querySearch = function querySearch(query) {
        var results = query ? $scope.availableSkills.filter(createFilterFor(query)) : [];
        return results;
    };

    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(skill) {
            return (skill.name.indexOf(lowercaseQuery) === 0);
        };
    }
};

var exports = injections;
exports.push(controller);

module.exports = exports;