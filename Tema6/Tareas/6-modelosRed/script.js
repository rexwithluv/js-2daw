"use strict";

const osi = document.getElementById("osi");
const tcpIp = document.getElementById("tcp-ip");

// Desaparece el texto porque hacer desaparecer las casillas de
// la tabla es más sencillo, pero más feo.
// ANTES MUERTA QUE SENCILLA NENA

// Si cambia el checked, esa parte de la tabla aparece o desaparece
osi.addEventListener("change", () => {
    const osiData = document.querySelectorAll(".osi");
    osiData.forEach(data => {
        const CHECKED = osi.checked;
        if (CHECKED) {
            data.style.color = "white";
        } else {
            data.style.color = "transparent";
        }
    });
});

// Si cambia el checked, esa parte de la tabla aparece o desaparece
tcpIp.addEventListener("change", () => {
    const tcpData = document.querySelectorAll(".tcp-ip");
    tcpData.forEach(data => {
        const CHECKED = tcpIp.checked;
        if (CHECKED) {
            data.style.color = "white";
        } else {
            data.style.color = "transparent";
        }
    });
});


const hiddenData = document.getElementById("ocultar-ambos");
const hiddenAll = document.getElementById("ocultar-todo");
const overlay = document.getElementById("overlay");

hiddenData.addEventListener("click", () => {
    tcpIp.checked = false;
    osi.checked = false;

    tcpIp.dispatchEvent(new Event("change"));
    osi.dispatchEvent(new Event("change"));
});

// Para el botón del velo negro
hiddenAll.addEventListener("click", () => {
    overlay.classList = "";
    overlay.classList.add("active");
});

// Para quitar el velo negro
overlay.addEventListener("click", () => {
    overlay.classList.add("hide");
});