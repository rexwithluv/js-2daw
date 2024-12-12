const colores = ["black", "white", "red", "blue", "purple", "green", "hotpink", "aliceblue"];
const fuentes = [
    "Arial",
    "Verdana",
    "Georgia",
    "Times New Roman",
    "Roboto",
    "Open Sans"
];

const titulos = $("h1");

titulos.on("click", () => {
    titulos.css("color", colores[Math.floor(Math.random() * colores.length)]);
    $("body").css("background-color", colores[Math.floor(Math.random() * colores.length)]);
    titulos.css("font-family", fuentes[Math.floor(Math.random() * colores.length)]);
});