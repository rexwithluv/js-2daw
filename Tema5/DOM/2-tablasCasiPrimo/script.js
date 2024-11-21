"use strict";

const createTable = (tabla) => {
    const FILAS = 100, COLUMNAS = 100;
    let counter = 1;

    for (let i = 0; i < FILAS; i++) {
        let tr = document.createElement("tr");

        for (let j = 1; j <= COLUMNAS; j++) {
            let td = document.createElement("td");
            td.textContent = counter;
            counter++;
            tr.appendChild(td);
        }

        tabla.appendChild(tr);
    }
}

const esCasiPrimo = (num) => {
    if (num <= 1) return false; // Los números menores o iguales a 1 no son casi primos

    let divisores = 0;

    // Contamos los divisores
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores++;
        }
    }

    // Un número casi primo tiene exactamente 3 divisores
    return divisores === 3;
}

const TABLA = document.getElementById("tablaNumeros");
createTable(TABLA);

let estilosAplicados = false;
const aplicarEstilos = (estApl) => {
    const CELDAS = document.querySelectorAll("#tablaNumeros td")

    if (!estApl) {
        CELDAS.forEach((celda) => {
            if (esCasiPrimo(celda.textContent)) {
                celda.classList.add("casiPrimo");
            }
        });


    } else {
        CELDAS.forEach((celda) => {
            celda.classList.remove("casiPrimo");
        });
    }

    estilosAplicados = !estilosAplicados;
}

const BOTON = document.getElementById("botonActivarDesactivar");
BOTON.addEventListener("click", () => {
    aplicarEstilos(estilosAplicados);
    console.log(estilosAplicados);
})

// LA TABLA NO FUNCIONA CORRECTAMENTE
