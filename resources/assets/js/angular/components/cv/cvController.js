import { shuffle, length } from './../../../utility';
import data from './data.js';

let injections = ['Jobs'];

let controller = function (Jobs) {

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

    this.qualities =  data.qualities;

    this.skills = data.skills;

    this.languages = data.languages;

    this.length = length;

    this.jobs = Jobs.query();
};

let exports = injections;
exports.push(controller);

module.exports = exports;