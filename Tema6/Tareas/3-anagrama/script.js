"use strict";

const form = document.getElementById("form");
const textValid = document.getElementById("text-valid");

const sortedString = (expression) => {
    expression = expression.replaceAll(/\s/g, "");
    expression = Array.from(expression).sort();
    return expression.toString();
};

form.addEventListener("submit", (evnt) => {
    evnt.preventDefault();
    const text1 = document.getElementById("text-1").value.toLowerCase().trim();
    const text2 = document.getElementById("text-2").value.toLowerCase().trim();

    if (text1.length != text2.length) {
        textValid.textContent = "Los textos no tienen la misma longitud.";
    } else if ((sortedString(text1) === sortedString(text2))) {
        form.submit();
    } else {
        textValid.textContent = "Los textos no son anagramas.";
    }


});