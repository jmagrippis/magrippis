let injections = ['$filter', 'Posts', 'Categories', 'Tags', 'Getters'];

let controller = function ($filter, Posts, Categories, Tags, Getters) {

    this.posts = Posts.query(posts => {
        posts.forEach(post => {
            post.featured_photo = post.photos.filter(photo => photo.featured)[0];
            post.featured_photo.uri = Getters.getPhotoUri(post.featured_photo);
            post.photos.forEach(photo => {
                photo.uri = Getters.getPhotoUri(photo);
                photo.thumb_uri = Getters.getPhotoUri(photo, '@thumb');
            });
        });
    });

    this.categories = Categories.query({type: 'post'}, () => {
        this.categories.forEach(category => {
            category.checked = true;
        });
    });

    this.tags = Tags.query(null, () => {
        this.tags = $filter('orderBy')(this.tags, 'name');
    });

    this.toggleChecked = object => {
        object.checked = !object.checked;
    }

};

let exports = injections;
exports.push(controller);

module.exports = exports;