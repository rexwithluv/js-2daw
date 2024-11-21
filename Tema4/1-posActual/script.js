"use strict";

document.addEventListener("mousemove", (evnt) => {
    const x = evnt.clientX;
    const y = evnt.clientY;

    let posicionRaton = document.getElementById("posicion-raton");
    posicionRaton.textContent = `X: ${x}; Y:${y}`;
});