let injections = ['Categories'];

let controller = function (Categories) {
    this.availableSkills = [];
    this.categories = Categories.query({type: 'skill'}, () => {
        this.categories.forEach(category => {
            this.availableSkills = this.availableSkills.concat(category.skills);
        });
    });

    this.searchedSkills = [];
    this.selectedSkill = null;
    this.searchText = null;

    this.querySearch = query => query ? this.availableSkills.filter(createFilterFor(query)) : [];

    function createFilterFor(query) {
        return skill => angular.lowercase(skill.name).indexOf(angular.lowercase(query)) === 0;
    }
};

let exports = injections;
exports.push(controller);

module.exports = exports;