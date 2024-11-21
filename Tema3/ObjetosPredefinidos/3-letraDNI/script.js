"use strict";

const calculateDNI = (dni) => {
    const LETTERS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    return LETTERS[dni % 23];
}

let letra = prompt("Dame una letra (NO Ñ): ");
document.getElementById("letraUser").innerHTML = letra;

const LIMIT = 1000;
for (let i = 1; i < LIMIT; i++) {
    let dni = calculateDNI(i);

    let LIST = document.getElementById("dnis");
    if (dni == letra) {
        let li = document.createElement("li");
        li.textContent = i.toString().padStart(3, "0") + letra;
        LIST.appendChild(li);
    }
}