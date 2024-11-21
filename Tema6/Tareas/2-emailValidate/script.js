"use strict";

const form = document.getElementById("form");
const text = document.getElementById("texto-valido");

const emailValidate = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/gi;
    return regex.test(email);
};

const emailInServers = (email) => {
    const servers = ["terra.es", "google.com", "marca.es", "yahoo.es"];
    let userServer = email.split("@")[1];
    return servers.includes(userServer);
};

form.addEventListener("submit", (evnt) => {
    evnt.preventDefault();

    text.textContent = "";

    const email = document.getElementById("email").value;
    if (!emailValidate(email)) {
        text.textContent = "El email no tiene una estructura válida.";
    } else if (!emailInServers(email)) {
        text.textContent = "El email no está en la lista de servidores permitidos.";
    } else {
        text.textContent = "";
        form.submit();
    }
});