let injections = ['$stateParams', 'Posts', 'Getters'];

let controller = function ($stateParams, Posts, Getters) {

    this.post = Posts.get({slug: $stateParams.postSlug}, post => {
        post.featured_photo = post.photos.filter(photo => photo.featured)[0];
        post.featured_photo.uri = Getters.getPhotoUri(post.featured_photo);
        post.photos.forEach(function(photo) {
            photo.uri = Getters.getPhotoUri(photo);
            photo.thumb_uri = Getters.getPhotoUri(photo, '@thumb');
        });
    });

};

let exports = injections;
exports.push(controller);

module.exports = exports;