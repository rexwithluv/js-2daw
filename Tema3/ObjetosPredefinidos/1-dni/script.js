"use strict";

const calculateDNI = (dni) => {
    const LETTERS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    listaLetras.push(LETTERS[dni % 23]);
}

let listaLetras = [];
let dniUser;
const SEGUNDOS = 20000
const LISTA_DOM = document.getElementById("lista");

let interval = setInterval(() => {
    dniUser = prompt("Dame tu DNI");

    if (dniUser === "-1") {
        clearInterval(interval);

        // Así ya no ejecutará el siguiente código
        return;
    }

    calculateDNI(parseInt(dniUser));

    LISTA_DOM.innerHTML = "";

    listaLetras.forEach(letra => {
        let li = document.createElement("li");
        li.textContent = letra;
        LISTA_DOM.appendChild(li);
    });

}, SEGUNDOS);



