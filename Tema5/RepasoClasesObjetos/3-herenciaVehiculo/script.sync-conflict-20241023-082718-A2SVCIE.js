"use strict";

class Vehiculo {
    constructor(marca, modelo, color, anyoFabricacion, cilindrada) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.anyoFabricacion = anyoFabricacion;
        this.cilindrada = cilindrada;
    }

    mostrarDatos() {
        for (let prop in this) {
            console.log(prop + ": " + this.prop);
        }
    }

    acelerar(velocidad) { }
    arrancar() { }
    frenar() { }
}