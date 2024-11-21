# Juego piedra, papel y tijera

- A partir de una array de palabras generamos un valor aleatorio que puede ser piedra, papel o tijera.

- Cuando el usuario pulsa sobre una de las tres opciones que tiene, se le mostrará si ha ganado o perdido. Para ello, debemos tener en cuenta que:
  - La piedra gana a las tijeras, pero pierde contra el papel.
  - El papel gana a la piedra pero pierde contra las tijeras.
  - Las tijeras ganan al papel pero pierden contra la piedra.
  - En el caso de que la opción seleccionada por el usuario coincida con la generada aleatoriamente, tendremos un empate.

- Después de cada tirada, al cabo de 3 segundos, volveremos a empezar.
- Avanzado. Creamos la interfaz visual con tres botones: piedra, papel y tijera. Además añadimos una imagen con una interrogación en la que mostraremos la solución.
