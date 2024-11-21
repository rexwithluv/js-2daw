# Enunciado 2 - Gestión Stock

Crear una aplicación sencilla en JavaScript que permita gestionar un stock de productos y manejar el inicio de sesión de un usuario, utilizando el DOM y localStorage para guardar los datos.

## Características

Funcionalidades:

- Formulario de Login:
  - El usuario debe poder ingresar su nombre de usuario y contraseña en un formulario de login.
  - Los datos del usuario (nombre y contraseña) se validan contra un conjunto de credenciales predefinidas. (y guardadas mediante LocalStorage)
  - Si el login es exitoso, el usuario puede acceder a la interfaz para gestionar el stock de productos.
  - Si las credenciales no son correctas, debe mostrarse un mensaje de error.

- Gestión de Stock de Productos:
  - Después de un inicio de sesión exitoso, el usuario podrá agregar productos al stock, modificar la cantidad de productos existentes o eliminarlos.
  - Los productos deben tener las siguientes propiedades:
    - Nombre (texto) - no puede ser una cadena vacía
    - Cantidad (número entero) - tendrá que ser >0 en la inserción (a lo largo de las diferentes operaciones podría pasar por ser 0 o incluso negativo)
    - Precio (número decimal) - tiene que tener un valor
  - La información del stock se debe guardar en el localStorage para que persista incluso cuando el usuario cierre el navegador o recargue la página.

- Visualización de Stock:
  - El stock de productos debe mostrarse en una lista en la página.
  - Cada producto debe mostrar su nombre, cantidad y precio.
  - La lista de productos debe actualizarse dinámicamente cuando se agreguen, eliminen o modifiquen productos.

- Eventos y Interactividad:
  - Debes utilizar eventos de JavaScript para manejar las interacciones del usuario, como:
    - Clic en el botón de login para iniciar sesión.
    - Clic en botones para agregar, eliminar o modificar productos en el stock.
    - Utilizar el DOM para actualizar la interfaz de usuario de acuerdo con las interacciones.

- Requerimientos Técnicos:
  - HTML: Crear el formulario de login, los campos para agregar productos, y la tabla/lista para mostrar el stock.
  - CSS: Diseñar una interfaz sencilla para los formularios y la lista de productos.
  - JavaScript: Utilizar JavaScript para manejar los eventos del formulario de login y las interacciones con el stock, almacenando los datos en el localStorage.
  