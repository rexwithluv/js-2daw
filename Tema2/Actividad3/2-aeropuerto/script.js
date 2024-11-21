// No usamos index.html y style.css para nada

class Aeropuerto {
    constructor(nombre, ciudad, numeroVuelosDiarios) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.numeroVuelosDiarios = numeroVuelosDiarios;
    }
}

class Vuelo {
    constructor(codigo, horaLlegada, horaSalida) {
        this.codigo = codigo;
        this.horaLlegada = horaLlegada;
        this.horaSalida = horaSalida;
    }

    modificarHoraLlegada(nuevaHoraLLegada) {
        this.horaLlegada = nuevaHoraLLegada;
    }

    modificarHoraSalida(nuevaHoraSalida) {
        this.horaSalida = nuevaHoraSalida;
    }

    // Comprobar si el horario de salida es posterior a la hora de llegada
    horarioCorrecto(){
        return this.horaSalida > this.horaLlegada;
    }
}

