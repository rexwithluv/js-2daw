"use strict";

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    obtDetalles() {
        for (let prop in this) {
            console.log(prop + ": " + this[prop]);
        }
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar() {
        console.log(`Estudiante ${this.nombre} registrado en el curso ${this.curso}, grupo ${this.grupo}.`);
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    asignar() {
        console.log(`Profesor ${this.nombre} asignado a la asignatura ${this.asignatura}, nivel ${this.nivel}.`);
    }
}

const estudiante1 = new Estudiante("Ana", 20, "Femenino", "Informática", "A");
const profesor1 = new Profesor("Carlos", 45, "Masculino", "Matemáticas", "Secundaria");

console.log("Detalles del Estudiante:");
estudiante1.obtDetalles();
estudiante1.registrar();

console.log("\nDetalles del Profesor:");
profesor1.obtDetalles();
profesor1.asignar();
