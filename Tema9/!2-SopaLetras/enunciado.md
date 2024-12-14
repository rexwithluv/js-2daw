# Ejercicio 2 - Realiza una web que tenga un botón “Obtener sopa de letras”. Cuando se pulse este botón, obtendrá mediante AJAX una sopa de letras (en formato array de cadenas) y las palabras a buscar (también en un array de cadenas)

Por simplicidad, esta sopa de letras solo se resolverá en horizontal y leyendo de izquierda a derecha.

Al recibirla, cargará en pantalla la sopa de letras (mediante una tabla) y un combo-box donde estará el texto “Ninguna seleccionada” y después algunas palabras (presentes o no).

Al modificar ese combo-box se actualizarán los valores de un div con id=”resultado”. Si se elige “Ninguna seleccionada” el div indicará “No hay ninguna palabra seleccionada”.

Si se selecciona una palabra, indicará en qué lugar de la sopa de letras está su primera letra y en cual su última, tomando las posiciones 0,0 como las iniciales.

Por ejemplo:

AASOPAB
XFGHZXX

Si buscamos SOPA, nos dirá la posición inicial x=2,y=0 , posición final x=5,y=0.

Las palabras podrán estar en horizontal únicamente y se leerán de izquierda a derecha (horizontal) .

Recordad, que si en cualquier momento pulsamos el botón “Obtener sopa de letras”, se recargará dinámicamente la sopa de letras y sus palabras.

Tenéis un ejemplo de servidor de sopas de letras adjunto al enunciado y funcionando en <http://c28.daw1d.iesteis.gal/ej2.php>
