let supermercados = `[{"nombre":"Gadis","calle":"Rúa Travesía de Vigo 100", "ciudad":"Vigo","telefono":"986266154"},
{"nombre":"Gadis","calle":"Av. Alcalde Gregorio Espino 6", "ciudad":"Vigo","telefono":"986252688"},{"nombre":"Gadis","calle":"Rúa Travesía de Vigo 39", "ciudad":"Vigo","telefono":"986266412"}]`;

const printAll = (JSONString, lista) => {
    let objs = JSON.parse(JSONString);
    objs.forEach(obj => {
        let ul = document.createElement("ul");
        ul.textContent = Object.keys(obj).map(key => obj[key] + "\n").join(" | ");
        lista.append(ul);
    });

};

const listaSupermercados = document.getElementById("listaSupermercados");
printAll(supermercados, listaSupermercados);