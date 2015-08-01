import { shuffle, length } from './../../../utility';
import data from './data.js';

let injections = [];

let controller = function () {

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

    this.languages = [
        {name: "English", level: 5},
        {name: "Greek", level: 5},
        {name: "French", level: 3},
        {name: "German", level: 1}
    ];

    this.length = length;
};

let exports = injections;
exports.push(controller);

module.exports = exports;