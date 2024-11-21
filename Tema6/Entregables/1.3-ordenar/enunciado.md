# Ejercicio 1.2

## Hacer

Partiendo del código de la tarea anterior, vamos a ordenar los datos por las cabeceras de las tablas.

Es decir:

- Al hacer doble click en DNI, ordena por DNI.
- Al realizar doble click en Apellidos, ordena por apellidos.

Partimos de un código como el que sigue:

```html
<div id='cabecera'>
  <h1>Datos Alumnos IES de Teis</h1>
</div>
<div id='form'>
  <label>Nombre: </label>
  <input type=text id='nombre'>
  <label>Apellidos: </label>
  <input type=text id='apellidos'>
  <label>Ciudad: </label>
  <input type=text id='ciudad'>
  <label>DNI: </label>
  <input type=text id='dni'>
  <button onclick="guardardatos()">Guardar</button>
</div>
<div id='tabla'>
  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col" ondblclick="ordenar_dni()">DNI</th>
      <th scope="col" ondblclick="ordenar_apelido()">Apelidos</th>
      <th scope="col" ondblclick="ordenar_nome()">Nome</th>
      <th scope="col" ondblclick="ordenar_ciudad()">Ciudad</th>
    </tr>
    </thead>
      <tbody id='fila'>
    </tbody>
  </table>
</div>
```
