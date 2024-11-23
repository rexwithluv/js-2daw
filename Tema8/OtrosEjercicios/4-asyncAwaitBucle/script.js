async function procesarElemento(elemento) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(elemento);
        }, 1000);
    });
}

async function procesarLista() {
    for (const elemento of LIST) {
        const resultado = await procesarElemento(elemento);
        console.log(resultado);
    }
}

const LIST = [
    "JavaScript",
    "Aprendizaje Automático",
    "Inteligencia Artificial",
    "Computación en la Nube",
    "Computación Cuántica"
];

procesarLista();
