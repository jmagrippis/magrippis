let injections = ['Projects'];

let controller = function (Projects) {
    this.projects = Projects.query();
};

let exports = injections;
exports.push(controller);

module.exports = exports;