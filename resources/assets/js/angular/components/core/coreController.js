var injections = ['$mdDialog', '$state'];

var controller = function ($mdDialog, $state) {

    this.isActiveState = function(state) {
        return $state.includes(state)
    };

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