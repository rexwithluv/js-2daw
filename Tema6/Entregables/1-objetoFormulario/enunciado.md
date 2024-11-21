# Ejercicio 1

## Objetivo

- Comprender el funcionamento del tipo de dato objeto.
- Relacionar a toma de datos del usuario en la página HTML con el tipo de datos obxecto.

## Hacer

Partiendo de los datos de un formulario como el seguiente (código del formulario para copiar):

```html
<div id="formintro">
<label>Nombre: </label>
<input type=text id='nombre'>
<label>Apellidos: </label>
<input type=text id='apellidos'>
<label>Ciudad: </label>
<input type=text id='ciudad'>
<button onclick="gardardatos()">Guardar</button>
</div>
<div id="tabla">
</div>
```

Crear un objeto persona, que almacene la información del formulario. Si no se introdujeron datos en los 3 campos (nombe, apellidos e ciudad) , que indique un

```js
    alert ("Debes introducir datos en los 3 campos solicitados")
```

En caso de que se introduzcan datos en los 3 campos, que mostre un:

```js
    alert("Los datos fueron guardados correctamente")
    y que llamando a una función mostrar(), se muestre la información introducida por el usuario en una tabla, que debe de situarse en <div con id="tabla"
```

El resultado debería de ser más o menos el siguiente:
