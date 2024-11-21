"use strict";

// Indica como se llama la ventana
console.log(window.name !== "" ? window.name : "listaPersonas");

// Indica el tamaño de la ventana
console.log(window.innerHeight + "x" + window.innerWidth);

// Indica si el usuario está o no en la pestaña
console.log(document.hidden);

// Indica el tamaño total de la ventana
console.log(window.outerHeight + "x" + window.outerWidth);

// Imprime todo lo que tiene en pantalla en este momento
window.print();

// URL de la página actual
console.log(window.location.href);

// Abre una ventana que accede a google con tamaño de 200x200 pixeles
// que sea además resizable y contenga menubar y scrollbar
window.open(
    "https://www.google.es",
    "ventanaGoogle",
    "width=200,height=200," +
    "resizable=yes," +
    "menubar=yes," +
    "scrollbars=yes");

// Indica el tamaño en altura de la ventana con la barra de estado
console.log(window.outerHeight);

// Indica el tamaño en alguta de la screen. Es el mismo que el anterior?
console.log(window.screen.height);

// Abre una ventana nueva que llame a la url "", y que ocupe el tamaño
// máximo según la pantalla del usuario
const HEIGHT = window.screen.height;
const WIDTH = window.screen.width;

window.open(
    "",
    "ventanaVacia",
    `width=${WIDTH}, height=${HEIGHT}`
);

// Indica el tipo de navegador
console.log(navigator.userAgent);

// Indica la versión del navegador y el SO que usa
const NAV = navigator.userAgent;
const SO = window.navigator.platform;

console.log("Navegador: " + NAV);
console.log("Sistema operativo: " + SO);

// Comprueba si están habilitadas las cookies
console.log(navigator.cookieEnabled);

// Indica el lenguaje del navegador
console.log(navigator.language);

// Indica el SO en que se está ejecutando el navegador
console.log(window.navigator.platform);

// Indica el protocolo que está utiliznado la página web actual
console.log(document.location.protocol);

// Recarga la página actual
location.reload();

// Cargar un nuevo documento
location.replace('http://www.farodevigo.es');

// Cargar un nuevo documento
location.assign('http://elpais.com');

// RESPUESTA: Assing SI permite volver atrás

// Obtenner el dominio
console.log(window.location.hostname);

// Pone una oración cada segundo
setInterval(() => {
    console.log("Pasó 1 segundo");
}, 1000);
