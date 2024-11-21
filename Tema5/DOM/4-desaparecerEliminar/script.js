"use strict";

document.getElementById("boton").addEventListener("click", () => {
    parrafos.forEach((parrafo) => {
        parrafo.removeAttribute("hidden");
    })
});

let singleClickTimer;
const clickDelay = 300;

const handleSingleClick = (event) => {
    clearTimeout(singleClickTimer);

    // Si hacemos otro click antes de que finalice el temporizador,
    // cancelará el click simple
    singleClickTimer = setTimeout(() => {
        document.getElementById(event.target.id).toggleAttribute("hidden");
    }, clickDelay);
};

const handleDoubleClick = (event) => {
    clearTimeout(singleClickTimer);

    document.getElementById(event.target.id).remove();
};

const parrafos = document.querySelectorAll("#parrafo1, #parrafo2, #parrafo3");
parrafos.forEach(parrafo => {
    parrafo.addEventListener("click", handleSingleClick);
    parrafo.addEventListener("dblclick", handleDoubleClick);
});
