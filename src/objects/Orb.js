import Text from './Text.js'
export default class Orb {
    constructor (orb) {
        this.name = orb.name;
        this.ctx = main.getContext('2d')
        this.text;
    }

    draw(x,y,r) {
        this.ctx.beginPath();
        this.ctx.arc(x,y,r, 0, Math.PI * 2, true)
        this.ctx.stroke();
        this.text = new Text({type:'orb',primText:this.name, x: x, y:y})
    }

}