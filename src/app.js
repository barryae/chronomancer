import {state} from './engine/state.js';

let storedState = localStorage.getItem('state')
let main;
let ctx;
let width;
let height;

window.onload = window.onresize = () => {
    load()
}

function load() {
    localStorage.getItem('state') ? 
    storedState = localStorage.getItem('state') :
    storedState = 'start'
    localStorage.setItem('state', 'start');

    main = document.querySelector('#main')
    ctx = main.getContext('2d');

    width = main.width = window.innerWidth;
    height = main.height = window.innerHeight;

    title('Chronomancer',width/7,height/8);
    state(storedState);
}

function title(primText,x,y) {
    ctx.font = `${x/4}px georgia`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#fffeeb';
    ctx.fillText(primText, x, y)

}

export {main, ctx, width, height};