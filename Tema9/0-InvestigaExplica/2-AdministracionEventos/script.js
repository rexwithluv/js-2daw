// Estilos para ver mejor
$("table tr td").css("border", "1px solid black")


const parrafos = $("p");

parrafos.on("click", () => {
    alert("Se presionó un párrafo del documento!");
});

parrafos.slice(-2).on("click", () => {
    alert("Se presionó un párrafo contenido en la segunda tabla");
});