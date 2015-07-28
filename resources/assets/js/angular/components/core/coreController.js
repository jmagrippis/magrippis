let injections = ['$mdDialog', '$state'];

let controller = function ($mdDialog, $state) {

    this.isActiveState = state => $state.includes(state);

    this.showContact = event => {
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

let exports = injections;
exports.push(controller);

module.exports = exports;