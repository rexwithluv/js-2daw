"use strict";

class ProductoAlimenticio {
    constructor(cod, nombre, precio) {
        this.cod = cod;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos() {
        return "Código: " + this.cod + "\nNombre: " + this.nombre + "\nPrecio: " + this.precio;
    }
};

let productos = [
    new ProductoAlimenticio(101, "Manzana", 1.50),
    new ProductoAlimenticio(102, "Leche", 2.30),
    new ProductoAlimenticio(103, "Pan", 1.20)
];

productos.forEach((prod) => console.log(prod.imprimeDatos() + "\n"));