let injections = ['$filter', 'Categories', 'Getters'];

let controller = function ($filter, Categories, Getters) {

    this.categories = Categories.query({type: 'hobby'}, categories => {
        categories.forEach(category => {
            category.featured_photo = category.photos.filter(photo => photo.featured)[0];
            category.featured_photo.uri = Getters.getPhotoUri(category.featured_photo);
            category.photos.forEach(function(photo) {
                photo.uri = Getters.getPhotoUri(photo);
                photo.thumb_uri = Getters.getPhotoUri(photo, '@thumb');
            });
        });
    });

};

let exports = injections;
exports.push(controller);

module.exports = exports;