const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Dime un número: ", (answerNum) => {
    rl.close();

    let num = parseInt(answerNum);

    let esPrimo = true;
    if (num % 2 == 0) {
        esPrimo = false;
    } else {
        let counter = 3;
        while (esPrimo && counter < num / 2) {
            if (num % counter == 0) {
                esPrimo = false;
            }
            counter++;
        }
    }

    console.log(esPrimo);

})