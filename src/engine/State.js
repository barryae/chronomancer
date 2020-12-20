import glyph from './glyph.js'
import orbsList from '../assets/orbs.js'
// const testNum = 6;
// const orbs = new Array(testNum).fill({});

window.addEventListener("keydown",rotate,false)
let glyphSize = 8;
let orbs;
fillGlyph(orbsList);

async function state(state) {
    switch (state){
        case 'start':
            glyph.draw(orbs)
            break
    }
    
}

function fillGlyph(orbsList) {
    let orbsArr = [];
    for(let i=0;i<glyphSize;i++){
        orbsArr.push(orbsList[i])
    }
    orbs = orbsArr;
}

function rotate(e) {
    //console.log(e.keyCode)
    switch(e.keyCode) {
        case 39:
        case 68:
            right()
            glyph.draw(orbs);
            break
        case 38:
            if(glyphSize<8){
                glyphSize++
                fillGlyph(orbsList);
                glyph.draw(orbs);
            };
            break;
        case 40:
            if(glyphSize>0){
                glyphSize--
                fillGlyph(orbsList)
                glyph.draw(orbs);
            };
            break;
        case 37:
        case 65:
            left()
            glyph.draw(orbs);
            break
    }
    e.preventDefault();
}

function right() {
    orbs.unshift(orbs.pop());
}

function left() {
    orbs.push(orbs.shift());
}

export {state, orbs};