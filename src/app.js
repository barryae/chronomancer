import Glyph from '/objects/Glyph.js';

let state = localStorage.getItem('state')
let main;
let ctx;
let width;
let height;
let mainGlyph;

window.onload = () => {
    load();
}

window.onresize = () => {
    width = main.width = window.innerWidth;
    height = main.height = window.innerHeight;
    load()
}

function load() {
    
    localStorage.getItem('state') ? 
    state = localStorage.getItem('state') :
    state = 'start'
    localStorage.setItem('state', 'start');

    main = document.querySelector('#main')
    ctx = main.getContext('2d');
    width = main.width = window.innerWidth;
    height = main.height = window.innerHeight;

    switch (state){
        case 'start':
            start();
            break
    }
}

function start() {
    const orbs = [startOrb()]
    title();
    mainGlyph = new Glyph();
    mainGlyph.mapOrbs(orbs);
    mainGlyph.render();
}

function title() {
    ctx.font = '40px serif';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    const startTxt = 'Chronomancer'
    ctx.fillText(startTxt, width/4, height/8)
}

function startOrb() {
    const startOrb = {
        text: 'Start'
    }
    return startOrb;
}

export {main, ctx, width, height, mainGlyph};