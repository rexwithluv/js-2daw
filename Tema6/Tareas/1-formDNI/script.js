"use strict";

const form = document.getElementById("formulario");
const dni = document.getElementById("dni");

const msj = document.getElementById("mensaje");

// Validar si el DNI es correcto
const dniValido = (dni) => {
    const regex = /\d{8}[A-Z]/gi
    return regex.test(dni);
};

// Cuando perdemos el foco del campo DNI
dni.addEventListener("focusout", () => {
    if (!dniValido(dni.value)) {
        msj.textContent = "El DNI no es válido. Debe seguir el siguiente formato: 123456789A";
        msj.toggleAttribute("hidden");
    }
});

// Decoración
dni.addEventListener("focusin", () => {
    msj.textContent = "";
    msj.hidden = true;
});

// Eliminamos el comportamiento por defecto
form.addEventListener("submit", (evnt) => {
    evnt.preventDefault();
});

// Cuando enviamos el formulario como tal
form.addEventListener("submit", () => {
    if (!dniValido(dni.value)) {
        msj.textContent = "El DNI no es válido. Debe seguir el siguiente formato: 123456789A";
        msj.toggleAttribute("hidden");
    }
});