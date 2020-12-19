import {ctx, height, width} from '../app.js'

export default class Text {
    validTypes = ['title','orb']
    constructor(txtObj){
        this.type = txtObj.type
        this.primText = txtObj.primText
        this.x = txtObj.x
        this.y = txtObj.y
        this.ctx = main.getContext('2d')

        this.validTypes.indexOf(this.type)!=-1?
        this[this.type]():
        this.default()
    }

    default(){
        this.ctx.font = '20px serif';
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(this.primText, this.x, this.y)
    }

    title() {
        this.ctx.font = '40px serif';
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(this.primText, width/4, height/8)
    }

    orb(){
        this.ctx.font = '20px serif';
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(this.primText, this.x, this.y)
    }

}

