import {width,height} from '../app.js';
const ctx = main.getContext('2d');

let x;
let y;
let r;
const showCenter = true;
let currOrb;
let angle; 
let radians;
let centerR;
let orbX; 
let orbY; 
let orbR; 
let orbs;

function draw(newOrbs) {
    if(newOrbs){orbs=newOrbs}
    ctx.clearRect(x-r*4/3, y-r*4/3, r*3, r*4)
    x = width/2;
    y = height/2;
    r = height/4;
    if(showCenter){
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2, true);
        ctx.fillStyle = 'beige';
        ctx.fill();
    };
    // Orbs
    drawOrbs()
}

function drawOrbs() {
    const sections = orbs.length;
    orbs.forEach((orbItem,i)=>{
        currOrb = orbItem
        angle = i * (360/sections)+90;
        radians = angle/180*Math.PI;
        centerR = r*(2/3);
        orbX = x + centerR * Math.cos(radians);
        orbY = y - centerR * Math.sin(radians);
        orbR = r*(14-sections)/25;
        drawOrb();
    })
}

function drawOrb() {
    const {
        name,
        color,
        textColor
    } = currOrb
    ctx.beginPath();
    ctx.arc(orbX,orbY,orbR, 0, Math.PI * 2, true)
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill()
    text(name, orbX, orbY, textColor)
}

function text(name,x,y,color){
    ctx.font = '30px georgia';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = color;
    ctx.fillText(name, x, y)
}

export default {draw}