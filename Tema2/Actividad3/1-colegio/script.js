// No usamos index.html y style.css para nada

class Colegio {
    constructor(nombre, numeroAulas, numeroAlumnos) {
        this.nombre = nombre;
        this.numeroAulas = numeroAulas;
        this.numeroAlumnos = numeroAlumnos;
    }

    anyadirAlumno() {
        this.numeroAlumnos++;
    }

    eliminarAlumno() {
        this.numeroAlumnos--;
    }
}

class Alumno {
    constructor(dni, nombre, notaMedia) {
        this.dni = dni;
        this.nombre = nombre;
        this.notaMedia = notaMedia;
    }

    calcularNotaMedia(...notas) {
        let suma = 0;
        for (let nota of notas) {
            suma += nota;
        }
        this.notaMedia = Math.round((suma / notas.length) * 100) / 100;
    }
}

let colegio = new Colegio("IES de Teis", 10, 200);
let alumno = new Alumno("12345678A", "Pepe", 0);

colegio.anyadirAlumno();
console.log("Número de alumnos: " + colegio.numeroAlumnos);

for (let i = 0; i < 58; i++) {
    colegio.eliminarAlumno();
}

console.log("Número de alumnos: " + colegio.numeroAlumnos);

console.log("Nota media de " + alumno.nombre + ": " + alumno.notaMedia);
alumno.calcularNotaMedia(5, 6, 7, 3, 1, 6, 6, 6, 6, 8, 9, 8, 2, 5, 3, 4, 4);
console.log("Nota media de " + alumno.nombre + ": " + alumno.notaMedia);