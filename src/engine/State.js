import { width, height } from "../app.js";
import glyph from "./glyph.js";
import cloud from "../assets/cloud.js";
import orbsList from "../assets/orbs.js";
import { getRandInt } from "../utils/math.js";
// const testNum = 6;
// const orbs = new Array(testNum).fill({});

window.addEventListener("keydown", game, false);
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
async function state(state) {
    currState = state;
    switch (state) {
        case "game":
            fillGlyph(orbsList);
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
            break;
        case "gameOver":
            ctx.clearRect(0, 0, width, height);
            break;
    }
}

function game(e) {
    e.preventDefault();
    rotate(e.keyCode, selfConfig);
    setTimeout(() => {
        let keyCode = 39;
        rotate(keyCode, enemyConfig);
    }, 1000);
}

function rotate(keyCode, player) {
    if (currState === "gameOver") {
        return;
    }
    //console.log(e.keyCode)
    switch (keyCode) {
        case 39:
        case 68:
            right(player);
            renderFrame();
            break;
        case 38:
        case 87:
            if (glyphSize < 8) {
                glyphSize++;
                state("game");
            }
            break;
        case 40:
        case 83:
            if (glyphSize > 1) {
                glyphSize--;
                state("game");
            }
            break;
        case 37:
        case 65:
            left(player);
            renderFrame();
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
        let statRow = height / 5 + i * 100;
        ctx.font = `25px georgia`;
        ctx.textBaseline = "middle";
        ctx.textAlign = "left";
        ctx.fillStyle = "white";
        ctx.fillText(`${stat[0]}: ${stat[1]}`, statCol, statRow);
    });
}

function renderFrame() {
    ctx.clearRect(0, 0, width, height);
    title("Chronomancer", width / 7, height / 8);
    glyph.draw(enemyConfig);
    //cloud.draw(enemyConfig, selfConfig);
    glyph.draw(selfConfig);
    stats();
}

function fillGlyph(orbsList) {
    let orbsArr = [];
    for (let i = 0; i < glyphSize; i++) {
        orbsArr.push(orbsList[i]);
    }
    orbs = orbsArr.map((x) => x);
    enemyOrbs = orbsArr.map((x) => x);
}

function right(player) {
    action(player, "forward");
    player.orbs.unshift(player.orbs.pop());
}

function left(player) {
    action(player, "backward");
    player.orbs.push(player.orbs.shift());
}

function action(player, dir) {
    let opponent = player.type === "self" ? enemyConfig : selfConfig;
    player.hp += player.orbs[0].action[dir][0].self;
    opponent.hp -= player.orbs[0].action[dir][0].attack;
    time += player.orbs[0].action[dir][0].time;
    if (time >= 100 || time <= -100) {
        state("gameOver");
    } else {
        self = selfConfig.hp;
        enemy = enemyConfig.hp;
    }
}

function title(primText, x, y) {
    ctx.font = `${x / 4}px georgia`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "#fffeeb";
    ctx.fillText(primText, x, y);
}

export { state, orbs };
