let injections = [];

let controller = function () {
    console.log('we are at the portfolio page!');
};

let exports = injections;
exports.push(controller);

module.exports = exports;