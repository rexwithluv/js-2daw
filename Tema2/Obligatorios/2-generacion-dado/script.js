// Aunque debería mostrar durante un tiempo las caras del dado
// no lo hace debido a que aún no sabemos promesas/funciones asíncronas
function mostrarAscii() {
        const carasDado = [
                `+-------+
|       |
|   o   |
|       |
+-------+`,
                `+-------+
| o     |
|       |
|     o |
+-------+`,
                `+-------+
| o     |
|   o   |
|     o |
+-------+`,
                `+-------+
| o   o |
|       |
| o   o |
+-------+`,
                `+-------+
| o   o |
|   o   |
| o   o |
+-------+`,
                `+-------+
| o   o |
| o   o |
| o   o |
+-------+`
        ];

        let numero = Math.floor(Math.random() * carasDado.length);
        let caraEscogida = carasDado[numero];
        document.getElementById("asciiArt").innerHTML = caraEscogida;

        return numero;
}

let frecuencia = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

const LIMITE = 1000;
for (let i = 0; i < LIMITE; i++) {
        let numero = mostrarAscii();
        frecuencia[numero + 1]++;
}

// Un dado común siempre tendrá 6 caras
const NUMERO_CARAS = 6;

let resultado = "<tr>";
for (let i = 0; i < NUMERO_CARAS; i++) {
        resultado += "<th>" + (i + 1) + "</th>";
}
resultado += "</tr>";

resultado += "<tr>";
for (let i = 0; i < NUMERO_CARAS; i++) {
        resultado += "<td>" + frecuencia[i + 1] + "</td>";
}
resultado += "</tr>";

document.getElementById("resultado").innerHTML = resultado;

// document.getElementById("resultado").innerHTML = "0";