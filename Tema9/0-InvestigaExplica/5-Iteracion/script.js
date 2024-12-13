const parrafos = $("p");

// Parece ser que si lo hacemos con una función flecha el this vale distinto
// y por lo tanto no funciona
parrafos.each(function () {
    if (this.textContent.length < 100) {
        $(this).addClass("highlight");
    }
});