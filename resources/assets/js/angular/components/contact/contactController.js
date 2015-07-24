var injections = ['$scope', '$http', '$mdDialog', '$mdToast'];

var controller = function ($scope, $http, $mdDialog, $mdToast) {

    this.email = function(user) {

        $scope.processing = true;

        $http.post('/api/v1/contact', user).
            success(function(response) {
                $scope.processing = false;

                $mdDialog.hide();

                $mdToast.show(
                    $mdToast.simple()
                        .content(response.message)
                        .position('bottom left')
                        .hideDelay(3000)
                );
            }).
            error(function(response, status) {
                console.log({status: status, response: response})
            });
    };

    this.cancel = function() {
        $mdDialog.cancel();
    };
};

var exports = injections;
exports.push(controller);

module.exports = exports;