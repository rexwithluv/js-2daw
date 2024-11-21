const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Dame el número del que obtener la tabla y el número límite: ", (answerNumTabla) => {
    rl.close();

    let numeros = answerNumTabla.split(" ");
    let numTabla = parseInt(numeros[0]);
    let NumLimite = parseInt(numeros[1]);

    for (let i = 1; i <= NumLimite; i++) {
        console.log(`${numTabla} x ${i} = ${numTabla * i}`);
    }
})