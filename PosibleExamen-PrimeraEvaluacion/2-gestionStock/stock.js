"use strict";

class Producto {
    constructor(id, nombre, cantidad, precio) {
        this._id = id
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._precio = precio;
    }

    get id() { return this._id; }
    set id(value) { throw Error("El ID no es modificable!"); }

    get nombre() { return this._nombre; }
    set nombre(value) {
        if (value.trim() === "") {
            throw Error("El nombre del producto no puede estar vacío!");
        }
        this._nombre = value;
    }

    get cantidad() { return this._cantidad; }
    set cantidad(value) {
        if (value === 0) {
            throw Error("No puedes añadir un producto si no tienes stock!");
        }
        this._cantidad = value;
    }

    get precio() { return this._precio; }
    set precio(value) {
        if (value === 0.00) {
            throw Error("No puedes poner un producto sin precio!");
        }
        this._precio = value;
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

    productos[ID_PRODUCTO - 1] = new Producto(
        ID_PRODUCTO.value,
        NOMBRE_PRODUCTO.value,
        CANTIDAD_PRODUCTO.value,
        PRECIO_PRODUCTO.value
    );

    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarProductos(productos);
});
