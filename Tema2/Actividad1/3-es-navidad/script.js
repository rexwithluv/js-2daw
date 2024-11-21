const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Dame el día: ", (answerDia) => {
    rl.question("Dame el mes: ", (answerMes) => {
        rl.close();

        let dia = parseInt(answerDia);
        let mes = parseInt(answerMes);

        if (dia === 25 && mes === 12){
            console.log("Es navidad!");
        } else {
            console.log("No es navidad :(");
        }

    })
})