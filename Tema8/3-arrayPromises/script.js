let supermercados = `[{"nombre":"Gadis","calle":"Rúa Travesía de Vigo 100", "ciudad":"Vigo","telefono":"986266154"},
{"nombre":"Gadis","calle":"Av. Alcalde Gregorio Espino 6", "ciudad":"Vigo","telefono":"986252688"},{"nombre":"Gadis","calle":"Rúa Travesía de Vigo 39", "ciudad":"Vigo","telefono":"986266412"}]`;

const listadosupermercados = new Promise((resolve, reject) => {
    try {
        const arraySupermercados = JSON.parse(supermercados);
        resolve(arraySupermercados);
    } catch (error) {
        reject(new Error("Error al procesar el listado de supermercados"));
    }
});

const printAll = (array, lista) => {
    array.forEach(obj => {
        let ul = document.createElement("ul");
        ul.textContent = Object.keys(obj).map(key => obj[key] + "\n").join(" | ");
        lista.append(ul);
    });
};

const listaSupermercados = document.getElementById("listaSupermercados");

listadosupermercados
    .then(array => {
        printAll(array, listaSupermercados);
    })
    .catch(error => {
        console.error(error);
        listaSupermercados.textContent = "Error al cargar la lista de supermercados";
    });
