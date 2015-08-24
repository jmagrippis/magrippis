let injections = ['Categories'];

let controller = function (Categories) {

    this.categories = Categories.query({type: 'hobby'});

};

let exports = injections;
exports.push(controller);

module.exports = exports;