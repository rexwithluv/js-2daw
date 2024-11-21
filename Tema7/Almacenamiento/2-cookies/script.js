"use strict";


// Función para obtener el valor de una cookie
function getCookie(name) {
    let nameEq = name + "=";

    // Obtiene todas las cookies
    let allCookies = document.cookie.split(';');

    for (let i = 0; i < allCookies.length; i++) {
        let cookie = allCookies[i];

        // Eliminamos los espacios que pueda tener
        while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);

        // Si la cookie tiene el nombre que buscamos, devolvemos sus valores
        if (cookie.indexOf(nameEq) == 0) {
            return cookie.substring(nameEq.length, cookie.length)
        };
    }
    return null;
}

// Función para establecer una cookie
function setCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    let expira = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expira + ";path=/";
}

// Obtener el número de visitas actual
let visitas = getCookie("contador");

// Si no existe la cookie, inicializarla a 1
if (visitas === null) {
    visitas = 1;
} else {
    // Si existe, incrementar el valor
    visitas = parseInt(visitas) + 1;
}

// Establecer la cookie con el nuevo valor
setCookie("contador", visitas, 365); // La cookie expira en 1 año

// A partir de aquí es mi código
const counter = document.getElementById("counter");
counter.value = visitas + " visita[s]";