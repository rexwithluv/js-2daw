let limit = 1000;

for (let i = 0; i < limit; i++) {
    let fila = "<tr><td>";
    fila += i + ".- " + String.fromCodePoint(i);
    fila += "</td></tr>";
    document.getElementById("tablaUnicode").innerHTML += fila
}