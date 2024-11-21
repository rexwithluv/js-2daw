"use strict";

class User {
    constructor(name, passwd) {
        this._name = name;
        this._passwd = passwd;
    }

    get name() { return this._name; }
    set name(value) { this._name = value; }

    get passwd() { return this._passwd }
    set passwd(value) { this._passwd = value; }
}

document.getElementById("form").addEventListener("submit", (ev) => {
    ev.preventDefault();

    const DOMusername = document.getElementById("username");
    const DOMpassword = document.getElementById("passwd");


    // Si en el LocalStorage no existe users, lo crea
    let VALID_USERS = JSON.parse(localStorage.getItem("validUsers")) ?? [
        new User("aaron", "abc123."),
        new User("crispuga", "renaido"),
        new User("novoamaria", "javascript")
    ];
    localStorage.setItem("validUsers", JSON.stringify([
        new User("aaron", "abc123."),
        new User("crispuga", "renaido"),
        new User("novoamaria", "javascript")
    ]));

    // Revisamos si el usuario existe en el localStorage
    if (VALID_USERS.some(user => user._name === DOMusername.value && user._passwd === DOMpassword.value)) {
        location.href = "./stock.html";
    } else {
        Swal.fire({
            title: "¡No puedes pasar!",
            text: "Las credenciales no son válidas",
            icon: "error",
            confirmButtonText: "Aceptar"
        });
    }
});

