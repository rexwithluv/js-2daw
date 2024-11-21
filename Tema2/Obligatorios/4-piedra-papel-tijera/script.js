let timeout;
const jugar = () => {
    timeout = clearTimeout(timeout);

    const imagen = document.getElementById("imagen");
    const resultado = document.getElementById("resultado");

    if (user == bot) {
        imagen.src = IMAGES.empate;
        resultado.innerHTML = "Empate ;-;";
        new Audio("sounds/pou.mp3").play();
    } else {
        const userIndex = OPTIONS.indexOf(user);
        const botIndex = OPTIONS.indexOf(bot);

        if ((userIndex + 1) % OPTIONS.length == botIndex) {
            imagen.src = IMAGES.perder;
            resultado.innerHTML = "Has perdido :(";
            new Audio("sounds/perder.mp3").play();
        } else {
            imagen.src = IMAGES.ganar;
            resultado.innerHTML = "Has ganado ^^";
            new Audio("sounds/ganar.mp3").play();
        }
    }

    timeout = setTimeout(reiniciar, 3000);
}

const reiniciar = () => {
    document.getElementById("imagen").src = IMAGES.pregunta;
    document.getElementById("resultado").innerHTML = "";
    bot = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}

const IMAGES = {
    pregunta: "images/pregunta.png",
    empate: "images/empate.png",
    perder: "images/perder.png",
    ganar: "images/ganar.png",
}

const OPTIONS = ["piedra", "papel", "tijera"];

let bot = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

let user;
document.getElementById("botones").addEventListener("click", (event) => {
    user = event.target.id;
    jugar();
})

