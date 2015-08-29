let injections = ['Projects', 'Getters'];

let controller = function (Projects, Getters) {
    this.projects = Projects.query(projects => {
        projects.forEach(project => {
            project.featured_uri = Getters.getPhotoUri(project.photos[0]);
        });
    });
};

let exports = injections;
exports.push(controller);

module.exports = exports;