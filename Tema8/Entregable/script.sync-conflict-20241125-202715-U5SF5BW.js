"use strict";

class Person {
    constructor(dni, name, lastName, city, entryDate) {
        this.dni = dni;
        this.name = name;
        this.lastName = lastName;
        this.city = city;
        this.entryDate = entryDate;
    }
}

// Cargar la tabla en base a una lista
const loadDataInTable = (table, list) => {

    // Primero la vacíamos
    table.innerHTML = "";

    // Luego la cargamos
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

// Variables que se usan a lo largo del programa
const tableBody = document.getElementById("tabla").tBodies[0];

async function loadPersons() {
    let persons = await fetch("alumnos.json").then(response => response.json());
    console.log(typeof persons);
    console.log(persons);
    loadDataInTable(tableBody, persons);
}
// let persons = loadPersons();

document.getElementById("form").addEventListener("submit", (ev) => {
    ev.preventDefault();

    let dni = document.getElementById("dni");
    let name = document.getElementById("nombre");
    let lastName = document.getElementById("apellidos");
    let city = document.getElementById("ciudad");
    let entryDate = new Date().toLocaleDateString("es-ES");

    // Revisamos que ningun valor sea nulo
    if ([dni.value, name.value, lastName.value, city.value, entryDate].every(arg => arg.length > 0)) {
        persons.push(new Person(dni.value, name.value, lastName.value, city.value, entryDate));

        // Recargamos la tabla
        loadDataInTable(tableBody, persons);

        // Avisamos y limpiamos los campos
        alert("Los datos fueron cargados correctamente.");
        [dni, name, lastName, city].map(input => input.value = "");
    } else {
        alert("Debes rellenar todos los campos!");
    }
});

// Listeners de cada encabezado
document.querySelectorAll("table thead th").forEach(head => {
    head.addEventListener("dblclick", (evnt) => {
        const col = evnt.target.getAttribute("col");
        if (col === "dni") {
            persons.sort((a, b) => parseInt(a.dni) - parseInt(b.dni));
        } else if (col === "nombre") {
            persons.sort((a, b) => a.name.localeCompare(b.name));
        } else if (col === "apellidos") {
            persons.sort((a, b) => a.lastName.localeCompare(b.lastName));
        } else if (col === "ciudad") {
            persons.sort((a, b) => a.city.localeCompare(b.city));
        } else {
            persons.sort((a, b) => new Date(b.entryDate) - new Date(a.entryDate));
        }

        loadDataInTable(tableBody, persons);
    });
});

// Para que cargue los datos al comenzar el programa
loadDataInTable(tableBody, persons);