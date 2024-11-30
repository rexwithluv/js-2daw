//MODELO --------------
//----------------------

// Variables
const baseDeDatos = [
   id: 1,
        nombre: 'Portátil1',
        precio: 1000,
        imagen: './img_tipoB/portatil1.jpg'
    },
    {
        id: 2,
        nombre: 'Portátil2',
        precio: 800,
        imagen: './img_tipoB/portatil.jpg'
    },
    {
        id: 3,
        nombre: 'Memoria USB',
        precio: 10.15,
        imagen: './img_tipoB/usb_mem.jpg'
    },
    {
        id: 4,
        nombre: 'Tablet',
        precio: 309,
        imagen: './img_tipoB/tablet.jpg'
    }
    ,
    {
        id: 5,
        nombre: 'Placa Madre',
        precio: 100,
        imagen: './img_tipoB/placaMadre.jpg'
    }
    ,
    {
        id: 6,
        nombre: 'Cirtuito Arduino',
        precio: 59,
        imagen: './img_tipoB/circuito_conArduino.jpg'
    }
    ,
    {
        id: 7,
        nombre: 'Disco Duro',
        precio: 95,
        imagen: './img_tipoB/hd.jpg'
    }
    ,
    {
        id: 8,
        nombre: 'Teclado',
        precio: 35,
        imagen: './img_tipoB/keyboard.jpg'
    }
    ,
    {
        id: 9,
        nombre: 'Polímetro y otros',
        precio: 18,
        imagen: './img_tipoB/polimetro.jpg'
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

function leer_DOM()
{
    DOMitems = document.querySelector('#items'); //Productos(items) de la tienda
    DOMcarrito = document.querySelector('#carrito'); //Lista de elementos que están en el carrito
    DOMtotal = document.querySelector('#total'); //total del carrito. Es un <span>
    DOMbotonVaciar = document.querySelector('#boton-vaciar'); //Botón que vacía el contenido del carrito
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
    
            
    
}

/**
 * TO-DO.Función2
 * Evento para añadir un producto al carrito de la compra
 */
function anhadirProductoAlCarrito(idProduct) {
    
    //HACER*******************************
    //Añadir los id del producto al array carrito


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
    
   
}

/**
 * TO-DO.Función4
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(idProduct) {

      //HACER*******************************   
      // Borramos el producto indicado del carrito y mostramos los que quedan
    






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


}

/**
 * TO-DO.Función6
 * Vacia el carrito y el miLocalStorage y vuelve a dibujarlo
 */
function vaciarCarrito() {
     //HACER*******************************
    // Limpiamos los productos guardados en el carrito
    // Limpiamos el objeto Storage miLocalStorage
    





    // Finalmente Renderizamos los cambios
    renderizarCarrito();
    calcularTotal();
}


/**
 * TO-DO.Función7 
 * GUARDA EL CARRITO EN localStorage y lo recupera al inicial la página */
function guardarCarritoEnLocalStorage () {

     //HACER*******************************
     //Guarda el carrito en miLocalStorage. Debe ser en JSON pues carrito es un array.
    

}

//TO-DO.Función8
function cargarCarritoDeLocalStorage () {
    //HACER*******************************
    // Lo que hace es cargar el array carrito. Es decir,
    //Recupera el carrito almacenado en miLocalStorage y asígnaselo al array carrito.
    //comprueba previamente si hay un carrito guardado en la variable miLocalStorage

    
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
    }
)

