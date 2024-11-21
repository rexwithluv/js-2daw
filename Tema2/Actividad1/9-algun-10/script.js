var numeros = [];
var seguir = true;

while (seguir) {
    let num = parseInt(prompt("Dame un número: "));
    if (num === -1) {
        seguir = false;
    }

    numeros.push(num);
}


if (numeros.includes(10)) {
    document.getElementById("text").innerHTML = "Sí!";
} else {
    document.getElementById("text").innerHTML = "No!";
}