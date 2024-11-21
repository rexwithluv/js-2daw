"use strict";

class Person {
    constructor(dni, name, lastName, city) {
        this.dni = dni;
        this.name = name;
        this.lastName = lastName;
        this.city = city;
    }
}

/* .every y .some
.every => Si alguno de sus valores no cumple la condición, devuelve false
.every => Si todos los valores cumplen la condición, devuelve true
.some => Si alguno de sus valores cumple la condición, devuelve true
.some => Si ninguno de sus elementos cumple la condición, devuelve false */
const clearInputs = (...inputs) => inputs.map(input => input.value = "");
const dataOK = (...args) => args.every(arg => arg.value.length > 0);

// Función para cargar la tabla en base a un array/lista
// El param 'table' debe ser un objeto DOM
const loadDataInTable = (table, list) => {
    list.forEach(person => {
        let tr = document.createElement("tr");
        for (let prop in person) {
            let td = document.createElement("td");
            td.textContent = person[prop];
            tr.append(td);
        }
        table.append(tr);
    });
};
const reloadTable = (table, list) => {
    table.innerHTML = "";
    loadDataInTable(table, list);
};

const form = document.getElementById("form");
const tableBody = document.getElementById("tabla").tBodies[0];
let persons = [];

/* Esto es para debugging */
// let persons = [
//     new Person("12345678A", "María", "González", "Barcelona"),
//     new Person("87654321B", "Juan", "Rodríguez", "Madrid"),
//     new Person("23456789C", "Ana", "Fernández", "Valencia"),
//     new Person("34567890D", "Carlos", "López", "Sevilla",)
// ];
// tableBody.innerHTML = "";
// loadDataInTable(tableBody, persons);
/* Hasta aquí el debugging */

form.addEventListener("submit", (evnt) => {
    evnt.preventDefault();

    let dni = document.getElementById("dni");
    let name = document.getElementById("nombre");
    let lastName = document.getElementById("apellidos");
    let city = document.getElementById("ciudad");

    if (dataOK(dni, name, lastName, city)) {
        let person = new Person(dni.value, name.value, lastName.value, city.value);
        persons.push(person);

        reloadTable(tableBody, persons);

        alert("Los datos fueron cargados correctamente.");
        clearInputs(dni, name, lastName, city);
    } else {
        alert("Debes introducir los campos solicitados!");
    }
});

// Listeners de cada encabezado
// Esto está fatal hecho pero si funciona me importa poco, NADA
const headers = document.querySelectorAll("table thead th");
headers.forEach(head => {
    head.addEventListener("dblclick", (evnt) => {
        const col = evnt.target.getAttribute("col");
        if (col === "dni") {
            persons.sort((a, b) => parseInt(a.dni) - parseInt(b.dni));
        } else if (col === "nombre") {
            persons.sort((a, b) => a.name.localeCompare(b.name));
        } else if (col === "apellidos") {
            persons.sort((a, b) => a.lastName.localeCompare(b.lastName));
        } else {
            persons.sort((a, b) => a.city.localeCompare(b.city));
        }

        reloadTable(tableBody, persons);
    });
});