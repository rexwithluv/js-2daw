"use strict";

const form = document.getElementById("form");
const firstSelect = document.getElementById("first-select");
const secondSelect = document.getElementById("second-select");


firstSelect.addEventListener("change", () => {
    const secondOptions = {
        "alicante": ["Alicante Capital", "Elche", "Orihuela"],
        "castellon": ["Castellón Capital", "Oropesa", "Vinaroz"],
        "valencia": ["Valencia Capital", "Torrent", "Mislata"]
    };

    // Obtener la opción seleccionada ahora mismo
    const actualOptions = secondOptions[firstSelect.value];

    // Vaciamos el select pero le dejamos el default
    secondSelect.innerHTML = "";
    let optionDefault = document.createElement("option");
    optionDefault.value = "default";
    optionDefault.textContent = "Elige...";
    optionDefault.toggleAttribute("selected");
    optionDefault.toggleAttribute("disabled");
    secondSelect.prepend(optionDefault);

    // Rellenamos el select
    actualOptions.forEach(opt => {
        let option = document.createElement("option");
        option.value = opt.toLowerCase().replaceAll(" ", "-");
        option.textContent = opt;
        secondSelect.append(option);
    });
});

form.addEventListener("submit", (evnt) => {
    evnt.preventDefault();

    if (firstSelect.value === "default" || secondSelect.value === "default") {
        alert("El formulario no es correcto!");
    } else{
        form.submit();
    }

});