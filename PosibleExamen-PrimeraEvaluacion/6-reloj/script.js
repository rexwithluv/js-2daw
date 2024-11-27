"use strict";

// Funciones
function capitalize(str) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

function getUsername() {
    document.getElementById("username").textContent = localStorage.getItem("username") ?? null;
}

function getWeekDayName() {
    let weekDays = {
        1: "lunes",
        2: "martes",
        3: "miércoles",
        4: "jueves",
        5: "viernes",
        6: "sábado",
        0: "domingo",
    }

    return capitalize(weekDays[new Date().getDay()]);
}

// Constantes
const buttonUsername = document.getElementById("buttonUsername");
const buttonSegundos = document.getElementById("buttonSegundos");

const diaSemanaDOM = document.getElementById("diaSemana");
const fechaDOM = document.getElementById("fecha");
const horaDOM = document.getElementById("hora");

let mostrarSegundos = false;

// Listeners
buttonUsername.addEventListener("click", () => {
    const username = " " + capitalize(prompt("Dame el nombre que quieres que se muestre: "));
    document.getElementById("username").textContent = username;
    localStorage.setItem("username", username);
});

buttonSegundos.addEventListener("click", () => {
    if (mostrarSegundos) {
        horaDOM.textContent = new Date().toLocaleTimeString("es-ES").slice(0, 5);
    } else {
        horaDOM.textContent = new Date().toLocaleTimeString("es-ES");
    }
    mostrarSegundos = !mostrarSegundos;
});

// Actualizamos username, fecha y hora
getUsername();
diaSemanaDOM.textContent = getWeekDayName();
fechaDOM.textContent = new Date().toLocaleDateString("es-ES");
horaDOM.textContent = new Date().toLocaleTimeString("es-ES").slice(0, 5);

// Mantenemos el reloj actualizado
setInterval(() => {
    diaSemanaDOM.textContent = getWeekDayName();
    fechaDOM.textContent = new Date().toLocaleDateString("es-ES");
    if (mostrarSegundos) {
        horaDOM.textContent = new Date().toLocaleTimeString("es-ES");
    } else {
        horaDOM.textContent = new Date().toLocaleTimeString("es-ES").slice(0, 5);
    }
}, 1000);