console.log("Bienvenido a las 50 combinaciones para jugar la primitiva!");

// Nos crea una combinación de 6 números del 1 al 49
function crearCombinacion() {
    let combinacion = new Set([]);

    while (combinacion.size < 6) {
        combinacion.add(Math.floor(Math.random() * 49) + 1);
    }

    return Array.from(combinacion).join(", ");
}

let limit = 50
for (let i = 0; i < limit; i++) {
    console.log(`Combinación ${i + 1}-> ` + crearCombinacion());
}