"use strict";

const form = document.getElementById("form");
const buttonDescription = document.getElementById("boton-descripcion");
const boxSerialNumber = document.getElementById("caja-numero-serie");
const serialNumber = document.getElementById("numero-serie");
const select = document.getElementById("incidencia");


// Para cambiar la imagen según lo seleccionado
select.addEventListener("change", () => {
    const image = document.getElementById("imagen");
    const PATH = "./images/";
    image.src = PATH + select.value + ".jpg";
    image.alt = "Imagen relacionada con la " + select.value;
});

// Eliminar los estilos si acaso estuvieran aplicados
serialNumber.addEventListener("focus", () => {
    serialNumber.removeAttribute("style");
    boxSerialNumber.removeAttribute("style");
});

// Cuando pulsamos el botón, este desaparece y da paso a una caja de texto
buttonDescription.addEventListener("click", () => {
    const descriptionBox = document.getElementById("caja-descripcion");
    descriptionBox.toggleAttribute("hidden");
    buttonDescription.toggleAttribute("hidden");
});

form.addEventListener("submit", (evnt) => {
    evnt.preventDefault();

    const regex = /\d{3}[A-Z]{4}(1|2|A)/g;
    if (regex.test(serialNumber.value)) {
        form.submit();
    } else {
        const softRed = "#d44a48";
        serialNumber.style.backgroundColor = softRed;
        serialNumber.style.color = "white";
        boxSerialNumber.style.border = "1px solid " + softRed;
        alert("El número de serie no es correcto!");
    }
});


