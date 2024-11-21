"use strict";

const nuevoNum = (lista) => {
    const LIMIT = 3185296;

    let li = document.createElement("li");
    li.textContent = Math.floor(Math.random() * LIMIT + 1);
    lista.appendChild(li);
}

const LISTA = document.getElementById("listaDes");
const BOTON = document.getElementById("nuevoNumButton");

BOTON.addEventListener("click", () => {
    nuevoNum(LISTA);
})