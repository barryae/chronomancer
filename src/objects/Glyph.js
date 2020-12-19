import {width,height} from '../app.js';

export default class Glyph {
    constructor(orbs){
    this.x = width/2;
    this.y = height/2;
    this.r = height/4
    this.orbs = orbs;
    this.ctx = main.getContext('2d');
    this.showCenter = false
    }

    renderGlyph() {
        if(this.showCenter){
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
            this.ctx.stroke();
        }
        // Orbs
        this.renderOrbs();
    }

    renderOrbs() {

        const sections = this.orbs.length;

        this.orbs.forEach((orb,i)=>{
            const angle = i * (360/sections)+90;
            const radians = angle/180*Math.PI;
            const centerR = this.r*(2/3);
            const orbX = this.x + centerR * Math.cos(radians);
            const orbY = this.y - centerR * Math.sin(radians);
            const orbR = this.r*(14-sections)/25;
            orb.draw(orbX,orbY,orbR);
        })

    }
}