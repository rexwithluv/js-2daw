let numeroSecreto = Math.floor(Math.random() * 100) + 1;

alert("Bienvenido a 'Adivina el número!'");

let adivinado = false;
let contador = 0;
while (!adivinado) {
    let numUser = prompt("Dime un número del 1 al 100");
    contador++;

    // Si prompt se pulsa "Cancelar" la respuesta será null
    if (numUser === null) {
        alert("Juego cancelado");
        break;
    }

    numUser = parseInt(numUser);
    if (!Number.isNaN(numUser)) {
        if (numUser == numeroSecreto) {
            adivinado = true;
        } else {
            if (numUser < numeroSecreto) {
                alert("El número secreto es mayor");
            } else {
                alert("El número secreto es menor");
            }
        }
    } else {
        alert("Eso no es un número!");
    }
}

if (!adivinado) {
    document.getElementById("intentos").innerHTML = contador;
}
