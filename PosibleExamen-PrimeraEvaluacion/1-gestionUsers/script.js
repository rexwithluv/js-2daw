"use strict";

class User {
    constructor(name, passwd) {
        this.name = name;
        this.passwd = passwd;
    }

    get name() { return this._name; }
    set name(value) {
        const regex = /^[a-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]{4,18}$/gi;

        if (regex.test(value)) {
            this._name = value
        } else {
            throw new Error("Usuario no válido.");
        }
    }

    get passwd() { return this._passwd }
    set passwd(value) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/gi;

        if (regex.test(value)) {
            this._passwd = value;
        } else {
            throw new Error("Contraseña no válida.");
        }
    }
}

document.getElementById("form").addEventListener("submit", (ev) => {
    ev.preventDefault();

    const DOMusername = document.getElementById("username");
    const DOMpassword = document.getElementById("passwd");

    try {
        // Si en el LocalStorage no existe users, lo crea
        let users = JSON.parse(localStorage.getItem("users")) ?? [
            new User("aaronalonso", "AAaa@@22"),
            new User("novoa.maria", "BBbb@@00"),
            new User("patricia.jdk", "(patriT0P)")
        ];

        // Creamos un usuario y lo introducimos en la lista
        const USER = new User(DOMusername.value, DOMpassword.value);
        users.push(USER)

        // Actualizamos el localStorage
        localStorage.setItem("users", JSON.stringify(users));

        //Si el usuario ha llegado hasta aquí, significa que se ha validado correctamente.
        Swal.fire("Bienvenida/o", "Has iniciado sesión correctamente", "success", "Continuar");

        // Cargamos la tabla de datos
        const createTd = (text) => {
            let td = document.createElement("td");
            td.textContent = text;
            return td;
        }

        const tBody = document.getElementById("tBody");
        for (const user of users) {
            let tr = document.createElement("tr");
            tr.append(
                createTd(user._name),
                createTd(user._passwd)
            );
            tBody.append(tr);
        };

        // Ocultamos el formulario y mostramos la tabla
        const formDiv = document.getElementById("formDiv");
        const tableDiv = document.getElementById("tableDiv");

        formDiv.classList.replace("d-flex", "d-none");
        tableDiv.toggleAttribute("hidden");

    } catch (error) {
        Swal.fire(error.name, error.message, "error", "Aceptar");
    }

});


// Contador de visitas
const numeroVecesDOM = document.getElementById("numeroVeces");
let numeroVeces = 0;
if (localStorage.getItem("numeroVeces") === null) {
    localStorage.setItem("numeroVeces", numeroVeces)
} else {
    numeroVeces = localStorage.getItem("numeroVeces");
}
numeroVeces++;
numeroVecesDOM.textContent = numeroVeces;
localStorage.setItem("numeroVeces", numeroVeces);

