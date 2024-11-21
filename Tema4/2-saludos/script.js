"use strict";

let interval;

const botonEmpezar = document.getElementById("comenzar");
botonEmpezar.addEventListener("click", () => {

    const SEG = 5000;
    interval = setInterval(() => {
        alert("Hola!");
    }, SEG);

});

const botonParar = document.getElementById("parar");
botonParar.addEventListener("click", () => {
    clearInterval(interval);
});