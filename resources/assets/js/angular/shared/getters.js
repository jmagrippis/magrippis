let injections = [];

let factory = function () {
    return {
        getPhotoUri: (photo, size) => {
            size = typeof size !== 'undefined' ? size : '';
            return '/' + photo.directory + photo.slug + size + '.' + photo.extension
        }
    };
};

let exports = injections;
exports.push(factory);

module.exports = exports;