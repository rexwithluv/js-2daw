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

const form = document.getElementById("form");
const table = document.getElementById("tabla");

form.addEventListener("submit", (evnt) => {
    event.preventDefault();

    let name = document.getElementById("nombre");
    let lastName = document.getElementById("apellidos");
    let city = document.getElementById("ciudad");

    if (name.value.length == 0 || lastName.value.length == 0 || city.value.length == 0) {
        alert("Debes introducir los 3 campos solicitados!");
    } else {
        let person = new Persona(name.value, lastName.value, city.value);
        person.showInTable(table);

        alert("Los datos fueron cargados correctamente.");
        name.value = "";
        lastName.value = "";
        city.value = "";
    }
});