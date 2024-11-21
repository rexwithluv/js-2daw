"use strict";

let fecNac1 = new Date("2004-12-16");
let fecSanto = new Date(2000, 7, 1);

const getDiaSemana = (dia) => {
    const DIAS = ["Domingo", "Lunes", "Martes", "Miércoles", "Juves", "Viernes", "Sábado"];
    return DIAS[dia];
}

// Día de la semana
console.log("Nací un " + getDiaSemana(fecNac1.getDay()));

// Cambiar año
const ANYO_ACTUAL = new Date().getFullYear();
fecNac1.setFullYear(ANYO_ACTUAL);
fecSanto.setFullYear(ANYO_ACTUAL);

// Día de la semana de aniversarios
console.log("Cumpleaños: " + getDiaSemana(fecNac1.getDay()));
console.log("Santo: " + getDiaSemana(fecSanto.getDay()));

// Nº de días que han pasado desde que nací
fecNac1.setFullYear(2004);
let DIAS_TRANSCURRIDOS = (new Date().getTime() - fecNac1.getTime()) / (1000 * 60 * 60 * 24);
console.log("Desde que nací han pasado " + Math.floor(DIAS_TRANSCURRIDOS) + " días.");