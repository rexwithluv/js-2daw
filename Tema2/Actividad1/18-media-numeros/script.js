alert("Bienvenido al calculador de medias!");

let seguir = true;
let numeros = [];
while (seguir) {
    let numUser = prompt("Dame un número: ");

    if (numUser == 0) {
        seguir = false;
    } else if (numUser == null) {
        break;
    } else if (!Number.isNaN(parseInt(numUser))) {
        numeros.push(parseInt(numUser));
    }
    else {
        alert("Eso no es un número!");
    }
}

// Si seguir es true, el código habrá ido por el break
if (seguir == false) {
    let suma = 0;
    for (let i of numeros) {
        suma += i;
    }

    document.getElementById("resultado").innerHTML += suma / numeros.length;
} else{
    document.getElementById("resultado").innerHTML = "Has cancelado!"
}