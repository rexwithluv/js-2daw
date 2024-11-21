"use strict";

class Empleado {
    constructor(nombre = "", departamento = "General") {
        this.nombre = nombre;
        this.departamento = departamento;
    }
}

class Director extends Empleado {
    constructor(nombre, departamento, informes = []) {
        super(nombre, departamento);
        this.informes = informes;
    }
}

class Trabajador extends Empleado {
    constructor(nombre, departamento, proyectos = []) {
        super(nombre, departamento);
        this.proyectos = proyectos;
    }
}

class Ingeniero extends Trabajador {
    constructor(nombre, proyectos, maquina) {
        super(nombre, "Ingeniería", proyectos);
        this.maquina = maquina;
    }
}


