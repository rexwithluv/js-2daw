# Ejercicio 5

Crear una pseudoclase llamada Factura que permita instanciar objetos de ese tipo de la siguiente forma:

Factura(cliente,elementos)

- Cliente es un objeto que guarda los datos del cliente ( nombre, dirección, teléfono y nif )
- y elementos es un array que contiene la siguiente información por cada uno de los ítems que puede tener la factura: descripción, cantidad y precio.

Además sobre cada factura se desea guardar los siguientes datos:

- base imponible,iva, total y forma de pago.
- Por defecto, tendrán como valores 0,21,0,"contado" respectivamente.

Añade con posterioridad a la pseudoclase Factura:

- Propiedad empresa que guardará información sobre la empresa que emite la factura ( nombre, dirección, teléfono y cif ).
- Método que calcule el total de la factura (con el IVA aplicado);
- Método que muestre el total.

Realiza una instanciación de Factura y muestra su total.
