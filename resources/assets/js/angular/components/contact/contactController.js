let injections = ['$http', '$mdDialog', '$mdToast'];

let controller = function ($http, $mdDialog, $mdToast) {

    this.email = user => {

        this.processing = true;

        $http.post('/api/v1/contact', user).
            success(response => {
                this.processing = false;

                $mdDialog.hide();

                $mdToast.show(
                    $mdToast.simple()
                        .content(response.message)
                        .position('bottom left')
                        .hideDelay(3000)
                );
            }).
            error((response, status) => {
                console.log({status, response})
            });
    };

    this.cancel = () => {
        $mdDialog.cancel();
    };
};

let exports = injections;
exports.push(controller);

module.exports = exports;