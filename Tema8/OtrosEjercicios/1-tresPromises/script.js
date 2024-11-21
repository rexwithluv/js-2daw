// Promsesas
const primera = new Promise((resolve) => {
    setTimeout(() => {
        resolve(5);
    }, 1000);
});
const segunda = new Promise((resolve) => {
    setTimeout(() => {
        resolve(8);
    }, 1000);
});
const tercera = new Promise((resolve) => {
    setTimeout(() => {
        resolve(4);
    }, 1000);
});

primera
    .then(value1 => segunda
        .then(value2 => tercera
            .then(value3 => console.log(value1 + value2 + value3))
        ));

        
