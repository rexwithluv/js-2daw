// Creamos la contraseña según los requerimientos
function generarPasswd(len) {
    let possibleValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-*$%#@_!%&";
    let passwd = "";
    for (let i = 0; i < len; i++) {
        passwd += possibleValues.charAt(Math.floor(Math.random() * possibleValues.length));
    }
    return passwd;
}

// Función meramente decorativa, cambiar el color del campo
// de passwd sin criterio lógico
function cambiarColor() {
    let colores = ["rgb(255, 132, 132)", "rgb(177, 255, 132)"];
    return colores[Math.floor(Math.random() * colores.length)];
}

// Función principal. Se ejecuta cuando el usuario pulsa el botón
function mostrarPasswd() {
    let lengthPasswd = document.getElementById("lengthPasswd").value;
    let passwd = generarPasswd(lengthPasswd);
    document.getElementById("passwd").innerHTML = passwd;
    document.getElementById("passwd").style.color = cambiarColor();
}

