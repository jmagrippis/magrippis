var injections = [];

var controller = function () {
    console.log('we are home!');
};

var exports = injections;
exports.push(controller);

module.exports = exports;