import {width,height} from '../app.js';
import Orb from './Orb.js';

export default class Glyph {
    constructor(){
    this.x = width/2;
    this.y = height*(2/3);
    this.orbs = [];
    }
    
    mapOrbs(orbLedger) {
        this.orbs = orbLedger.map((orbItem) => {
            let orb = new Orb(orbItem)
            orb.x = this.x;
            orb.y = this.y;
            return orb
        })
    }

    render() {
        this.glyph = main.getContext('2d');
        this.glyph.beginPath();
        this.glyph.arc(this.x, this.y, height/4, 0, Math.PI * 2, true);
        this.glyph.stroke();

        // Orbs
        this.orbs.forEach(orb=>orb.render())
    }
}