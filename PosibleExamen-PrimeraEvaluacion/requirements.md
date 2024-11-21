# Requirements

## Front (formulraio de login)

- [x] Crear el formulario
  - [x] Nombre de usuario
  - [x] Contraseña
  - [x] Validación contra db (localStorage)
    - [x] Cargar la pseudo-db en localStorage
  - [x] Mostrar error en caso de credenciales incorrectas
    - [x] Crear un msj hidden
    - [x] Desplegarlo en caso de error

## Gestión de productos

- [x] Crear objeto producto
  - [x] Nombre
    - [x] NO puede estar vacío
  - [x] Cantidad (integer)
    - [x] NO puede ser 0
  - [x] Precio (float)
- [x] Debe guardarse en localStorage
- [x] **C**RUD de objetos
  - [ ] Creación / inserción => mayor a cero en este momento
  - [x] Leer
  - [ ] Modificar
  - [ ] Eliminar

## Visualización de stock

- [ ] Debe mostrarse en una lista
- [ ] Debe mostrar sus datos
- [ ] Debe actualizarase dinámicamente
  - [ ] Cuando se ejecuta una operación, debe recargarse la lista
