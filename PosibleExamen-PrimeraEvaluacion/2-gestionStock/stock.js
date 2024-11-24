"use strict";

class Producto {
    constructor(id, nombre, cantidad, precio) {
        this.id = id
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

// CRUD => R
const mostrarProductos = (objetoProductos) => {
    const tbody = document.getElementById("tbody");
    tbody.textContent = "";
    objetoProductos.forEach(objeto => {
        let tr = document.createElement("tr");
        for (let prop in objeto) {
            let td = document.createElement("td");
            td.textContent = objeto[prop];
            tr.append(td);
        }
        tbody.append(tr);
    });
}

if (localStorage.getItem("productos") === null) {
    localStorage.setItem("productos", JSON.stringify([
        new Producto(1, "Lana de alpaca natural", 5, 10.00),
        new Producto(2, "Lana 100%", 12, 5.99),
        new Producto(3, "Agujas circulares", 1, 69.99)
    ]));
}

let productos = JSON.parse(localStorage.getItem("productos"));
mostrarProductos(productos);

// CRUD => CU
const form = document.getElementById("formulario");
form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const ID_PRODUCTO = document.getElementById("idProducto");
    const NOMBRE_PRODUCTO = document.getElementById("nombreProducto");
    const CANTIDAD_PRODUCTO = document.getElementById("cantidadProducto");
    const PRECIO_PRODUCTO = document.getElementById("precioProducto");

    const PRODUCTO = new Producto(
        parseInt(ID_PRODUCTO.value),
        NOMBRE_PRODUCTO.value,
        parseInt(CANTIDAD_PRODUCTO.value),
        parseFloat(PRECIO_PRODUCTO.value)
    );

    const BOTON_PULSADO = ev.submitter.value;

    if (BOTON_PULSADO == "eliminar") {
        productos = productos.filter(prod => prod.id != PRODUCTO.id)
    } else if (BOTON_PULSADO == "crear") {
        productos.push(PRODUCTO);
        productos.sort((a, b) => a.id - b.id);
        console.log(productos)
    }

    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarProductos(productos);
});
