"use strict";

const HOUR = new Date().getHours();
const MSJ = document.getElementById("msj");

if (HOUR >= 9 && HOUR < 15) {
    MSJ.innerHTML = "Bienvenido!";
} else {
    MSJ.innerHTML = "Página cerrada";
}