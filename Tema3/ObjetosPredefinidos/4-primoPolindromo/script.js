"use strict";

const esPrimo = (num) => {
    // Para evitar bucles sobre los primeros números
    // Consideramos 1 y 2 como primos
    if (num <= 3) {
        return true;
    }

    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

const esPalindromo = (num) => {
    let reverseNum = num.toString().split("").reverse().join("");
    return num == reverseNum;
}

const LIMIT = 100000;
let list = [];

for (let i = 1; i <= LIMIT; i++) {
    if (esPalindromo(i) && esPrimo(i)) {
        list.push(i);
    }
}

const LIST_DOM = document.getElementById("list");
list.forEach(num => {
    let li = document.createElement("li");
    li.textContent = num.toString().padStart(LIMIT.toString().length, "0");
    LIST_DOM.appendChild(li);
});
