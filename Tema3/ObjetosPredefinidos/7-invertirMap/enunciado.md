# Ejercicio 7 - Modificar objetos Map

Vimos que los objetos Map asocian claves a valores. Las claves no se pueden repetir, pero los valores sí.

Crea, para este tipo de objetos, un método llamado invertirMapa que devuelva un nuevo objeto de mapa donde las claves son los valores del mapa original. Los valores del nuevo mapa serán arrays que contengan las claves donde ese valor se repetía.

Por ejemplo, si teníamos un mapa con estas claves:

- Clave 1: Valor: "Óptimo"
- Clave 2: Valor: "Notable"
- Clave 3: Valor: "Notable"
- Clave 4: Valor: "Excelente"
- Clave 5: Valor: "Mejorable"
- Clave 6: Valor: "Excelente"
- Clave 7: Valor: "Notable"

El método será capaz de obtener este otro mapa:

- Clave: "Óptimo", Valor: [1]
- Clave: "Notable", Valor:[2,3,7]
- Clave: "Mejorable", Valor:[5]
- Clave: "Excelente", Valor:[4,6]
