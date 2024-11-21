"use strict";

const velocidad = document.getElementById("velocidad");
let counter = 0;
const LIMIT_SPEED = 120;

document.addEventListener("keydown", (evnt) => {
    // Flechas del teclado ArrowDown|Up|Left|Right
    let tecla = evnt.key;

    if (tecla == "ArrowDown") {
        counter = Math.max(0, counter - 1);
    }
    if (tecla == "ArrowUp") {
        counter = Math.min(LIMIT_SPEED, counter + 1);
    };

    velocidad.textContent = counter;
});

