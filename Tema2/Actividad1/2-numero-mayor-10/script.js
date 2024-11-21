const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Dame el primer número: ", (answer1) => {
    rl.question("Dame el segundo número: ", (answer2) => {
        rl.question("Dame el tercer número: ", (answer3) => {
            rl.close()

            let num1 = parseInt(answer1);
            let num2 = parseInt(answer2);
            let num3 = parseInt(answer3);

            if (num1 > 10 || num2 > 10 || num3 > 10) {
                console.log("Alguno de los números es mayor a 10");
            } else {
                console.log("Ninguno es mayor a diez");
            }

        })
    })
})

