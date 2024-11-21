// No usamos index.html y style.css para nada

class Hospital {
    constructor(nombre, ciudad, numPacientes) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.numPacientes = numPacientes;
    }

    /**
     * Añade un paciente al hospital.
     * @param {Paciente} paciente - El paciente a añadir.
     */
    anyadirPaciente(paciente) {
        this.numPacientes++;
    }

    darAltaPaciente(paciente) {
        this.numPacientes--;
    }
}

class Paciente {
    constructor(dni, nombre, enfermedad) {
        this.dni = dni;
        this.nombre = nombre;
        this.enfermedad = enfermedad;
    }
}

const hospital = new Hospital("Hospital de la Paz", "Madrid", 1000);
const paciente1 = new Paciente("12345678A", "Juan", "Gripe");
const paciente2 = new Paciente("87654321B", "Ana", "Gripe");

/** @type {string} */
const paciente = "paciente";

hospital.anyadirPaciente(paciente);