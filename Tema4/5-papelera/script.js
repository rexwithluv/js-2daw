"use strict";

const paper = document.getElementById("paper");
const bin = document.getElementById("bin");

bin.addEventListener("dragover", (evnt) => {
    // Yo no acabo de entender para que es esta línea pero
    // en los mozilla docs la ponen y si no no funciona
    evnt.preventDefault();
});

bin.addEventListener("drop", () => {
    bin.src = "images/papelera-llena.png";
});

// Añadido solo por el meme
document.getElementById("button").addEventListener("click", () => {
    bin.src = "images/papelera-vacia.png";
});