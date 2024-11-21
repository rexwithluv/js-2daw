"use strict";

/* Funciones que muy amablemente me ha dado GPT */
// Crear una cookie [GPT]
function setCookie(name, value, days) {
    console.log("Creo una cookie!");
}

// Leer una cookie [GPT]
function getCookie(name) {
    console.log("Leo cookies!");
}

// Guardar las tareas en una cookie [GPT]
function saveTasksToCookie(tasks) {
    console.log("Guardo las tareas como una cookie!");
}

// Cargar las tareas desde una cookie [GPT]
function loadTasksFromCookie() {
    console.log("Cargo las cookies al inicio!");
}

// El listener que carga las cookies al abrir la página [GPT]
window.addEventListener("load", () => {
    loadTasksFromCookie()
});

const taskList = document.getElementById("lista-tareas");
taskList.addEventListener("change", () => {

    // Sobre todos los botones de borrar ponemos un Listner
    const buttonsDelete = document.querySelectorAll(".borrar");
    buttonsDelete.forEach((button) => {
        button.addEventListener("click", () => {
            // Busca el <li> más cercano y lo elimina
            button.closest("li").remove();
        });
    });

    saveTasksToCookie(taskList);
});

// El botón que crea las tareas
const button = document.getElementById("boton");
button.addEventListener("click", () => {
    const taskText = document.getElementById("tarea");
    const taskList = document.getElementById("lista-tareas");

    if (taskText.value == "") return;

    let li = document.createElement("li");
    li.textContent = taskText.value;
    li.innerHTML += "&nbsp;<button type='button' class='borrar'>Borrar</button>";
    li.classList.add("tarea");
    taskText.value = "";

    taskList.append(li);
    taskList.dispatchEvent(new Event("change"));
});

// Listener para cambiar el orden de las tareas al hacer click
taskList.addEventListener("click", (ev) => {
    const li = ev.target;
    if (li.tagName === "LI") {
        taskList.prepend(li);
    }
});