angular.module('magrippis.home', [])
    .controller('HomeController', require('./homeController.js'))
    .filter('hasSkill', function () {
        return function (categories, skills) {

            return categories.filter(category => {
                let skillIds = [];
                category.skills.forEach(skill => {
                    skillIds.push(skill.id);
                });
                let hasSkill = false;
                skills.some(function (skill) {
                    hasSkill = skillIds.indexOf(skill.id) > -1;
                    return hasSkill;
                });
                return hasSkill;
            });

        };
    })
    .filter('doesNotHaveSkill', function () {
        return function (categories, skills) {

            if (skills.length === 0) return [];

            return categories.filter(category => {
                let skillIds = [];
                category.skills.forEach(skill => {
                    skillIds.push(skill.id);
                });
                let hasSkill = false;
                skills.some(function (skill) {
                    hasSkill = skillIds.indexOf(skill.id) > -1;
                    return hasSkill;
                });
                return !hasSkill;
            });

        };
    });

module.exports = 'magrippis.home';