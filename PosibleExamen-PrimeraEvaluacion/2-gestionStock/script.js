"use strict";

class User {
    constructor(name, passwd) {
        this.name = name;
        this.passwd = passwd;
    }
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
    if (VALID_USERS.some(user => user.name === DOMusername.value && user.passwd === DOMpassword.value)) {
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

