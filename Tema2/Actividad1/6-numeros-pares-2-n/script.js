const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Dame un número N: ", (answerNum) => {
    rl.close();

    let num = parseInt(answerNum);

    for (let i = 2; i <= num; i += 2) {
        console.log(i);
    }
})