import State from './engine/State.js';
import Text from './objects/Text.js'

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

    new Text({type: 'title', primText:'Chronomancer'})
    new State(storedState);
}



export {main, ctx, width, height};