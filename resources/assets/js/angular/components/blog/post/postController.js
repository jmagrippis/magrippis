let injections = ['$stateParams', 'Posts'];

let controller = function ($stateParams, Posts) {

    this.post = Posts.get({slug: $stateParams.postSlug});

};

let exports = injections;
exports.push(controller);

module.exports = exports;