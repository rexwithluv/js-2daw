const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Dame un número N: ", (answerNum) => {
    rl.close();

    let num = parseInt(answerNum);

    if (num % 2 === 0 && num >= 4){
        num -= 1;
    }

    for (let i = 1; num >= i; num -= 2) {
        console.log(num);
    }
})