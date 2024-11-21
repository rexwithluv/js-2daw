// Estas dos funciones podrían ponerse como funciones flechas pero para mayor
// claridad de código (sabiendo que son bloques de código grandes) he decidido
// dejarlas como funciones normales.

function displayLugares() {
    let tablaLugares = document.getElementById("tablaLugares");
    tablaLugares.innerHTML = "";
    for (let i = 0; i < lugares.length; i++) {
        let filaActual = "<tr><td>" + (i + 1) + "</td><td>" + lugares[i] + "</td></tr>";
        tablaLugares.innerHTML += filaActual;
    }
}

// Sé que en esta función se repite una barbaridad de código pero una sabia
// profesora me dijo que 'Si funciona, no lo toques.'.
function modify(action) {
    const NOMBRE_LUGAR = document.getElementById("nombreLugar").value.toUpperCase();
    const POSICION = document.getElementById("posicion").value - 1;

    if (action == "start") {
        if (NOMBRE_LUGAR == "" || lugares.includes(NOMBRE_LUGAR)) {
            document.getElementById("observaciones").innerHTML += "<li>El lugar es inválido o está en la lista.</li>";
            return;
        }
        lugares.unshift(NOMBRE_LUGAR);

    } else if (action == "insert") {
        if (NOMBRE_LUGAR == "" || lugares.includes(NOMBRE_LUGAR)) {
            document.getElementById("observaciones").innerHTML += "<li>El lugar es inválido o está en al lista.</li>";
            return;
        } else if (POSICION < 0 || POSICION > lugares.length) {
            document.getElementById("observaciones").innerHTML += "<li>La posición es inválida.</li>";
            return;
        }
        lugares.splice(POSICION, 0, NOMBRE_LUGAR);

    } else if (action == "end") {
        if (NOMBRE_LUGAR == "" || lugares.includes(NOMBRE_LUGAR)) {
            document.getElementById("observaciones").innerHTML += "<li>El lugar es inválido o está en al lista.</li>";
            return;
        }
        lugares.push(NOMBRE_LUGAR);

    } else if (action == "change") {
        if (POSICION < 0 || POSICION > lugares.length) {
            document.getElementById("observaciones").innerHTML += "<li>La posición es inválida.</li>";
            return;
        } else if (!lugares.includes(NOMBRE_LUGAR)) {
            document.getElementById("observaciones").innerHTML += "<li>El lugar es inválido o no está en la lista.</li>";
            return;
        }
        let LUGAR = lugares.splice(lugares.indexOf(NOMBRE_LUGAR), 1)[0];
        let NUEVA_POSICION = POSICION < lugares.length ? POSICION : Math.floor(Math.random() * lugares.length);
        lugares.splice(NUEVA_POSICION, 0, LUGAR);

    } else if (action == "delete") {
        if (POSICION < 0 || POSICION > lugares.length) {
            document.getElementById("observaciones").innerHTML += "<li>La posición es inválida.</li>";
            return;
        }
        lugares.splice(POSICION, 1);
    }

    displayLugares();
}


const limpiar = () => document.getElementById("observaciones").innerHTML = "";

let lugares = ["PARÍS", "ROMA", "ATENAS", "VIGO"];

displayLugares();