"use strict";

// Clases
class Person {
    constructor(dni, name, lastName, city, entryDate) {
        this.dni = dni;
        this.name = name;
        this.lastName = lastName;
        this.city = city;
        this.entryDate = entryDate;
    }
}


// Variables globales
let personas;
fetch("alumnos.json")
    .then(response => response.json())
    .then(data => {
        personas = data;
        loadDataInTable(document.getElementById("tabla").tBodies[0], data);
    })
    .catch(error => console.error("Error: ", error));


// Funciones
function clear() {
    document.getElementById("dni").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("ciudad").value = "";
}

function loadDataInTable(tableBody, personsList) {
    personsList.forEach(person => {
        let tr = document.createElement("tr");

        for (let prop in person) {
            let td = document.createElement("td");
            td.textContent = person[prop];
            tr.append(td);
        }

        tableBody.append(tr);
    });
}

function reloadTable(tableBody, personsList) {
    tableBody.innerHTML = "";
    loadDataInTable(tableBody, personsList);
}


//Listeners
document.getElementById("form").addEventListener("submit", (ev) => {
    ev.preventDefault();

    const capitalize = (str) => str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    const DOMdni = document.getElementById("dni").value.toUpperCase();
    const DOMnombre = capitalize(document.getElementById("nombre").value);
    const DOMapellidos = capitalize(document.getElementById("apellidos").value);
    const DOMciudad = capitalize(document.getElementById("ciudad").value);

    const dataOK = (...args) => args.every(arg => arg.length > 0);
    if (dataOK(DOMdni, DOMnombre, DOMapellidos, DOMciudad)) {
        const person = new Person(
            DOMdni,
            DOMnombre,
            DOMapellidos,
            DOMciudad,
            new Date().toLocaleDateString("es-ES", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            }));
        personas.push(person);

        let DOMtableBody = document.getElementById("tabla").tBodies[0];
        reloadTable(DOMtableBody, personas);

        alert("Los datos fueron cargados correctamente.");
        clear();
    } else {
        alert("Debes introducir los datos solicitados.");
    }

});

const headers = document.querySelectorAll("table thead th");
headers.forEach(head => {
    head.addEventListener("dblclick", (evnt) => {
        const col = evnt.target.getAttribute("col");
        if (col === "dni") {
            personas.sort((a, b) => parseInt(a.dni) - parseInt(b.dni));
        } else if (col === "nombre") {
            personas.sort((a, b) => a.nombre.localeCompare(b.nombre));
        } else if (col === "apellidos") {
            personas.sort((a, b) => a.apellidos.localeCompare(b.apellidos));
        } else if (col === "ciudad") {
            personas.sort((a, b) => a.ciudad.localeCompare(b.ciudad));
        } else {
            personas.sort((a, b) => {
                const [diaA, mesA, anioA] = a.fechaAlta.split('/').map(Number);
                const [diaB, mesB, anioB] = b.fechaAlta.split('/').map(Number);
                return new Date(anioA, mesA - 1, diaA) - new Date(anioB, mesB - 1, diaB);
            });
        }

        reloadTable(document.getElementById("tabla").tBodies[0], personas);
    });
});