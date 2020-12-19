window.onload = () => {
    load();
    text();
}

window.onresize = () => {
    width = main.width = window.innerWidth;
    height = main.height = window.innerHeight;
    text();
}

function load() {
    main = document.querySelector('#main')
    ctx = main.getContext('2d');
    width = main.width = window.innerWidth;
    height = main.height = window.innerHeight;
}

function text() {
    ctx.font = '40px serif';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    const startTxt = 'Chronomancer'
    ctx.fillText(startTxt, width/3, height/5)
}

