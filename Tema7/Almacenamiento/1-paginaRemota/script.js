"use strict";


const button = document.getElementById("boton");


button.addEventListener("click", () => {
    const text = document.getElementById("texto");
    const textResult = document.getElementById("resultado");

    textResult.textContent = "";

    let salida;
    try {
        salida = eval(text.value);
    } catch (error) {
        salida = "Error: " + error.message;
    }

    textResult.textContent = salida;
});