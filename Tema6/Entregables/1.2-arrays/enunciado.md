# Ejercicio 1.2

## Objetivo

- Relacionar el uso dos obxectos cos arrays.
- Practicar la estructura de datos array y las clases de ES6.

## Hacer

Partiendo del código do "Ejercicio - Crear un objeto con los datos de un formulario", ahora vamos a recoger datos de tantas personas como introduzca el usuario en un array.

```html
<div>
    <label>Nombre: </label>
    <input type=text id='nombre'>
    <label>Apellidos: </label>
    <input type=text id='apellidos'>
    <label>Ciudad: </label>
    <input type=text id='ciudad'>
    <button onclick="gardardatos()">Guardar</button>
</div>
<div id='tabla'>
</div>
```

Las estructuras de datos que hay que emplear son:

- Array de objetos persona.
- Clase Persona.

El programa hará:

- Según se vayan metiendo datos, se deberá:
  1. Comprobar que los campos no están vacíos. De ser así, dará un error con un alert. (** Sólo se hace esta validación, no se hace ninguna otra validación de los campos)
  2. Una vez se introduzcan los campos en el array, llamará a una función mostrar_fila, que se encargue de añadir en la tabla los datos mostrados como una unica fila. Es decir, la función mostrar_fila, debe añadir solamente un nuevo `<tr>`.

Para desarrollar el programa es obligatorio:

1. Usar un objeto persona que tenga los atributos de nombre, apellidos y ciudad.
2. Definir la estructura de objeto, creando los métodos necesarios para que nos den la información básica, y que los métodos vayan asociados al prototype.
3. Utilizar un array que vaya almacenando los objetos cada vez que se pulse en el botón guardar.
4. Emplear una función llamada limpiar_campos(), que se encargue de limpiar los campos del formulario.
5. Crear una función datosOK(), que devuelva true o false, según todos los campos estén completados.
6. Aplicar un estilo de tabla de Bootstrap similar al que se presenta aquí.
