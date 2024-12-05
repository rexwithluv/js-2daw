"use strict";


class Alumno {
    constructor(dni, nombre, apellidos, ciudad, fechaAlta) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.ciudad = ciudad;
        this.fechaAlta = fechaAlta;
    }
}


// Funciones
function limpiarFormulario() {
    document.getElementById("dni").disabled = false;
    document.getElementById("dni").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("ciudad").value = "";
}

function capitalize(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
};

function recargarTabla(listaAlumnos) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    listaAlumnos.forEach(alumno => {
        let tr = document.createElement("tr");
        for (let prop in alumno) {
            let td = document.createElement("td");
            td.textContent = alumno[prop];

            if (prop == "id") {
                td.hidden = true;
            }
            tr.append(td);
        }


        let buttonMod = document.createElement("button");
        buttonMod.type = "button";
        buttonMod.classList.add("btn", "btn-warning", "me-2");
        buttonMod.innerHTML = '<i class="bi bi-pencil-square"></i>';
        buttonMod.addEventListener("click", (ev) => {
            document.getElementById("dni").disabled = true;

            document.getElementById("dni").value = ev.target.closest("tr").cells[1].textContent;
            document.getElementById("nombre").value = ev.target.closest("tr").cells[2].textContent;
            document.getElementById("apellidos").value = ev.target.closest("tr").cells[3].textContent;
            document.getElementById("ciudad").value = ev.target.closest("tr").cells[4].textContent;
        });

        let buttonDel = document.createElement("button");
        buttonDel.type = "button";
        buttonDel.classList.add("btn", "btn-danger");
        buttonDel.innerHTML = '<i class="bi bi-trash-fill"></i>';
        buttonDel.addEventListener("click", (ev) => {
            eliminarAlumno(ev.target.closest("tr").cells[1].textContent);
        });

        let td = document.createElement("td");
        td.append(buttonMod, buttonDel);

        tr.append(td);
        tbody.append(tr);
    })
}

// Funciones CRUD
async function guardarAlumno(alumno) {
    try {
        const response = await fetch("http://localhost:3000/alumnos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(alumno),
        });
        if (!response.ok) {
            throw new Error("Error al guardar el el alumno:", response.status);
        }

        const nuevoAlumno = await response.json();
        alumnos.push(nuevoAlumno);
        Swal.fire({
            title: "Alumno guardado",
            text: "Alumno guardado con éxito.",
            icon: "success",
        });
        limpiarFormulario();

        main();
    } catch (error) {
        console.error(error);
    }
}

async function leerJSON() {
    try {
        const response = await fetch("http://localhost:3000/alumnos");
        if (!response.ok) {
            throw new Error(`Error al leer el fichero .json: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

async function modificarAlumno(alumnoDNI) {
    try {
        const response = await fetch("http://localhost:3000/alumnos");
        if (!response.ok) {
            throw new Error("Error cargando los alumnos.");
        }

        const alumnos = await response.json();
        const alumnoExistente = alumnos.find(almn => almn.dni === alumnoDNI);

        const responsePUT = await fetch(`http://localhost:3000/alumnos/${alumnoExistente.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: alumnoExistente.id,
                dni: alumnoExistente.dni,
                nombre: document.getElementById("nombre").value.length > 0 ? capitalize(document.getElementById("nombre").value) : alumnoExistente.nombre,
                apellidos: document.getElementById("apellidos").value.length > 0 ? capitalize(document.getElementById("apellidos").value) : alumnoExistente.apellidos,
                ciudad: document.getElementById("ciudad").value.length > 0 ? capitalize(document.getElementById("ciudad").value) : alumnoExistente.ciudad,
                fechaAlta: alumnoExistente.fechaAlta
            }),
        });

        if (!responsePUT.ok) {
            throw new Error("Error al modificar el alumno.");
        }

        main();
    } catch (error) {
        console.error(error);
    }
}

async function eliminarAlumno(alumnoDNI) {
    const result = await Swal.fire({
        title: "Confirmación",
        text: "¿Estás seguro de que quieres dar de baja este alumno?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar"
    })

    if (result.isConfirmed) {
        try {
            const response = await fetch("http://localhost:3000/alumnos");
            if (!response.ok) {
                throw new Error("Error cargando los alumnos.");
            }

            const alumnos = await response.json();
            const alumnoExistente = alumnos.find(almn => almn.dni === alumnoDNI);

            const responseDELETE = await fetch(`http://localhost:3000/alumnos/${alumnoExistente.id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json", },
            });

            if (!responseDELETE.ok) {
                throw new Error("Error al eliminar al alumno");
            }

            main();
        } catch (error) {
            console.error(error);
        }
    }

}

let alumnos;
async function main() {
    alumnos = await leerJSON();
    recargarTabla(alumnos);
}


// Listeners
document.getElementById("form").addEventListener("submit", (ev) => {
    ev.preventDefault();

    // Obtnemos todos los valores y los capitalizamos si es necesario
    const DOMdni = document.getElementById("dni").value.toUpperCase();
    const DOMnombre = capitalize(document.getElementById("nombre").value);
    const DOMapellidos = capitalize(document.getElementById("apellidos").value);
    const DOMciudad = capitalize(document.getElementById("ciudad").value);

    const dataOK = (...args) => args.every(arg => arg.length > 0);
    if (dataOK(DOMdni, DOMnombre, DOMapellidos, DOMciudad)) {
        const alumno = new Alumno(
            DOMdni,
            DOMnombre,
            DOMapellidos,
            DOMciudad,
            new Date().toLocaleDateString("es-ES", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            })
        );

        const existeAlumno = alumno => alumnos.find(almn => almn.dni === alumno.dni);
        if (existeAlumno(alumno)) {
            modificarAlumno(alumno.dni);
        } else {
            guardarAlumno(alumno);
        }

        main();
    } else {
        Swal.fire({
            title: "Faltan datos",
            text: "Por favor, rellena todos los campos.",
            icon: "warning",
        });
    }
});

// Para ordenar la tabla cuando se da doble click sobre la cabecera
const headers = document.querySelectorAll("table thead th");
headers.forEach(head => {
    head.addEventListener("dblclick", (evnt) => {
        const col = evnt.target.getAttribute("col");
        if (col === "dni") {
            alumnos.sort((a, b) => parseInt(a.dni) - parseInt(b.dni));
        } else if (col === "nombre") {
            alumnos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        } else if (col === "apellidos") {
            alumnos.sort((a, b) => a.apellidos.localeCompare(b.apellidos));
        } else if (col === "ciudad") {
            alumnos.sort((a, b) => a.ciudad.localeCompare(b.ciudad));
        } else {
            alumnos.sort((a, b) => {
                const [diaA, mesA, anioA] = a.fechaAlta.split('/').map(Number);
                const [diaB, mesB, anioB] = b.fechaAlta.split('/').map(Number);
                return new Date(anioA, mesA - 1, diaA) - new Date(anioB, mesB - 1, diaB);
            });
        }

        recargarTabla(alumnos);
    });
});

// El botón del formulario que limpia
document.getElementById("botonLimpiar").addEventListener("click", () => limpiarFormulario());


main();