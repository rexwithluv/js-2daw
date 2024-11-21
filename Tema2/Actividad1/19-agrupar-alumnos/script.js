// Usando el algoritmo de Fisher-Yates
function desordenarLista(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];  // Intercambio de elementos
    }
    return lista;
}


let alumnos = [];

let masAlumnos = true;
while (masAlumnos) {
    let alumno = prompt("Dame el nombre del alumno: ");

    if (alumno.toLowerCase() == "fin") {
        masAlumnos = false;
    } else {
        if (!alumnos.includes(alumno)) {
            alumnos.push(alumno);
        } else {
            alert("Ese alumno ya estaba en la lista!");
        }
    }
}

alumnos = desordenarLista(alumnos);


let gruposAlumnos = [];
let grupoActual = []
alumnos.forEach(alumno => {
    if (grupoActual.length != 3) {
        grupoActual.push(alumno);
    }

    if (grupoActual.length == 3) {
        gruposAlumnos.push(grupoActual)
        grupoActual = [];
    }
});

// Si sobran alumnos, los metemos a un grupo aleatorio
while (grupoActual.length) {
    let randomIndex = Math.floor(Math.random() * gruposAlumnos.length);

    // Comprobamos que no hayamos metido antes ahí
    if (gruposAlumnos[randomIndex].length == 3) {
        let alumno = grupoActual.pop();
        gruposAlumnos[randomIndex].push(alumno);
    }
}

gruposAlumnos.forEach(grupo => {
    document.getElementById("listaGrupos").innerHTML += "<li>" + grupo.join(", ") + "</li>";
});