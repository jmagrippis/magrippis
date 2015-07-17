var injections = ['$resource'];

var factory = function ($resource) {
    return $resource("/api/v1/categories/:id");
};

var exports = injections;
exports.push(factory);

module.exports = exports;