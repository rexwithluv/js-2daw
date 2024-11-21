let supermercados = `[{"nombre":"Gadis","calle":"Rúa Travesía de Vigo 100", "ciudad":"Vigo","telefono":"986266154"},
{"nombre":"Gadis","calle":"Av. Alcalde Gregorio Espino 6", "ciudad":"Vigo","telefono":"986252688"},{"nombre":"Gadis","calle":"Rúa Travesía de Vigo 39", "ciudad":"Vigo","telefono":"986266412"}]`;

async function listadosupermercados() {
    try {
        const arraySupermercados = JSON.parse(supermercados);
        return (arraySupermercados);
    } catch (error) {
        throw new Error("Error al procesar la lista de supermercados");
    }
}

const printAll = (array, lista) => {
    array.forEach(obj => {
        let ul = document.createElement("ul");
        ul.textContent = Object.keys(obj).map(key => obj[key] + "\n").join(" | ");
        lista.append(ul);
    });
};

const listaSupermercados = document.getElementById("listaSupermercados");

async function cargarSupermercados() {
    try {
        const array = await listadosupermercados();
        printAll(array, listaSupermercados);
    } catch (error) {
        console.log(error);
        listaSupermercados.textContent = "Error al cargar la lista de supermercados";
    }
}

cargarSupermercados();
