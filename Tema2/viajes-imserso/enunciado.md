# Enunciado

## Situación

En la adjudicación de viajes del Imserso, se deben introducir en un formulario una lista de lugares a los que se quiere viajar por orden de preferencia.

## A realizar

Aplicación para editar listado de lugares a visitar que permita editarlos en orden.

Partiendo de la página web que se proporciona, crear una aplicación para editar un listado de lugares a visitar. Para esto habrá que hacer lo siguiente:

- Crear un array cargado con algunos datos.
- Mostrar en la página una tabla con los datos del array y su posición.
- Programar las acciones de los botones
  - Insertar un elemento al principio/fin.
  - Insertar un elemento en cualquier posición.
  - Insertar un elemento al final.
  - Cambiar un elemento en cualquier posición.
  - Eliminar un elemento en una posición. (Se debe proporcionar la posición)
- Imprimir en el campo "Observaciones"  los mensajes de error que se necesiten.
- Programar la función limpiar, que limpie el campo de observaciones.
- Debe validarse:
  - Que se introduzca un lugar, que no sea el campo vacío (.trim()) y guardarlo en MAYÚSCULAS.
  - Comprobar, en las opciones que necesitan una posición, que se le pasa una, é dicir que no se deja vacía o se introduce un texto (isNaN).
  - Comprobar antes de introducir el lugar que no esté ya previamente en el listado.

## PARTE EXTRA

Cambia el foramto de las funciones a funciones con notación flecha
