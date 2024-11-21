"use strict";

const firstNumber = document.getElementById("num-one");
const secondNumber = document.getElementById("num-two");
const result = document.getElementById("result");

const listButtons = document.querySelectorAll("button");
const clear = () => {
    listButtons.forEach(button => {
        button.classList.remove("active")
    });
    result.value = "";
}


document.getElementById("form").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const buttonPressed = ev.submitter;

    // Limpiamos los botones y luego estilamos el pulsado
    clear();
    buttonPressed.classList.add("active");

    // Si el usuario quiere limpiar los inputs
    if (buttonPressed.textContent === "CE") {
        firstNumber.value = "";
        secondNumber.value = ""
        result.value = "";
    }

    // Revisamos los campos y calculamos
    if (firstNumber.value !== "" && secondNumber.value !== "") {
        const op = eval(firstNumber.value + buttonPressed.textContent + secondNumber.value);
        if (op != Infinity || !isNaN(op)) {
            result.value = op;
        }
    } else {
        clear();
    }
});


const danger = document.getElementById("div-danger");
[firstNumber, secondNumber].forEach((input) => {
    input.addEventListener("input", (ev) => {
        // El segundo parámetro de .toggle:
        // Booleano, si es true, añade la clase, de lo contrario la elimina
        danger.classList.toggle("d-none", ev.target.value !== "0");
        danger.classList.toggle("d-flex", ev.target.value === "0");
        clear();
    });
});