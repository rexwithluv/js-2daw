"use strict";

const remarcarPalabras = (texto, palabra) => {
    const regex = new RegExp(`(${palabra})`, "gi");
    const textoNuevo = texto.replace(regex, "<mark>$1</mark>")

    return textoNuevo;
}

const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    const parrafos = document.querySelectorAll("p");
    const palabraBuscar = document.getElementById("texto").value;

    let primeraCoincidencia;
    parrafos.forEach((p) => {
        p.innerHTML = remarcarPalabras(p.textContent, palabraBuscar);

        if (!primeraCoincidencia) {
            primeraCoincidencia = p.querySelector("mark");
        }
    });

    if (primeraCoincidencia) {
        primeraCoincidencia.scrollIntoView({ behavior: "smooth" });
    }
});


