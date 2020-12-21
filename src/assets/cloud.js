const ctx = main.getContext("2d");

let x;
let y;
let r;

function draw(enemy, self) {
    x = (enemy.x + self.x) / 2;
    y = (enemy.y + self.y) / 2;
    r = enemy.r;
    let top = enemy.y + r / 3;
    let bot = self.y;
    let left = main.width / 10;
    let right = enemy.x + r * 2;
    let clouds = 100;

    for (let i = 0; i < clouds; i++) {
        let currX = getRandomInt(left, right);
        let ratio = right / currX;
        let currY = getRandomInt(top * ratio, bot);
        if (currY > self.y) {
            currY = getRandomInt(self.y, self.y + 50);
        }
        let r = ((getRandomInt(enemy.r / 4, enemy.r) / ratio) * 3) / 2;
        if (r < 5) {
            r = 5;
        }
        ctx.beginPath();
        ctx.arc(currX, currY, r, 0, Math.PI * 2, true);
        ctx.fillStyle = "lightgrey";
        ctx.closePath();
        ctx.fill();
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default { draw };
