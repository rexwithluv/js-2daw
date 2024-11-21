// Estoy seguro que el día que sepa usar JS bien veré esto y diré menuda basura
// pero ahora mismo ver que funciona me hace sentir completamente orgulloso :)

function obtenerLetra() {
    const LETRA = document.getElementById("letra").value;
    if (letrasUsadas.includes(LETRA)) {
        alert("Ya has usado esa letra");
        return;
    } else if (LETRA == "") {
        return;
    }
    letrasUsadas.push(LETRA);
    return LETRA;
}

function comprobarLetra() {
    const LETRA_USER = obtenerLetra();
    if (!LETRA_USER) {
        return;
    }
    // Si la letra está en la palabra oculta, la sustituye
    if (palabra.includes(LETRA_USER)) {
        for (let letra in palabra) {
            if (palabra[letra] == LETRA_USER) {
                palabraOculta[letra] = LETRA_USER;
            }
        }
    } else {
        intentos++;
    }

    dibujar(intentos);

    if (!palabraOculta.includes("_")) {
        alert("Has ganado!");
        document.getElementById("divReiniciar").style.display = "block";
    } else if (intentos == INTENTOS_MAXIMOS) {
        alert("Has perdido!");
        document.getElementById("divReiniciar").style.display = "block";
    }
}

function dibujar(intentos) {
    document.getElementById("dibujo").innerHTML = DIBUJOS[intentos + 1];
    document.getElementById("letrasUsadas").innerHTML = letrasUsadas.join(", ");
    document.getElementById("palabra").innerHTML = palabraOculta.join("");
}

function reiniciar() {
    document.getElementById("letrasUsadas").innerHTML = "Nada por el momento";
    letrasUsadas = [];
    palabra = obtenerPalabraOculta(PALABRAS)
    palabraOculta = palabra.map(letra => "_");
    intentos = 0;
    resuelto = false;
    document.getElementById("divReiniciar").style.display = "none";
    dibujar(intentos);
}

const DIBUJOS = [
    `
    +---+
        |
        |
        |
        |
        |
=========`,
    `
    +---+
    |   |
        |
        |
        |
        |
=========`,
    `
    +---+
    |  \\|
        |
        |
        |
        |
=========`,
    `
    +---+
    |/ \\|
        |
        |
        |
        |
=========`,
    `
    +---+
    |/ \\|
    O   |
        |
        |
        |
=========`,
    `
    +---+
    |/ \\|
    O   |
    |   |
        |
        |
=========`,
    `
    +---+
    |/ \\|
    O   |
   /|   |
        |
        |
=========`,
    `
    +---+
    |/ \\|
    O   |
   /|\\  |
        |
        |
=========`,
    `
    +---+
    |/ \\|
    O   |
   /|\\  |
   /    |
        |
=========`,
    `
    +---+
    |/ \\|
    O   |
   /|\\  |
   / \\  |
        |
=========`,
];

let letrasUsadas = [];
const PALABRAS = ["desarrollar", "programador", "javascript"];

const obtenerPalabraOculta = listaPalabras => [...listaPalabras[Math.floor(Math.random() * listaPalabras.length)]];
let palabra = obtenerPalabraOculta(PALABRAS);
let palabraOculta = palabra.map(letra => "_");

const INTENTOS_MAXIMOS = DIBUJOS.length;
let intentos = 0;

dibujar(intentos);

document.getElementById("letrasUsadas").innerHTML = "Nada por el momento";

// Hacer que salga el botón de reiniciar una vez acabado
document.getElementById("divReiniciar").style.display = "none";
