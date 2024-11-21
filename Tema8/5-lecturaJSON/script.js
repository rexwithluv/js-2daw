const printAll = (array, lista) => {
    array.forEach(obj => {
        let ul = document.createElement("ul");
        ul.textContent = Object.keys(obj).map(key => obj[key] + "\n").join(" | ");
        lista.append(ul);
    });
};


const listaSupermercados = document.getElementById("listaSupermercados");
const SUPERMERCADOS = fetch("supermercados.json")
    .then(response => response.json())
    .catch(error => console.log("Error: ", error));

SUPERMERCADOS.then(data => {
    printAll(data, listaSupermercados);
});