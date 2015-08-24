let injections = ['Categories'];

let controller = function (Categories) {
    this.availableSkills = [];
    this.categories = Categories.query({type: 'skill'}, () => {
        this.categories.forEach(category => {
            this.availableSkills = this.availableSkills.concat(category.skills);
        });

        console.log(this.availableSkills);
    });

    this.searchTags = [];
    this.selectedSkill = {};
    this.searchText = '';

    this.querySearch = query => {
        let results = query ? this.availableSkills.filter(createFilterFor(query)) : [];
        return results;
    };

    function createFilterFor(query) {
        let lowercaseQuery = angular.lowercase(query);
        return skill => skill.name.indexOf(lowercaseQuery) === 0;
    }
};

let exports = injections;
exports.push(controller);

module.exports = exports;