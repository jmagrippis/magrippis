let injections = ['$resource'];

let factory = function ($resource) {
    return $resource('/api/v1/categories/:id', null, {
        query: {
            method: "GET",
            cache: true,
            isArray:true
        }
    });
};

let exports = injections;
exports.push(factory);

module.exports = exports;