var injections = ['$mdDialog'];

var controller = function ($mdDialog) {

    this.showContact = function (event) {
        $mdDialog.show({
            parent: angular.element(document.body),
            controller: 'ContactController',
            controllerAs: 'contact',
            templateUrl: 'angular/components/contact/contact.html',
            targetEvent: event,
            clickOutsideToClose: true
        })
    };

};

var exports = injections;
exports.push(controller);

module.exports = exports;