"use strict";

class Cliente {
    constructor(nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
};

class Factura {
    constructor(cliente, elementos = ["Descripción genérica", 0, 0.00]) {
        this.cliente = cliente;

        this.descripcion = elementos[0];
        this.cantidad = elementos[1];
        this.precio = elementos[2];

        this.baseImponible = 0;
        this.iva = 21;
        this.total = 0;
        this.formaPago = "Contado";
    }
};

class Empresa {
    constructor(nombre, direccion, telefono, cif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.cif = cif;
    }
};

Factura.prototype.empresa = null;
Factura.prototype.calcularTotal = function () {
    this.total = this.precio + (this.precio * (this.iva / 100));
};
Factura.prototype.mostrarTotal = function () {
    console.log("El total es: " + this.total);
};


const cliente = new Cliente("Juan Pérez", "Calle Falsa 123", "555-555-555", "12345678A");
const empresa = new Empresa("Mi Empresa S.L.", "Avenida Siempre Viva 742", "555-555-555", "B12345678");
const factura = new Factura(cliente, ["Producto A", 2, 150.00]);

Factura.prototype.empresa = empresa;

factura.calcularTotal();
factura.mostrarTotal();

console.log(factura);