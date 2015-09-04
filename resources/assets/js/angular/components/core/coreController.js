let injections = ['$scope', '$mdDialog', '$state', '$document', '$window'];

let controller = function ($scope, $mdDialog, $state, $document, $window) {

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

    this.scroller = false;

    this.scrollTop = () => {
        $document.scrollTopAnimated(0, 1000);
    };

    $document.on('scroll', () => {
        $scope.$apply(() => {
            this.scroller = $document.scrollTop() > 1000;
        });
    });

    this.goTo = (uri) => {
        $window.open(uri, '_blank');
    }

};

let exports = injections;
exports.push(controller);

module.exports = exports;