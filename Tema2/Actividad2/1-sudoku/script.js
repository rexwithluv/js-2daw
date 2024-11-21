function revisarFila(fila) {
    for (let i = 0; i <= FILAS_TABLA; i++) {
        let casilla = document.getElementById("casilla" + i + "-" + fila);
        if (isNaN(parseInt(casilla))) {
            return false;
        }
    }
    return true;
}

function revisarColumna(columna) {
    console.log("Aún por implementar");
}

function comprobarSudoku() {
    console.log("Aún por implementar");
}

const FILAS_TABLA = 9;
const COLUMNAS_TABLA = 9;
const TABLERO_SUDOKU = document.getElementById("sudokuTable");

// Creamos el tablero
for (let i = 0; i < COLUMNAS_TABLA; i++) {
    let lineaActual = "<tr class='border border-black'>";

    for (let j = 0; j < FILAS_TABLA; j++) {
        lineaActual += `<td id='casilla${j}-${i}' class='border border-black w-12 h-12 text-center'>
                            <input type='text' maxlength='1' class='w-full h-full text-center' />
                        </td>`;
    }

    lineaActual += "</tr>";
    TABLERO_SUDOKU.innerHTML += lineaActual;
}

