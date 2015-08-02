import { shuffle, length } from './../../../utility';
import data from './data.js';

let injections = ['Jobs', 'Diplomas'];

let controller = function (Jobs, Diplomas) {

    this.titles = data.titles;

    shuffle(this.titles);

    this.currentKey = 0;

    this.retitle = () => {
        this.titles[this.currentKey].active = false;
        if (this.currentKey == this.titles.length - 1) {
            shuffle(this.titles);
            this.currentKey = -1;
        }
        this.currentKey++;
        this.titles[this.currentKey].active = true;
    };

    this.expanded = data.expanded;

    this.toggle = section => {
        this.expanded[section] = !this.expanded[section];
    };

    this.qualities = data.qualities;

    this.skills = data.skills;

    this.skills.forEach(skill => {
        skill.default = skill.value;
    });

    this.snapSkill = skill => {
        skill.value = skill.default;
    };

    this.languages = data.languages;

    this.length = length;

    this.jobs = Jobs.query();

    this.diplomas = Diplomas.query();

    this.interests = data.interests;

    this.references = data.references;
};

let exports = injections;
exports.push(controller);

module.exports = exports;