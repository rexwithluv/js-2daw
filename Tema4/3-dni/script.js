"use strict";

let LETTERS = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

const calcularDni = (num) => {
    return LETTERS[num % 23];
};

let listaDni = document.getElementById("lista-dni");

const button = document.getElementById("boton");
button.addEventListener("click", () => {

    listaDni.textContent = "";
    const letraDni = document.getElementById("letra-dni").value;

    const LIMIT = 10000;
    for (let i = 1; i < LIMIT; i++) {
        if (calcularDni(i) == letraDni) {
            let li = document.createElement("li");
            li.textContent = i.toString().padStart(4, "0") + letraDni;
            listaDni.append(li);
        }
    }
});



