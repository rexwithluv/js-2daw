"use strict";

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log("Sigue el siguiente formato: ");

rl.question("nombre:apellidos:telefono:email:codigopostal -> ", (answer) => {
    rl.close();

    let desglose = answer.split(":");

    console.log("Código postal: " + desglose[desglose.length - 1]);
    console.log("Apellidos: " + desglose[1]);
    console.log("Email: " + desglose[3]);
    console.log("Servidor de email: " + desglose[3].split("@")[1]);
})