import { width, height } from "../app.js";
import glyph from "./glyph.js";
import cloud from "../assets/cloud.js";
import orbsList from "../assets/orbs.js";
import { getRandInt } from "../utils/math.js";
// const testNum = 6;
// const orbs = new Array(testNum).fill({});


let glyphSize = 8;
let orbs;
let enemyOrbs;
let self = 0;
let enemy = 0;
let time = 0;
let selfConfig;
let enemyConfig;
let currState;
let ctx = main.getContext("2d");
let player = 1;
window.addEventListener("keydown", handleInput, false);

async function state(state) {
    currState = state;
    switch (state) {
        case "game":
            init();
            break;
        case "gameOver":
            ctx.clearRect(0, 0, width, height);
            break;
    }
}

function init() {
    makeOrbsLists(orbsList);
    selfConfig = {
        type: "self",
        hp: 20,
        orbs: orbs,
        x: width / 2.75,
        y: height / (3 / 2),
        r: height / 4,
    };
    enemyConfig = {
        type: "enemy",
        hp: 20,
        orbs: enemyOrbs,
        x: width * (3 / 4),
        y: height / 5,
        r: height / 7,
    };
    self = selfConfig.hp;
    enemy = enemyConfig.hp;
    renderFrame();
}

function handleInput(e) {
    if(player === 2){return}
    e.preventDefault();
    const key = e.keyCode;
    const directions = [37,39,65,68]
    directions.includes(key) ?
    game(key) :
    changeSize(key);
}

async function game(key) {
    rotate(key, selfConfig);
    renderFrame();
    player = 2;
    setTimeout(() => {
        let keys = [37, 39];
        let keyCode = keys[getRandInt(0, 2)];
        rotate(keyCode, enemyConfig);
        renderFrame();
        player = 1;
    }, 1000);
}

function rotate(keyCode, player) {
    if (currState === "gameOver") {
        return;
    }
    switch (keyCode) {
        case 39:
        case 68:
            action(player, "forward");
            player.orbs.unshift(player.orbs.pop());
            break;
        case 37:
        case 65:
            action(player, "backward");
            player.orbs.push(player.orbs.shift());
            break
    }
}

function changeSize(keyCode){
    switch (keyCode) {
        case 38:
        case 87:
            if (glyphSize < 8) {
                glyphSize++;
                init();
            }
            break;
        case 40:
        case 83:
            if (glyphSize > 1) {
                glyphSize--;
                init();
            }
            break;
    }
}

function stats() {
    let stats = [
        ["Self", self],
        ["Enemy", enemy],
        ["Time", time],
    ];
    let statCol = width / 28;
    stats.forEach((stat, i) => {
        let statRow = height / 5 + i * 50;
        ctx.font = `25px georgia`;
        ctx.textBaseline = "middle";
        ctx.textAlign = "left";
        ctx.fillStyle = "#fffeeb";
        ctx.fillText(`${stat[0]}: ${stat[1]}`, statCol, statRow);
    });
}

function renderFrame() {
    ctx.clearRect(0, 0, width, height);
    title("CHRONOMANCER", width / 7, height / 8);
    glyph.draw(enemyConfig);
    cloud.draw(enemyConfig, selfConfig);
    glyph.draw(selfConfig);
    stats();
}

function makeOrbsLists(orbsList) {
    let orbsArr = [];
    for (let i = 0; i < glyphSize; i++) {
        orbsArr.push(orbsList[i]);
    }
    orbs = orbsArr.map((x) => x);
    enemyOrbs = orbsArr.map((x) => x);
}

function action(player, dir) {
    let opponent = player.type === "self" ? enemyConfig : selfConfig;
    player.hp += player.orbs[0].action[dir][0].self;
    opponent.hp -= player.orbs[0].action[dir][0].attack;
    time += player.orbs[0].action[dir][0].time;
    if (
        time >= 100 ||
        time <= -100 ||
        selfConfig.hp < 0 ||
        enemyConfig.hp < 0
    ) {
        state("gameOver");
        if (selfConfig.hp < 0) {
            self = 0;
        }
        if (enemyConfig.hp < 0) {
            enemy = 0;
        }
    } else {
        self = selfConfig.hp;
        enemy = enemyConfig.hp;
    }
}

function title(primText, x, y) {
    ctx.font = `${x / 4}px georgia`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    ctx.fillStyle = "#fffeeb";
    ctx.fillText(primText, x/4, y);
}

export { state, orbs };
