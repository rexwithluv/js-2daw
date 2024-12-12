const texto = $("p");
const caja = $(".caja");

$("#botonApagar").on("click", () => {
    // ms, valor de opacidad
    texto.fadeTo(1000, 0.5);
    caja.fadeOut(3000);
});

$("#botonEncender").on("click", () => {
    caja.show();
    texto.css("opacity", 1);
    texto.show();
});