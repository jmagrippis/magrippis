let injections = ['Posts'];

let controller = function (Posts) {

    this.availableTags = [];
    this.availableCategories = [];

    this.posts = Posts.query(null, () => {
        this.posts.forEach(post => {
            this.availableTags = this.availableTags.concat(post.tags);
            this.availableCategories.push(post.category);
        });
    });

};

let exports = injections;
exports.push(controller);

module.exports = exports;