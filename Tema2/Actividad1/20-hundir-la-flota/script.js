function escogerCasillaAleatoria(barco) {
    let x = Math.floor(Math.random() * (10 - barco));
    let y = Math.floor(Math.random() * (10 - barco));
    return `casilla${x}-${y}`;
}

function rellenarHorizontal(barco, casillaInicio) {
    let x = [...casillaInicio][7];
    let y = [...casillaInicio][9];
    for (let i = 0; i < barco; i++) {
        document.getElementById(`casilla${parseInt(x) + i}-${y}`).innerHTML = barco;
    }
}

function rellenarVertical(barco, casillaInicio) {
    let x = [...casillaInicio][7];
    let y = [...casillaInicio][9];
    for (let i = 0; i < barco; i++) {
        document.getElementById(`casilla${x}-${parseInt(y) + i}`).innerHTML = barco;
    }
}



let alturaTablero = 10;
let anchuraTablero = 10;

// Creamos el tablero
for (let i = 0; i < alturaTablero; i++) {
    let lineaActual = "<tr>";

    // Creamos cada casilla
    for (let j = 0; j < anchuraTablero; j++) {
        lineaActual += `<td id='casilla${j + '-' + i}'>[ ]</td>`
    }

    lineaActual += "</tr>";
    document.getElementById("tableroJuego").innerHTML += lineaActual;
}

// Los barcos disponibles según el enunciado
let barcos = [4, 3, 3, 3, 2, 2, 2, 1];

while (barcos.length > 0) {
    // Escoger un barco aleatorio y eliminarlo de la lista
    let barco = barcos.splice(Math.floor(Math.random() * barcos.length), 1)[0];

    // Escoger una casilla aleatoria y revisar que si cabe el barco
    let casillaInicio = escogerCasillaAleatoria(barco);

    // Decidir si rellenar horizontal o vertical de forma aleatoria
    let decisionRelleno = Math.random() < 0.5 ? rellenarHorizontal(barco, casillaInicio) : rellenarVertical(barco, casillaInicio);
    console.log(casillaInicio);
}