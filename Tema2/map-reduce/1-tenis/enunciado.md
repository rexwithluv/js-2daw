# Array con métodos map y reduce

En la web del club de Tenis pagan:

- Familia numerosa: 20€
- Personas con minusvalía: 30€
- Adulto individual: 40€
- Familias no numerosas: 50€

Tenemos siguiente array de los ingresos de las cuotas de socios del club de remo.

`let ingresos = [20,30,30,40,40,50,20,50,20,50,20,20,20];`

1. Presentar por pantalla los ingresos totales que tenemos.

2. Si incrementamos al doble la cuota de los que pagan menos de 30 euros, cuántos ingresos tendríamos al final.
Presentar los ingresos duplicando la cuota a los que pagan menos de 30€, es decir, las familias numerosas.

3. Necesitamos mínimo 500€, si los ingresos llegan a los 500€ que mande un alert comentando que "Hay que incrementar a cuota a los socios que pagan menos de 30€", en caso contrario, que envíe un alert indicando "Hay que hacer reunión de socios y ver nuevas medidas".

4. Finalmente que imprima por pantalla las cuotas que pagan los socios ordenadas de forma ascendente. Para hacer esta parte, hai que emplear el objeto Set.

**Para resolver el ejercicio debes emplear los métodos `map()` y `reduce()` correspondientes a arrays.**

El resultado debería ser algo así:

## CLUB TENIS - Ingresos Socios

- Ingresos totales = 410
- Ingreso aumentando cuota a las familias numerosas => 530
- Ingresos aumentando cuota a las familias numerosas (Calculando con reduce sólo) 530
- Cuotas de los socios 20|30|40|50
