import { shuffle } from './../../../utility';

let injections = [];

let controller = function () {

    this.titles = [
        {name: 'App Developer', active: true},
        {name: 'Web Designer', active: false},
        {name: 'Peculiar Photographer', active: false},
        {name: 'Relentless Writer', active: false},
        {name: 'Professional Programmer', active: false},
        {name: 'SQL Samurai', active: false},
        {name: 'Ninja Javascripter', active: false},
        {name: 'MongoDB Magician', active: false},
        {name: 'Stylish Sysadmin', active: false},
        {name: 'Computer Scientist', active: false}
    ];

    shuffle(this.titles);

    this.currentKey = 0;

    this.retitle = () => {
        if (this.currentKey == this.titles.length - 1) {
            shuffle(this.titles);
            this.currentKey = -1;
        }
        this.currentKey++;
    }
};

let exports = injections;
exports.push(controller);

module.exports = exports;