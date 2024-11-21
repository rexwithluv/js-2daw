"use strict";

// Botón para marcar todos
document.getElementById("marcar").addEventListener("click", () => {
    INPUTS.forEach((input) => {
        input.checked = true;
    });
});

// Botón para desmarcar todos
document.getElementById("desmarcar").addEventListener("click", () => {
    INPUTS.forEach((input) => {
        input.checked = false;
    });
});

// Generar los checkbox
const LIMIT = 100;
for (let i = 0; i < LIMIT; i++) {
    const CHECKBOXS = document.getElementById("checkboxs");

    let label = document.createElement("label");
    let input = document.createElement("input");

    input.setAttribute("type", "checkbox")
    label.append(input, Math.floor(Math.random() * 300));

    CHECKBOXS.appendChild(label);
};

// Seleccionar todos los inputs
const INPUTS = document.querySelectorAll("input");