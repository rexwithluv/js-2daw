"use strict";

let visitas = localStorage.getItem("ejercicio3");

if (visitas === null){
    visitas = 1;
} else{
    visitas++;
}

localStorage.setItem("ejercicio3", visitas);

// A partir de aquí es mi código
const counter = document.getElementById("counter");
counter.value = visitas + " visita[s]";