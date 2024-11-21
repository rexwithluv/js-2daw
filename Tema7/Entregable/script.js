"use strict";

class Animal {
    constructor(nombre, raza, sexo) {
        this.nombre = nombre;
        this.raza = raza;
        this.sexo = sexo;
    }
}

let miarray = ['Bulldog', 'Caniche', 'Pastor Alemán', 'Husky Siberiano'];

document.getElementById("guardar").addEventListener("click", () => {
    const nombre = document.getElementById("nombre");
    const raza = document.getElementById("raza");
    const sexo = document.getElementById("sexo");

    const animals = JSON.parse(sessionStorage.getItem("animals")) ?? [];
    animals.push(new Animal(
        nombre.value, raza.value, sexo.value
    ));
    sessionStorage.setItem("animals", JSON.stringify(animals));

    nombre.value = "";
    raza.value = "";
    sexo.unchecked;
});

document.getElementById("form").addEventListener("submit", (ev) => {
    ev.preventDefault();

    const divAll = document.getElementById("showAll");
    divAll.toggleAttribute("hidden");

    const table = document.getElementById("table");
    const listArray = document.getElementById("showArray");


    // Motramos todo lo que hay en el sessionStorage de animals
    const animals = JSON.parse(sessionStorage.getItem("animals"));
    animals.forEach(animal => {
        let tr = document.createElement("tr");

        let tdOne = document.createElement("td");
        tdOne.textContent = animal.nombre;

        let tdTwo = document.createElement("td");
        tdTwo.textContent = animal.raza;

        let tdThree = document.createElement("td");
        tdThree.textContent = animal.sexo;

        tr.append(tdOne, tdTwo, tdThree);
        table.append(tr);
    });

    miarray.forEach(elem => {
        let li = document.createElement("li");
        li.textContent = elem;
        listArray.append(li);
    })

});