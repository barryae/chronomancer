import { state } from "./engine/state.js";

let storedState = localStorage.getItem("state");
let main;
let ctx;
let width;
let height;

window.onload = window.onresize = () => {
    load();
};

function load() {
    localStorage.getItem("state")
        ? (storedState = localStorage.getItem("state"))
        : (storedState = "game");
    localStorage.setItem("state", "game");

    main = document.querySelector("#main");
    ctx = main.getContext("2d");

    width = main.width = window.innerWidth;
    height = main.height = window.innerHeight;

    state(storedState);
}

export { main, ctx, width, height };
