"use strict";

// Variables
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Portátil1',
        precio: 1000,
        imagen: './images/portatil1.jpg'
    },
    {
        id: 2,
        nombre: 'Portátil2',
        precio: 800,
        imagen: './images/portatil.jpg'
    },
    {
        id: 3,
        nombre: 'Memoria USB',
        precio: 10.15,
        imagen: './images/usb_mem.jpg'
    },
    {
        id: 4,
        nombre: 'Tablet',
        precio: 309,
        imagen: './images/tablet.jpg'
    }
    ,
    {
        id: 5,
        nombre: 'Placa Madre',
        precio: 100,
        imagen: './images/placaMadre.jpg'
    }
    ,
    {
        id: 6,
        nombre: 'Cirtuito Arduino',
        precio: 59,
        imagen: './images/circuito_conArduino.jpg'
    }
    ,
    {
        id: 7,
        nombre: 'Disco Duro',
        precio: 95,
        imagen: './images/hd.jpg'
    }
    ,
    {
        id: 8,
        nombre: 'Teclado',
        precio: 35,
        imagen: './images/keyboard.jpg'
    }
    ,
    {
        id: 9,
        nombre: 'Polímetro y otros',
        precio: 18,
        imagen: './images/polimetro.jpg'
    }
];

//Array de elementos que se van metiendo en el carrito
let carrito = [];

//Precio total del carrito. Inicialmente es 0
let total = 0;
let DOMitems = ''; //Productos(items) de la tienda
let DOMcarrito = ''; //Lista de elementos que están en el carrito
let DOMtotal = ''; //total del carrito. Es un <span>
let DOMbotonVaciar = ''; //Botón que vacía el contenido del carrito

//ALMACENAMIENTO CARRITO
const miLocalStorage = window.localStorage;

function leer_DOM() {
    DOMitems = document.getElementById('items'); //Productos(items) de la tienda
    DOMcarrito = document.getElementById('carrito'); //Lista de elementos que están en el carrito
    DOMtotal = document.getElementById('total'); //total del carrito. Es un <span>
    DOMbotonVaciar = document.getElementById('boton-vaciar'); //Botón que vacía el contenido del carrito
}
// Funciones

//VISTA
/**
 * TO-DO.Función1
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
    //HACER*******************************
    //CREA LA ESTRUCTURA EN DOMitems. Por cada producto muestra: imagen, nombre,precio, botón para añadirlo al carrito.
    //Ayuda: Ver imagen de la página final y ver Contenido HTM del nodo DOMitems para realizarlo

    baseDeDatos.forEach(producto => {
        let divPadre = document.createElement("div");
        divPadre.classList.add("card", "col-sm-4");

        let divHijo = document.createElement("div");
        divHijo.classList.add("card-body");

        let img = document.createElement("img");
        img.classList.add("img-fluid");
        img.src = producto.imagen;

        let heading = document.createElement("h5");
        heading.classList.add("card-title");
        heading.textContent = producto.nombre;

        let p = document.createElement("p");
        p.classList.add("card-text");
        p.textContent = producto.precio.toString() + "€";

        let button = document.createElement("button");
        button.classList.add("btn", "btn-primary");
        button.id = producto.id;
        // En lugar de un onclick he hecho un addEventListener "apañado"
        button.addEventListener("click", () => anyadirProductoAlCarrito(producto.id));
        button.textContent = "+";

        divPadre.append(divHijo);
        divHijo.append(img, heading, p, button);

        DOMitems.append(divPadre);
    });
}

/**
 * TO-DO.Función2
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(idProduct) {
    //HACER*******************************
    //Añadir los id del producto al array carrito

    carrito.push(idProduct);

    // Calculo el total
    calcularTotal();

    // Guardamos el nuevo carrito en localStorage
    guardarCarritoEnLocalStorage();

    // Actualizamos el carrito en pantalla
    renderizarCarrito();
}

/**
 * TO-DO.Función3
 * Dibuja todos los productos guardados en el carrito en el ul con id='carrito'
 */
function renderizarCarrito() {
    //HACER*******************************
    //CREA LA ESTRUCTURA EN DOMcarrito.
    //Muestra el NÚMERO DE ELEMENTOS DE CADA PRODUCTO x NOMBRE PRODUCTO - PRECIO
    //de cada producto que hay en el carrito.
    //Ayuda: Ver imagen del carrito con productos y ver Contenido HTM del nodo DOMcarrito para realizarlo
    DOMcarrito.textContent = "";

    if (carrito.length != 0) {
        let idsUsados = [];

        carrito.forEach(productoId => {
            // Comprobamos que ya hemos usado ese ID para que no salga el mismo producto dos veces
            if (!idsUsados.includes(productoId)) {
                idsUsados.push(productoId);

                let li = document.createElement("li");
                li.classList.add("list-group-item", "text-right", "mx-2");
                li.textContent = carrito.reduce((acc, prodId) => acc + (prodId === productoId ? 1 : 0), 0);
                li.textContent += " x ";
                li.textContent += baseDeDatos[productoId - 1].nombre;
                li.textContent += " - ";
                li.textContent += baseDeDatos[productoId - 1].precio;
                li.textContent += "€";

                let button = document.createElement("button");
                button.id = productoId;
                button.classList.add("btn", "btn-danger", "mx-5");
                button.style.margin = "1rem";
                // Again, un listener "apañado";
                button.addEventListener("click", () => borrarItemCarrito(productoId));
                button.textContent = "X";

                li.append(button);

                DOMcarrito.append(li);
            }
        });
    }

    // Si no ponemos la siguiente línea, cuando trae el carrito del localStorage el total pone 0,00€
    calcularTotal();

}

/**
 * TO-DO.Función4
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(idProduct) {

    //HACER*******************************
    // Borramos el producto indicado del carrito y mostramos los que quedan
    carrito = carrito.filter(prodId => prodId != idProduct);

    // Borramos el producto del localStorage
    guardarCarritoEnLocalStorage();

    // volvemos a renderizar
    renderizarCarrito();
    // Calculamos de nuevo el precio
    calcularTotal();
}

/**
 * TO-DO.Función5
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Limpiamos precio anterior
    total = 0;
    //HACER*******************************
    //Calculamos el precio total de los productos que están en el carrito.
    //Imprimimos el precio en DOMtotal con dos decimales máximo

    carrito.forEach(prodId => {
        total += baseDeDatos[prodId - 1].precio;
    });
    total = total.toString();

    // Si no tiene decimales
    if (total.split(".").length === 1) {
        total += ",00";
    } else {
        // Si tiene decimales comprobamos si solo uno
        if (total.split(".")[1].length === 1) {
            total += "0";
        }

        // Solo cuando quiere mete no se cuantos decimales sin sentido
        total = [
            total.split(".")[0],
            total.split(".")[1].slice(0, 2)
        ].join(",");
    }

    DOMtotal.textContent = total;
}

/**
 * TO-DO.Función6
 * Vacia el carrito y el miLocalStorage y vuelve a dibujarlo
 */
function vaciarCarrito() {
    //HACER*******************************
    // Limpiamos los productos guardados en el carrito
    // Limpiamos el objeto Storage miLocalStorage
    carrito = [];
    miLocalStorage.removeItem("carrito");

    // Finalmente Renderizamos los cambios
    renderizarCarrito();
    calcularTotal();
}


/**
 * TO-DO.Función7
 * GUARDA EL CARRITO EN localStorage y lo recupera al inicial la página */
function guardarCarritoEnLocalStorage() {
    //HACER*******************************
    //Guarda el carrito en miLocalStorage. Debe ser en JSON pues carrito es un array.
    miLocalStorage.setItem("carrito", JSON.stringify(carrito));
}

//TO-DO.Función8
function cargarCarritoDeLocalStorage() {
    //HACER*******************************
    // Lo que hace es cargar el array carrito. Es decir,
    //Recupera el carrito almacenado en miLocalStorage y asígnaselo al array carrito.
    //comprueba previamente si hay un carrito guardado en la variable miLocalStorage
    carrito = JSON.parse(miLocalStorage.getItem("carrito")) ?? [];
}


// CONTROLADOR
// Parte que controla la aplicación.
document.addEventListener('DOMContentLoaded',
    () => {
        leer_DOM();
        cargarCarritoDeLocalStorage();
        renderizarCarrito();
        renderizarProductos();
        DOMbotonVaciar.addEventListener('click', vaciarCarrito);

        // Contador de visitas
        const numeroVecesDOM = document.getElementById("numeroVeces");
        let numeroVeces = 0;
        if (localStorage.getItem("numeroVeces") === null) {
            localStorage.setItem("numeroVeces", numeroVeces)
        } else {
            numeroVeces = localStorage.getItem("numeroVeces");
        }
        numeroVeces++;
        numeroVecesDOM.textContent = numeroVeces;
        localStorage.setItem("numeroVeces", numeroVeces);
    }
)

