"use strict";

$("#form").on("submit", function (ev) {
    ev.preventDefault();

    // Variables de validación
    const dniRegex = /^[XYZ]?\d{5,8}[A-Z]$/;
    const telefonoRegex = /^\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const webRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

    let errores = [];

    // Validación DNI
    const dni = $("#dni").val();
    if (!dniRegex.test(dni)) {
        errores.push("DNI no válido");
    }

    // Validación Nombre
    const nombre = $("#nombre").val();
    if (nombre.trim() === "" || nombre.length < 2) {
        errores.push("El nombre debe tener al menos 2 caracteres");
    }

    // Validación Edad
    const edad = $("#edad").val();
    if (isNaN(edad) || edad <= 0) {
        errores.push("Edad no válida");
    }

    // Validación Número de Hijos
    const hijos = $("#hijos").val();
    if (isNaN(hijos) || hijos < 0) {
        errores.push("Número de hijos no válido");
    }

    // Validación Teléfono
    const telefono = $("#telefono").val();
    if (!telefonoRegex.test(telefono)) {
        errores.push("Teléfono no válido");
    }

    // Validación Email
    const email = $("#email").val();
    if (!emailRegex.test(email)) {
        errores.push("Email no válido");
    }

    // Validación Página WEB
    const web = $("#web").val();
    if (web && !webRegex.test(web)) {
        errores.push("Página web no válida");
    }

    // Validación Contraseña
    const password = $("#password").val();
    if (password.length < 6) {
        errores.push("La contraseña debe tener al menos 6 caracteres");
    }

    if (errores.length > 0) {
        alert("Errores:\n" + errores.join("\n"));
    } else {
        alert("Formulario enviado correctamente");
    }
});