# Ejercicio 4 - Gestión catálogo productos

Implementar aplicación JavaScript para gestionar un catálogo de productos con:

- Validación por login
- La visualización y gestión de productos del catálogo
- Persistencia de datos (por ejemplo, en el navegador utilizando localStorage o a través de una base de datos en el backend (de momento no contemplada esta solución).

Login: Al cargar la página, el sistema verifica si el usuario está autenticado (sesión activa en localStorage). Si es así, se muestra el área de gestión de productos; de lo contrario, se muestra el formulario de login.

Gestión de Productos: Los productos se almacenan como un array en localStorage bajo la clave catalogoProductos. El usuario puede agregar productos, los cuales se guardan en localStorage, y se muestran en una lista con opciones para eliminar.

Cerrar Sesión: Al cerrar sesión, la clave de usuario se elimina de localStorage, y el sistema vuelve al formulario de login.

MEJORAS:

- Añadir validaciones, manejo de errores,
- Interfaz gráfica que mejore la UX.
