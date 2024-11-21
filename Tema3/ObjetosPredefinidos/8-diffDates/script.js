"use strict";

const BOTON = document.getElementById("boton").addEventListener("click", () => {
    const FECHA1 = new Date(document.getElementById("date1").value);
    const FECHA2 = new Date(document.getElementById("date2").value);

    const DIAS_DIFF = (FECHA2.getTime() - FECHA1.getTime()) / (1000 * 60 * 60 * 24);
    const DOM = document.getElementById("dateFinal");

    DOM.textContent = DIAS_DIFF;
});

