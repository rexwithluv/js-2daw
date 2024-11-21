const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Dime tu calificación: ", (answerCalificacion) => {
    rl.close()

    let calificacion = parseFloat(answerCalificacion);

    if (calificacion < 3) {
        console.log("Muy deficiente");
    } else if (calificacion < 5) {
        console.log("Insuficiente");
    } else if (calificacion < 6) {
        console.log("Bien");
    } else if (calificacion < 9) {
        console.log("Notable");
    } else {
        console.log("Sobresaliente");
    }
})