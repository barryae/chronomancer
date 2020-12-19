import {width,height} from '../app.js';

export default class Orb {
    constructor (orb) {
        this.name = orb.text;
        this.x = orb.x;
        this.y = orb.y;
    }

    render() {
        this.ctx = main.getContext('2d');
        this.ctx.font = '20px serif';
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';
        const startTxt = this.name;
        this.ctx.fillText(startTxt, this.x, this.y)
    }
}