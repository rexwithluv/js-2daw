let userValido = false;
while (!userValido) {
    let user = prompt("Dame un nombre de usuario: ");

    let regex = /^[a-z0-9]+$/;
    if (regex.test(user)) {
        userValido = true;
    } else {
        alert("Contraseña no válida.");
    }
}

let passwdValida = false;
while (!passwdValida) {
    let passwd = prompt("Dame una contraseña: ");

    let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;
    if (regex.test(passwd)) {
        passwdValida = true;
    } else {
        alert("Contraseña no válida.")
    }
}

