const ctx = main.getContext("2d");

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
let storedConfig;

function draw(config) {
    storedConfig = config;
    if (config.orbs) {
        orbs = config.orbs;
    }
    x = config.x;
    y = config.y;
    r = config.r;
    //ctx.clearRect(x-r*4/3, y-r*4/3, r*3, r*(5/2))
    if (showCenter) {
        // Shadow
        ctx.beginPath();
        ctx.arc(x + r / 30, y + r / 30, r, 0, Math.PI * 2, true);
        ctx.fillStyle = "lightgrey";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2, true);
        ctx.fillStyle = "beige";
        ctx.fill();
        ctx.closePath();
    }
    // Orbs
    drawOrbs();
}

function drawOrbs() {
    const sections = orbs.length;
    orbs.forEach((orbItem, i) => {
        currOrb = orbItem;
        angle = i * (360 / sections);
        radians = (angle / 180) * Math.PI;
        centerR = r * (2 / 3);
        orbX = x + centerR * Math.sin(radians);
        orbY = y - centerR * Math.cos(radians);
        orbR = (r * (14 - sections)) / 25;
        drawOrb();
    });
}

function drawOrb() {
    const {
        name,
        style: { color, textColor },
    } = currOrb;

    // Shadow
    ctx.beginPath();
    ctx.arc(orbX + r / 50, orbY + r / 50, orbR, 0, Math.PI * 2, true);
    ctx.fillStyle = "lightgrey";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(orbX, orbY, orbR, 0, Math.PI * 2, true);
    ctx.strokeStyle = "lightgrey";
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();

    text(name, orbX, orbY, textColor);
}

function text(name, x, y, color) {
    ctx.font = `${(orbR * 3) / 7}px georgia`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = color;
    ctx.fillText(name, x, y);
}

export default { draw };
