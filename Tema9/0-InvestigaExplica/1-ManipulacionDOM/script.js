let lista;

/* Introducir un nuevo elemento al inicio */
lista = $("ul").eq(1);
let nuevoElemento = '"Y no sé si reírme a carcajadas"';
lista.prepend("<li>" + nuevoElemento + "</li>");

/* Eliminar un elemento al final */
lista = $("ul").eq(2);
lista.children().last().remove();

/* Añadir un elemento en la posición 1 */
lista = $("ul").eq(3);
let nuevoElemento2 = '"Lo que siento por ti es tan difícil."';
lista.children().eq(1).before("<li>" + nuevoElemento2 + "</li>");

/* Eliminar el elemento de la posición 1 */
lista = $("ul").eq(4);
lista.children().eq(1).remove();

/* Eliminar toda la lista */
lista = $("ul").eq(5);
lista.remove();