"use strict";
// Añadimos las imagenes a la caja
const NUM_IMAGES = 10;
for (let i = 0; i < NUM_IMAGES; i++) {
    $("#cajaImages").append(`<img src="image.png" class='image'>`);
}

// Botón para mostrar las imágenes
$("#botonMostrar").click(function () {
    $(".image").each(function (index, img) {
        $(img).delay(index * 1000).animate({ opacity: 1 }, 500);
    });
});

// Botón para ocultar las imagenes
$("#botonOcultar").click(function () {
    $(".image").animate({ opacity: 0.1 }, 500);
});

// Ocultar la imagen cuando se clicka en ella
$(".image").on("click", function () {
    $(this).animate({ opacity: 0.1 }, 500);
});