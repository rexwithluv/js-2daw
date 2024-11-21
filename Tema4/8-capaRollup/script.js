"use strict";

const capa = document.getElementById("capa");

// Colors
const emptyColor = "#c2c2c200";
const green = "#9cff5e";
const blue = "#5ed7ff";
const red = "#ff4747";

const changeColor = (color) => {
    capa.style.backgroundColor = color;
};

capa.addEventListener("mouseover", () => changeColor(green));

capa.addEventListener("mouseleave", () => changeColor(emptyColor));

capa.addEventListener("mouseup", () => capa.style.backgroundColor = green);

// Para evitar que habrá el menú contextual más adelante
capa.addEventListener("contextmenu", (evnt) => {
    evnt.preventDefault();
});

capa.addEventListener("mousedown", (evnt) => {
    // 0: Botón izq | 1: Botón central (rueda) | 2: Botón derecho
    if (evnt.button == 0) {
        changeColor(red);
    } else if (evnt.button == 2) {
        changeColor(blue);
    }
});


