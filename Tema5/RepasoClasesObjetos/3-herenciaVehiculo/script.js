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
            console.log(prop + ": " + this[prop]);
        }
    }

    acelerar(velocidad) {
        console.log(`El coche ha acelerado ${velocidad}km/h`);
    }
    arrancar() {
        console.log(`El ${this.marca}, ${this.modelo} de color ${this.color} ha arrancado.`);
    }
    frenar() {
        console.log(`El ${this.marca}, ${this.modelo} de color ${this.color} ha frenado.`);
    }
}

class Furgoneta extends Vehiculo {
    constructor(marca, modelo, color, anyoFabricacion, cilindrada, numPasajeros) {
        super(marca, modelo, color, anyoFabricacion, cilindrada);
        this.numPasajeros = numPasajeros;
    }
}

class Todoterreno extends Vehiculo {
    constructor(marca, modelo, color, anyoFabricacion, cilindrada, traccion) {
        super(marca, modelo, color, anyoFabricacion, cilindrada);
        this.traccion = traccion;
    }
}

const miFurgoneta = new Furgoneta("Mercedes", "Vito", "Blanco", 2020, 2200, 8);
const miTodoterreno = new Todoterreno("Jeep", "Wrangler", "Verde", 2021, 3500, "4x4");

console.log("Datos de la Furgoneta:");
miFurgoneta.mostrarDatos();
miFurgoneta.arrancar();
miFurgoneta.acelerar(80);
miFurgoneta.frenar();

console.log("\nDatos del Todoterreno:");
miTodoterreno.mostrarDatos();
miTodoterreno.arrancar();
miTodoterreno.acelerar(100);
miTodoterreno.frenar();