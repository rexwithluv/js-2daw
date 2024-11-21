const print = (string) => {
    let obj = JSON.parse(string);
    return Object.keys(obj).map(key => `${key.toUpperCase()}: ${obj[key]}`).join(" | ");
};

let supermercado = '{"nombre":"Gadis","calle":"Travesía de Vigo 100", "ciudad":"Vigo","telefono":"986266154"}';
document.getElementById("obxecto").textContent = print(supermercado);

