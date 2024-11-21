const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Introduce tu sueldo: ", (answerSueldo) => {
    rl.question("Introduce tus años de antigüedad: ", (answerAnhos) => {
        rl.close();

        let sueldo = parseInt(answerSueldo);
        let anhos = parseInt(answerAnhos);

        if (sueldo < 500 && anhos >= 10) {
            sueldo *= 3;
        } else if (sueldo < 500 && anhos < 10) {
            sueldo *= 2;
        }

        console.log("Tu sueldo ahora es: " + sueldo);
    })
})