let injections = ['$filter', 'Posts', 'Categories', 'Tags'];

let controller = function ($filter, Posts, Categories, Tags) {

    this.posts = Posts.query();

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