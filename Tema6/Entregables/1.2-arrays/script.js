"use strict";

class Persona {
    constructor(name, lastName, city) {
        this.name = name;
        this.lastName = lastName;
        this.city = city;
    }

    showInTable(TABLE) {
        let tr = document.createElement("tr");
        for (let prop in this) {
            let td = document.createElement("td");
            td.textContent = this[prop];
            tr.append(td);
        }
        TABLE.append(tr);
    }
}

// .every y .some
// .every => Si alguno de sus valores no cumple la condición, devuelve false
// .every => Si todos los valores cumplen la condición, devuelve true
// .some => Si alguno de sus valores cumple la condición, devuelve true
// .some => Si ninguno de sus elementos cumple la condición, devuelve false
const clearInputs = (...inputs) => inputs.map(input => input.value = "");
const dataOK = (...args) => args.every(arg => arg.value.length > 0);

const form = document.getElementById("form");
const table = document.getElementById("tabla");
let persons = [];

form.addEventListener("submit", (evnt) => {
    evnt.preventDefault();

    let name = document.getElementById("nombre");
    let lastName = document.getElementById("apellidos");
    let city = document.getElementById("ciudad");

    if (dataOK(name, lastName, city)) {
        let person = new Persona(name.value, lastName.value, city.value);
        person.showInTable(table);
        persons.push(person);

        alert("Los datos fueron cargados correctamente.");
        clearInputs(name, lastName, city);
    } else {
        alert("Debes introducir los 3 campos solicitados!");
    }
});