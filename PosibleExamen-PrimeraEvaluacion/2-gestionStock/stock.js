"use strict";

class Producto {
    constructor(id, nombre, cantidad, precio) {
        this.id = id;
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

// CRUD => CUD
const form = document.getElementById("formulario");
form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const ID_PRODUCTO = parseInt(document.getElementById("idProducto").value);
    const NOMBRE_PRODUCTO = document.getElementById("nombreProducto").value;
    const CANTIDAD_PRODUCTO = parseInt(document.getElementById("cantidadProducto").value);
    const PRECIO_PRODUCTO = parseFloat(document.getElementById("precioProducto").value);

    try {
        if (isNaN(ID_PRODUCTO) ||
            isNaN(CANTIDAD_PRODUCTO) ||
            isNaN(PRECIO_PRODUCTO) ||
            Math.floor(PRECIO_PRODUCTO) === PRECIO_PRODUCTO) {
            throw new Error();
        }

        const PRODUCTO = new Producto(
            ID_PRODUCTO,
            NOMBRE_PRODUCTO,
            CANTIDAD_PRODUCTO,
            PRECIO_PRODUCTO
        );

        const BOTON_PULSADO = ev.submitter.value;

        if (BOTON_PULSADO == "eliminar") {
            productos = productos.filter(prod => prod.id != PRODUCTO.id)
        } else if (BOTON_PULSADO == "crear") {
            if (productos.some(prod => prod.id == PRODUCTO.id)) {
                productos = productos.filter(prod => prod.id != PRODUCTO.id);
            }

            productos.push(PRODUCTO);
            productos.sort((a, b) => a.id - b.id);
        }

        localStorage.setItem("productos", JSON.stringify(productos));
        mostrarProductos(productos);
    } catch (error) {
        Swal.fire({
            title: "¿Este producto es real?",
            text: "Recuerda:\n" + [
                "ID => Número entero",
                "Nombre => Alfanumérico",
                "Cantidad => Número entero",
                "Precio => Número decimal"
            ].join(" | "),
            icon: "error",
            confirmButtonText: "Aceptar"
        });
    }



});
